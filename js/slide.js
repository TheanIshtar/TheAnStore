var slideItem = document.querySelector('.slide-show').children
var slideLength = slideItem.length
var nextBtn = document.querySelector('#next')
var prevBtn = document.querySelector('#prev')
var number = document.querySelector('#number')
var index = 0

nextBtn.onclick = function() {
    handleChangeImage('next')
}
prevBtn.onclick = function() {
    handleChangeImage('prev')
}

function handleChangeImage(direction) {
    if (direction == 'next') {
        index++
        if (index == slideLength) {
            index = 0
        }
        number.innerHTML = index + 1
    } else {
        index--
        if (index < 0) {
            index = slideLength - 1
        }
        number.innerHTML = index + 1
    }
    for (var i = 0; i < slideLength; i++) {
        slideItem[i].classList.remove('active')
    }
    slideItem[index].classList.add('active')
}