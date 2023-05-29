AFRAME.registerComponent("text", {
    changeText: function(){
        welcomeText = document.getElementById("#text-entity").innerHTML = "You're currently trapped in my evil lair! /n If you solve these riddles correctly, I might let you go.."
    },

    setTimeout(changeText, 5000)
})