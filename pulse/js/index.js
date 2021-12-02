let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true
  });


const catalogMore = document.querySelectorAll('.catalog__item-more')
const catalogMain = document.querySelectorAll('.catalog__item-main')
const catalogLi = document.querySelectorAll('.catalog__item-list')
const catalogBack = document.querySelectorAll('.catalog__item-back')

catalogMore.forEach((item,i) => item.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(e.target)
  catalogLi[i].classList.toggle('catalog__item-list-active')
  catalogMain[i].classList.toggle('catalog__item-list-inactive')
}))

catalogBack.forEach((item,i) => item.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(e.target)
  catalogLi[i].classList.toggle('catalog__item-list-active')
  catalogMain[i].classList.toggle('catalog__item-list-inactive')
}))

const modalConsultation = document.querySelectorAll('.consultationBtn')
const overlay = document.querySelector('.overlay')
const consultation = document.querySelector('#consultation')
const modalClose = document.querySelectorAll('.modal__close')


modalConsultation.forEach(item => item.addEventListener('click', () => {
  overlay.style = 'display:block'
  consultation.classList.remove('none')
  modalOrder.classList.add('none')
}))

modalClose.forEach(item => item.addEventListener('click', () => {
  overlay.style = 'display:none'
}))

const modalOrder = document.querySelector('#order')
const orderBtn = document.querySelector('.button-catalog')

orderBtn.addEventListener('click', () => {
  overlay.style = 'display:block'
  modalOrder.classList.remove('none')
  consultation.classList.add('none')
})

const consForm = document.querySelector('.consultation__inputs')
const inputs = document.querySelectorAll('input')
