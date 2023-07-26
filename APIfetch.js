 function joke(){
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(function(data){
        return data.json();
    })
    .then(function (joke){
        let setup = joke.setup;
        let punchline = joke.punchline;
        document.getElementById("text1").innerHTML = "Setup: " + setup;
        document.getElementById("text2").innerHTML = "Punchline: " + punchline;
    });
}