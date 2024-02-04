const element = document.getElementById('phone')
const maskOptions = {
	mask: '+{7}(000)000-00-00',
}
const mask = IMask(element, maskOptions)

IMask(document.getElementById('date-mask'), {
	mask: Date,
	min: new Date(2023, 0, 1),
	max: new Date(2025, 0, 1),
	lazy: false,
})

let scrollpos = window.scrollY

const header = document.querySelector('header')
const scrollChange = 85

const classOnScroll = () => header.classList.add('fixed')
const removeClassOnScroll = () => header.classList.remove('fixed')

window.addEventListener('scroll', function () {
	scrollpos = window.scrollY

	if (scrollpos >= scrollChange) {
		classOnScroll()
	} else {
		removeClassOnScroll()
	}
})

const reviewCard = document.querySelector('.reviews__wrapper-block')

const reviewData = [
	{
		name: 'Марина',
		detail: 'Фотосессия',
		review:
			'Я очень рад, что мой друг посоветовал мне этот сервис. Я уже давно хотел устроить своей жене классную фотосессию, и благодаря этому месту наша мечта сбылась. Фотографии получились просто потрясающими - качество наивысшее, каждый кадр пропитан эмоциями и красотой. Мы были приятно удивлены, увидев результаты работы профессионала. Но самое главное, что цена на услуги была вполне адекватной и доступной для нас. Мы получили отличное качество по разумной цене, что не всегда бывает возможно. Команда фотографов оказалась очень талантливой и внимательной к деталям, они создали атмосферу комфорта и доверия, благодаря чему мы смогли расслабиться и насладиться процессом. Мы остались довольны результатом и с уверенностью можем рекомендовать этот сервис всем, кто хочет получить качественные и запоминающиеся фотографии.Также стоит отметить, что весь процесс сотрудничества с сервисом был очень простым и удобным. Мы смогли легко выбрать удобное для нас время и место для фотосессии, а также обсудить все детали и пожелания с фотографами. Команда была гибкой и готова учесть все наши пожелания, что сделало процесс еще более приятным. Мы получили фотографии в оговоренные сроки и были приятно удивлены, как быстро и качественно они были обработаны. В целом, мы остались очень довольны работой сервиса и надеемся в будущем воспользоваться его услугами снова.',
		advantage: 'Отличный сервис, хорошее отношение персонала и приятные цены.',
		disAdvantage: 'Их нет',
		mark: './photo/best.svg',
		mainPhoto: '/photo/photoshot3.jpg',
		photo: [{ img: '/photo/photoshot2.jpg' }, { img: '/photo/photoshot.jpg' }],
	},
	{
		name: 'Елена',
		detail: 'Фотосессия',
		review:
			'Сегодня я расскажу свою историю, как я попал сюда и мои, предпосылки. Данный сервис мне посоветовал мой друг, который, давно работает с сфере фотографирования и мимо меня это не, прошло бесследно. Моя жена хотела устроить классную фотосессию, и мы обратилисбь именно сюда, все просто отлично, фотографии, сделаны в наивысшем качестве, а что самое главное - адекватная, цена',
		advantage: 'Отличный сервис, хорошее отношение персонала и приятные цены',
		disAdvantage: 'Их нет',
		mark: './photo/best.svg',
		mainPhoto: '/photo/photoshot11.jpg',
		photo: [
			{ img: '/photo/photoshot11.jpg' },
			{ img: '/photo/photoshot12.jpg' },
			{ img: '/photo/photoshot13.jpg' },
		],
	},
	{
		name: 'Екатерина',
		detail: 'Фотосессия',
		review:
			'Сегодня я расскажу свою историю, как я попал сюда и мои, предпосылки. Данный сервис мне посоветовал мой друг, который, давно работает с сфере фотографирования и мимо меня это не, прошло бесследно. Моя жена хотела устроить классную фотосессию, и мы обратилисбь именно сюда, все просто отлично, фотографии, сделаны в наивысшем качестве, а что самое главное - адекватная, цена',
		advantage: 'Отличный сервис, хорошее отношение персонала и приятные цены',
		disAdvantage: 'Их нет',
		mark: './photo/best.svg',
		mainPhoto: './photo/blackPhoto2.jpg',
		photo: [
			{ img: './photo/blackPhoto3.jpg' },
			{ img: './photo/blackPhoto3.jpg' },
			{ img: './photo/blackPhoto1.jpg' },
		],
	},
]

const body = document.querySelector('body')
const headerMain = document.querySelector('header')

const overlay = document.querySelector('.overlay')

const closeFeedback = document.querySelector('.feedback-close')

const popupShowBtn = document.querySelectorAll('.popup_btn')

const popupShow = () => {
	overlay.classList.add('overlay_show')
}

if (popupShowBtn) {
	popupShowBtn.forEach(btn => {
		btn.addEventListener('click', popupShow)
	})
}

if (closeFeedback) {
	closeFeedback.addEventListener('click', () => {
		overlay.classList.remove('overlay_show')
		body.classList.remove('body_fixed')
	})
}

