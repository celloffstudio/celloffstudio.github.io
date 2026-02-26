function goto_page(id) {
    switch (id) {
        case "homepage":
            set_page("./index.html");
            break;
        case "projects":
            set_page("./projects.html");
            break;
        case "twitter":
            set_page("https://twitter.com/Celloff___");
            break;
        case "itch":
            set_page("https://celloff.itch.io/");
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