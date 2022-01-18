console.log("Hello")

document.querySelector("#read-more-btn").addEventListener('click', function () {
    document.querySelector("#more-text").style.display = "inline";
    document.querySelector("#read-more-btn").style.display = "none";
})

function newFunction() {
    $('.carousel').carousel({
        interval: 1000
    });
}
