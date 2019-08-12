var id = document.getElementById("id");
var cardStyle = document.getElementById("style");
var setCard = () => {
    const card = document.getElementById(id.value);
    card.style.color = cardStyle.value;
}
var reset = () =>{
    let resetCards = document.getElementsByTagName("section");
    for (i = 0; i < resetCards.length; i++){
        resetCards[i].style.color = "";
    }
}