class Game {
    constructor(clicks, cpc, prices) {
        this.clicks = clicks;
        this.cpc = cpc;
        this.prices = prices;
    }
    Click() {
        game.clicks += game.cpc;
        UpdateUI(this);
    }
    Upgrade(id) {
        switch(id) {

        }
    }
}
var game = new Game(0,1,[

]);

function UpdateUI(game) {
    document.getElementById('clicks').textContent = "Clicks: " + game.clicks;
}