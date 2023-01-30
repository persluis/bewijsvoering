const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "",event.target.href);
    handelLocation();
};

const routes = {
    "/" : "src/pages/index.html",
    "/slot" : "src/pages/slot.html",
    "/css" : "src/pages/css.html",
    "/difference" : "src/pages/difference.html",
    "/shadow" : "src/pages/shadow.html",
}



const handelLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handelLocation;
window.route = route;

handelLocation();