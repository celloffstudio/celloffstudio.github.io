var is_local = false;

class Economy {
    constructor(one_click_is_x_money) {
        this.one_click_is_x_money = one_click_is_x_money;
    }
}

class Game {
    constructor(clicks, cpc, prices, bought, enabled, money, economy) {
        this.clicks = clicks;
        this.cpc = cpc;
        this.prices = prices;
        this.bought = bought;
        this.enabled = enabled;
        this.money = money;
        this.economy = economy;
    }
    Click() {
        game.clicks += game.cpc;
        PlayAudio("resources/pages/clicker/click.mp3", 1);
        UpdateUI(this);
    }
    Upgrade(id, currency_id) {
        switch(id) {
            case 0: // CPC Upgrade
                if (this.TryUpgrade(0, currency_id)) {
                    this.prices[0] *= 2;
                    this.cpc++;
                }
                break;
            case 1: // Buy money
                if (this.TryUpgrade(1, currency_id)) {
                    this.money += this.prices[1]*this.economy.one_click_is_x_money;
                }
                break;
            case 2: // Multiply CPC
                if (this.TryUpgrade(2, currency_id)) {
                    this.cpc *= 1.2;
                    this.prices[2] *= 1.5;
                }
                break;
            case 3:
                if (this.TryUpgrade(3, currency_id, true)) {
                    document.getElementById("upgrades-l2-div").style = "display:block;";
                    this.AcessUpgrade(3,false);
                }
                break;
            default:
                console.log("Upgrade with id:" + id + " not found");
                break;
        }
        UpdateUI(this);
    }
    TryUpgrade(id, currency_id, is_level_upgrade) {
        if(!this.enabled[id])
            return false;

        switch(currency_id) {
            case 0: // Clicks
                if (this.clicks >= this.prices[id]) {
                    this.clicks -= this.prices[id];
                    this.bought[id] = true;

                    if (!is_level_upgrade) {
                        PlayAudio("resources/pages/clicker/upgrade.mp3", 0.5);
                    } else {
                        PlayAudio("resources/pages/clicker/new_level.mp3", 0.5)
                    }
                    return true;
                }
                else {
                    PlayAudio("resources/pages/clicker/upgrade_fail.mp3", 0.5);
                    return false;
                }
            case 1: // Money
                if (this.money >= this.prices[id]) {
                    this.money -= this.prices[id];
                    this.bought[id] = true;

                    if (!is_level_upgrade) {
                        PlayAudio("resources/pages/clicker/upgrade_cash.mp3", 0.5);
                    } else {
                        PlayAudio("resources/pages/clicker/new_level.mp3", 0.5)
                    }
                    return true;
                } else {
                    PlayAudio("resources/pages/clicker/upgrade_fail.mp3", 0.5);
                    return false;
                }
            default:
                console.log("Currency with id:" + currency_id + " not found");
                break;
        }
    }
    AcessUpgrade(id, enable) {
        this.enabled[id]=enable;
        if (this.enabled[id]) {
            document.getElementById("u"+id).style="";
        }
        else {        
            document.getElementById("u"+id).style="background-color: #3d6f706b;";
        }
    }
}
var game = new Game(0,1,[
    10,
    6,
    10,
    1000
],[
    false,
    false,
    false,
    false,
],[
    true,
    true,
    true,
    true,
],0, new Economy(0.03));

function UpdateUI(game) {
    document.getElementById('clicks').textContent = "Clicks: " + game.clicks;
    document.getElementById('money').textContent = "Money: " + game.money;

    document.getElementById('u0').textContent = "More clicks!!! (+1 Cost:" + game.prices[0] + " Clicks)";
    document.getElementById('u1').textContent = "Buy money (+"+game.prices[1]*game.economy.one_click_is_x_money+" Cost:" + game.prices[1] + " Clicks)";
    document.getElementById('u2').textContent = "Multiply click gain (*1.05 Cost:" + game.prices[2] + " Money)";
    document.getElementById('u3').textContent = "New level (Cost:" + game.prices[3] + " Clicks)";
}
function Update() {
    window.requestAnimationFrame(Update);
}
function Awake() {
    if (window.location.protocol === 'file:') {
        is_local = true;
    }
    else {
        is_local = false;
    }
    console.log("Loaded!");
    Update();
}
Awake();