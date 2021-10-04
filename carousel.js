document.addEventListener('DOMContentLoaded', ()=> {
	
	const previousButton = document.querySelector('.previous');
	const nextButton = document.querySelector('.next');
	const content = document.querySelector('.carousel .content_carousel');
	const totalItems = document.querySelectorAll('.carousel .content_carousel >*').length - 1;
	let activeItem = 0;
	
	previousButton.addEventListener('click', ()=> {
		if (activeItem === 0) {
			activeItem = totalItems;
			content.style.transform = `translateX(-${totalItems * 100}%)`;
		} else {
			activeItem--;
			content.style.transform = `translateX(-${activeItem * 100}%)`;
		}
	});

	nextButton.addEventListener('click', ()=> {
		if (activeItem < totalItems) {
			activeItem++;
			content.style.transform = `translateX(-${activeItem * 100}%)`;
		} else {
			activeItem = 0;
			content.style.transform = `none`;
		}
	});

	/*
	setInterval(() => {// auto play do carrosel
		if (activeItem < totalItems) {
			activeItem++;
			content.style.transform = `translateX(-${activeItem * 100}%)`;
		} else {
			activeItem = 0;
			content.style.transform = `none`;
		}
	}, 5000);
	*/
});