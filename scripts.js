SetCardSuit = function(Suit){
    let currentCard = document.getElementById("Showcase");
    const prefix = '--Color';
    let AttributeName = prefix.concat(Suit);
    let newColor = getComputedStyle(document.body).getPropertyValue(AttributeName);
    currentCard.style.color = newColor;
    return AttributeName

}