const modalReviewShow = index => {
	const Modal = document.getElementById('modal')
	if (Modal.style.display === 'none') {
		Modal.style.display = 'block'
		document.body.style = 'overflow:hidden'
		const cardReview = reviewData[index]
		const photoHTML = cardReview.photo
			.map(
				item =>
					`<img style="width: 180px; height: 200px; object-fit: cover" src="${item.img}" alt="" />`
			)
			.join('')
		Modal.innerHTML += `
      <div class="modal__wrapper"> 
        <div onclick="closeModal()" class="btn_close"> 
          <div class="cl-btn-7"></div> 
        </div> 
        <div class="modal__card-info"> 
          <div class="reviews__card-header"> 
            <img class="reviews__card-avatar" src="./photo/avatar.jpg" alt="Avatar" /> 
            <h1 class="reviews__card-title">${cardReview.name}</h1> 
            <div class="reviews__card-service"> 
              <p>${cardReview.detail}</p> 
            </div> 
          </div> 
          <div class="modal_review"> 
            <h1 class="reviews__card-review-title">Отзыв клиента</h1> 
            <article class="modal_review-article">${cardReview.review}</article> 
          </div> 
          <div class="reviews__card-advatages"> 
            <h1>Достоинства:</h1> 
            <p>${cardReview.advantage}</p> 
            <h1>Недостатки:</h1> 
            <p>${cardReview.disAdvantage}</p> 
          </div> 
          <div class="reviews__card-footer-mark"> 
            <h1>Оценка:</h1> 
            <img src="${cardReview.mark}" alt="Best" /> 
          </div> 
        </div> 
        <div class="modal__card-photo"> 
          <div class="review__photo"> 
            <div class="modal__main_photo"> 
              <img class="review_big-photo" src="${cardReview.mainPhoto}" alt="" /> 
              <div class="modal__main-photo-child"> 
              	${photoHTML}
              </div> 
            </div> 
          </div> 
        </div> 
      </div>`
	} else {
		Modal.style.display = 'none'
		document.body.style = 'overflow:scroll'
	}
}

const closeModal = () => {
	const Modal = document.getElementById('modal')
	Modal.style.display = 'none'
	document.body.style = 'overflow:scroll'
}

const reviewFunction = () => {
	const cardContainer = document.getElementById('card')
	cardContainer.innerHTML = ''
	reviewData.forEach((card, index) => {
		const cardElement = document.createElement('div')
		cardElement.classList.add('reviews__wrapper-card')
		cardElement.innerHTML = `
    <div class="reviews__wrapper-card"><div class="reviews__card"> <div class="reviews__card-header">
								<img
									class="reviews__card-avatar"
									src="./photo/avatar.jpg"
									alt="Avatar" />
								<h1 class="reviews__card-title">${card.name}</h1>
								<div class="reviews__card-service">
									<p>${card.detail}</p>
								</div>
							</div>
							<div class="reviews__card-review">
								<h1 class="reviews__card-review-title">Отзыв клиента</h1>
								<article>
									${card.review}
								</article>

								<div class="reviews__card-advatages">
									<h1>Достоинства:</h1>
									<p>
										${card.advantage}
									</p>
									<h1>Недостатки:</h1>
									<p>${card.disAdvantage}</p>
								</div>
							</div>
							<div class="reviews__card-footer">
								<div class="reviews__card-footer-mark">
									<h1>Оценка:</h1>
									<img src="${card.mark}" alt="Best" />
								</div>
								<button onclick="modalReviewShow(${index})"  class="button-84 button-review">Читать отзыв</button>
							</div></div></div>`
		cardContainer.appendChild(cardElement)
	})
}

reviewFunction()

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
})
const myButton = document.getElementById('myButton')

let banner = document.querySelector('.section_photo-about')
let banner_content = document.querySelector('.photographer')

document.onmousemove = e => {
	let x = e.clientX / window.innerWidth
	let y = e.clientY / window.innerHeight

	banner.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)'
	banner_content.style.transform =
		'translate(-' + x * 75 + 'px, -' + y * 75 + 'px)'
}

setTimeout(() => {
	tippy(myButton, {
		content: 'Подберем для вас лучшее решение',
		duration: -1,
		arrow: false,
		delay: 2,
	})
}, 3500)

// gsap.to('.texth1', {
// 	x: -80,
// 	scale: 1,
// 	duration: 2,
// })
// gsap.to('.textp', {
// 	x: -40,
// 	scale: 1.1,
// 	duration: 2,
// 	delay: 1,
// })

const tl = gsap.timeline()

tl.fromTo(
	'.textp',
	{
		x: -200,
		opacity: 0,
	},
	{
		x: 0,
		opacity: 1,
		duration: 1,
		delay: 0.5,
	}
)
	.fromTo(
		'.texth1',
		{
			y: 50,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 1,
		}
	)
	.fromTo(
		'.button-86',
		{
			y: -50,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 1,
		}
	)

const scrollTop = document.querySelector('.logo_wrapper')
scrollTop.addEventListener('click', () => {
	window.scroll(0, 0)
})
