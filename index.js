// template_your7ex
// service_d91g7s3
// Pjp-6drs8FHwQMi17

function contact(event){
	event.preventDefault()
	const loading = document.querySelector('.modal__overlay--loading')
	const success = document.querySelector('.modal__overlay--success')
	
	loading.classList += " modal__overlay--visible"

	emailjs
		.sendForm(
			'service_d91g7s3',
			'template_your7ex',
			event.target,
			'Pjp-6drs8FHwQMi17'
		).then(() => {
			loading.classList.remove("modal__overlay--visible")
			success.classList += " modal__overlay--visible"
		}).catch(() => {
			loading.classList.remove("modal__overlay--visible")
			alert(
				"The email service is temporarily unavailable. Please contact me directly on pk.oaferina@gmail.com"
			)
		})

}

let isModalOpen = false;

function toggleModal(){
	if (isModalOpen){
		isModalOpen = false;
		return document.body.classList.remove("modal--open")
	}

	isModalOpen = !isModalOpen;
	document.body.classList += " modal--open"
}
