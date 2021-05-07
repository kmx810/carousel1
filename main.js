let carousel = document.getElementById("main");
let barColors = {
    "Fire": "red",
    "Water": "blue",
    "Wisteria": "#62568f"
};

let panelList = [
    {
        picture: "https://cdn.pixabay.com/photo/2020/12/27/18/39/open-fire-5865005_1280.jpg",
        title: "Hot fire",
        console: "Fire"
    },
    {
        picture: "https://cdn.pixabay.com/photo/2019/12/06/06/30/fire-4676712_1280.jpg",
        title: "Learn more",
        console: "Fire"
    },
    {
        picture: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Water_drop_impact_on_a_water-surface_-_%281%29.jpg",
        title: "Nice picture",
        console: "Water"
    },
    {
        picture: "https://upload.wikimedia.org/wikipedia/commons/1/1d/National_Gallery_of_Art_with_Wisteria_on_Wall.jpg",
        title: "Nice tree",
        console: "Wisteria"
    }


]

function makePanel(panelObject){
    let newPanel = document.createElement("div");
    newPanel.setAttribute("class", "panel");
    let newPanelImg = document.createElement("img");
    newPanelImg.setAttribute("src", panelObject["picture"]);
    let newPanelH2 = document.createElement("h2");
    newPanelH2.appendChild(document.createTextNode(panelObject["title"]));
    let newPanelP = document.createElement("p");
    newPanelP.style.borderBottomColor = barColors[panelObject["console"]];
    newPanelP.appendChild(document.createTextNode(panelObject["console"]));
    newPanel.appendChild(newPanelImg);
    newPanel.appendChild(newPanelH2);
    newPanel.appendChild(newPanelP);

    return newPanel;
}
function setCarouselPosition(n){
    carousel.style.left = `${299*n}px`;
}
function sum(a, b){
    console.log(a + " + " + b + " = " + (a+b));
}
function sum2(a, b){
    console.log(`${a} + ${b} = ${a+b}`);
}

for(let panel of panelList){
    carousel.appendChild(makePanel(panel));
}