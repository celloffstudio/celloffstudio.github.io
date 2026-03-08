class Game {
    constructor(clicks, cpc, prices, bought) {
        this.clicks = clicks;
        this.cpc = cpc;
        this.prices = prices;
        this.bought = bought;
    }
    Click() {
        game.clicks += game.cpc;
        PlayAudio("resources/pages/clicker/click.mp3", 1);
        UpdateUI(this);
    }
    Upgrade(id) {
        switch(id) {
            case 0:
                if (this.TryUpgrade(0)) {
                    this.prices[0] *= 2;
                    this.cpc++;
                }
                break;
            default:
                console.log("Upgrade with id:" + id + " not found");
                break;
        }
        UpdateUI(this);
    }
    TryUpgrade(id) {
        if (this.clicks >= this.prices[id]) {
            this.clicks -= this.prices[id];
            this.bought[id] = true;

            PlayAudio("resources/pages/clicker/upgrade.mp3", 0.5);
            return true;
        }
        PlayAudio("resources/pages/clicker/upgrade_fail.mp3", 0.5);
        return false;
    }
}
var game = new Game(0,1,[
    10
],[
    false
]);

function UpdateUI(game) {
    document.getElementById('clicks').textContent = "Clicks: " + game.clicks;

    document.getElementById('u0').textContent = "More clicks!!! (+1 Cost:" + game.prices[0] + ")";
}