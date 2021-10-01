const divGet = document.querySelectorAll("#box-get .box");
const divSet = document.querySelectorAll("#box-set .box2");


let getColor;
for (let i = 0; i < divGet.length; i++) {

    divGet[i].addEventListener("click", function() {
        
        getColor = divGet[i].style.backgroundColor;
        console.log(getColor);

    });
};


for (let i = 0; i < divSet.length; i++) {

    divSet[i].addEventListener("click", function() {
        
    divSet[i].style.backgroundColor = getColor;
        console.log(getColor);

    });
};






