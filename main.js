function calculatePrice(isDiscounted) {
        const price = 20;
        const discount = isDiscounted * 0.8 + (1 - isDiscounted)
        const finalPrice = price * discount;
        document.getElementById("ticketPrice").innerText = "Ticket Price: " + finalPrice.toFixed(2) + " pesos";
    }
function mouseOver(button) {
    button.style.background = "#b6724f"; // Change the background color to #a96e6a
    button.style.color = "white";        // Change the text color to white
}

// Mouse out function (restores the original background and color)
function mouseOut(button) {
    button.style.background = "#adbdb0"; // Restore the original background color #adbdb0
    button.style.color = "black";        // Restore the text color to black
}