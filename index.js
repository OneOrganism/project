let eatEl = document.getElementById("eat-el")
let spinEl = document.getElementById("spin-el")
let tasteEl = document.getElementById("taste-el")
let clicker = 0
let aEl = document.getElementById("a-el")

console.log(clicker)


function a1(){ let message = "My hormones are rustling... Giggity giggity"; aEl.innerText = message }
function a2(){ let message = "Call me Tyrone, because I don't have a punchline for this joke."; aEl.innerText = message }
function a3(){ let message = "You may want to cover up more of the plate number."; aEl.innerText = message }

function eat() {
    clicker += 1
    let times = " times"
    switch (clicker) {
    case 0: times = " times"; break
    case 1: times = " time"; break
    default: times = " times"
    }

    let message = "You have eaten the watermelon!"
    let bonus = " "
    
    if (clicker >= 2) { bonus = " (meh :/)" } 
    if (clicker >= 8) { bonus = " (cool)" }
    if (clicker >= 16) { bonus = " (epic)"; document.getElementById("eat-el").style.color = "yellow" }
    if (clicker >= 32) { bonus = " (AMAZING)"; document.getElementById("eat-el").style.color = "green" }
    if (clicker >= 60) { bonus += " don't stop, lmao." }
    if (clicker == 64) { bonus = " (Nintendo)" }
    if (clicker == 69) { bonus = " (Nice) ( ͡° ͜ʖ ͡°)" }
    if (clicker >= 128) { bonus = " (You're good, try to get to 420)"; document.getElementById("eat-el").style.color = "violet" }
    if (clicker >= 140) { bonus = " " }
    if (clicker >= 170) { bonus = "                                      Well done for trying..." }
    if (clicker >= 220) { bonus = "                                      You're nearly there, just keep going on..." }
    if (clicker >= 256) { bonus = " " }
    if (clicker == 420) { bonus = "                                       Funny number ( ͡° ͜ʖ ͡°)" }
    if (clicker >= 421) { clicker = 0; message = " Thank you for playing." }
    
    let text = message +  " " + clicker + times + bonus
1
    eatEl.innerText = text

    let taste = "Was it tasty?"
    tasteEl.innerText = taste
}

function lmao() {
    let message = "???????????"

    spinEl.innerText = message
}