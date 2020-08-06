var element_2 = document.querySelector('#element_2')
var submenu_2 = document.querySelector('#element__block_2')
var element_22 = document.querySelector('#element_22')
var submenu_22 = document.querySelector('#element__block_22')
var element_24 = document.querySelector('#element_24')
var submenu_24 = document.querySelector('#element__block_24')
var element_4 = document.querySelector('#element_4')
var submenu_4 = document.querySelector('#element__block_4')
var intro = document.getElementsByClassName('.intro')
var headerMenu = document.getElementsByClassName('.header')

element_2.onclick = function () {
    if (submenu_2.style.display === 'none') {
        submenu_2.style.display = 'block'
        submenu_4.style.display = 'none'
    } else {
        submenu_2.style.display = 'none'
        submenu_4.style.display = 'none'
    }
    return
}

headerMenu.onmouseover = function() {

}

headerMenu.onmouseout = function() {

}

element_22.onclick = function() {
    if (submenu_22.style.display === 'none') {
        submenu_22.style.display = 'block'
    } else {
        submenu_22.style.display = 'none'
    }
    return
}

element_24.onclick = function() {
    if (submenu_24.style.display === 'none') {
        submenu_24.style.display = 'block'
    } else {
        submenu_24.style.display = 'none'
    }
    return
}

element_4.onclick = function () {
    if (submenu_4.style.display === 'none') {
        submenu_4.style.display = 'block'
        submenu_2.style.display = 'none'
    } else {
        submenu_4.style.display = 'none'
        submenu_2.style.display = 'none'
    }
    return
}
