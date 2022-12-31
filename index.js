const countries = ["Peru", "Brazil", "Japan"]

document.getElementById("rollButton").onclick = myFunction

function myFunction() {
    const x = Math.floor(Math.random() * 3);
    document.getElementById("xlabel").innerHTML = countries[x];
}


