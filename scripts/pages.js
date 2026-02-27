function goto_page(id) {
    switch (id) {
        case "homepage":
            set_page("./index.html");
            break;
        case "github":
            set_page("https://github.com/celloffstudio/");
            break;
        case "twitter":
            set_page("https://twitter.com/Celloff___");
            break;
        case "itch":
            set_page("https://celloff.itch.io/");
            break;
        case "fun":
            set_page("./fun.html");
            break;
        case "clicker":
            set_page("./clicker.html");
            break;
        default:
            set_page("./index.html");
            break;
    }
}
function set_page(page) {
    window.location.href = page;
    console.log(page);
}

