function ticketExchange(ticket, isIncrease) {
    const ticketCount = getInputValue(ticket);

    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }

    document.getElementById(ticket + "-count").value = ticketNewCount;
    calculateTotal();
}

function calculateTotal() {
    const firstClassCount = getInputValue("firstclass");
    const economyClassCount = getInputValue("economyclass");

    const totalPrice = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById("total-price").innerText = "$" + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById("tax-amount").innerText = "$" + tax;
    const grandTotal = totalPrice + tax;
    document.getElementById("grand-total").innerText = "$" + grandTotal;
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

function greeting() {
    document.getElementById("buying-area").style.display = "none";
    document.getElementById("confirmation-area").style.display = "block";
}

function backToHome() {
    document.getElementById("confirmation-area").style.display = "none";
    document.getElementById("buying-area").style.display = "block";
}