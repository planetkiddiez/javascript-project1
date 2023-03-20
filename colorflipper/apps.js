const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn");

btn.addEventListener('click', function(){
    document.body.style.backgroundColor = colors[colorCounter()]
})

function colorCounter(){
    return Math.floor(Math.random() * colors.length)

}
