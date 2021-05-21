let counter = document.querySelector('#counter')
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let heart = document.querySelector('#heart')
let pause = document.querySelector('#pause')
let form = document.querySelector('#comment-form')
let submit = document.querySelector('#submit')

document.addEventListener("DOMContentLoaded", startCount)

function plusCount() {
    let num = Number.parseInt(counter.textContent) + 1
    counter.textContent = num
}
let cnt
let counting
function startCount() {
    cnt = true
    counting = window.setInterval(plusCount, 1000)
}

function createLikes(){
    let li = document.createElement('li')
    li.textContent = `${counter.textContent} has been liked 1 time`
    document.querySelector('.likes').appendChild(li)
}
heart.addEventListener('click', createLikes)

function minusCount() {
    let num = Number.parseInt(counter.textContent) - 1
    counter.textContent = num
}

function pauseAll() {
    if (cnt == true) {
        window.clearInterval(counting)
        pause.textContent = " resume "
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        submit.disabled = true
        cnt = false
    } else if (cnt == false) {
        pause.textContent = " pause "
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        submit.disabled = false
        counting = window.setInterval(plusCount, 1000)
        cnt = true

    }
}
plus.addEventListener('click', plusCount)
minus.addEventListener('click', minusCount)
pause.addEventListener('click', pauseAll)
form.addEventListener('submit', addComment)
function addComment(e) {
    e.preventDefault()
    let a = form.children[0].value
    let ul = document.createElement('ul')
    ul.textContent = `${a}`
    document.querySelector('.comments').appendChild(ul)
    form.children[0].value = ""
}