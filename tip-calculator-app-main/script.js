var billInput = document.getElementById("billAmount")
var calcButton = document.getElementById("calculateButton")
var peopleInput = document.getElementById("peopleAmount")

var fivePer = document.getElementById("fivePercent")
var tenPer = document.getElementById("tenPercent")
var fifteenPer = document.getElementById("fifteenPercent")
var twentyfivePer = document.getElementById("twentyfivePercent")
var fiftyPer = document.getElementById("fiftyPercent")
var customTip = document.getElementById("customPercent")

var tipAmtLabel = document.getElementById("tipAmountPer")
var totalAmtLabel = document.getElementById("totalAmountPer")

let selectTip = 0

calcButton.addEventListener("click", function(){
    let billAmt = billInput.value
    let tip = billAmt*selectTip // Tip
    let total = Number(billAmt) + tip // Total + Tip

    let pplAmount = peopleInput.value
    let partyTip = tip/pplAmount
    let partyTipRounded = Math.round(partyTip*100)/100
    let partyTotal = total/pplAmount
    let partyTotalRounded = Math.round(partyTotal*100)/100

    console.log(`Party Tip: $${partyTipRounded}, Party Total: $${partyTotalRounded}`)

    tipAmtLabel.innerHTML = `$${partyTipRounded}`
    totalAmtLabel.innerHTML = `$${partyTotalRounded}`
})
fivePer.addEventListener("click", function(receiptTip){
    receiptTip = 5
    selectTip = receiptTip*.01
    console.log(`multiplier ${selectTip}`)
})
tenPer.addEventListener("click", function(receiptTip){
    receiptTip = 10
    selectTip = receiptTip*.01
    console.log(`multiplier ${selectTip}`)
})
fifteenPer.addEventListener("click", function(receiptTip){
    receiptTip = 15
    selectTip = receiptTip*.01
    console.log(`multiplier ${selectTip}`)
})
twentyfivePer.addEventListener("click", function(receiptTip){
    receiptTip = 25
    selectTip = receiptTip*.01
    console.log(`multiplier ${selectTip}`)
})
fiftyPer.addEventListener("click", function(receiptTip){
    receiptTip = 50
    selectTip = receiptTip*.01
    console.log(`multiplier ${selectTip}`)
})
customTip.addEventListener("focusout", function(receiptTip){
    receiptTip = customTip.value
    selectTip = receiptTip*.01
    console.log(`multiplier ${selectTip}`)
})