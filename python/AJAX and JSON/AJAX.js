let container = document.getElementById("info");
let btn = document.getElementById("btn");
btn.addEventListener("click", Data);
function Data() {
    let xml = new XMLHttpRequest();
    xml.open("GET", "cat.json");
    xml.onload = function () {
        let jsonData = JSON.parse(xml.responseText);
        renderHtml(jsonData);
    }
    xml.send();
}
function renderHtml(data){
    let htmlString ="";
    for(let index =0; index<data.length;index++){
        htmlString +=`<p> Name: ${data[index].name} species is ${data[index].species}.</p>`
    }
    container.insertAdjacentHTML("beforeend",htmlString);

}