(function(){
	const sliders =[...document.querySelectorAll(".slider_body5")];
	const arrowNext = document.querySelector('#next5');
	const arrowBefore = document.querySelector('#before5');
	let value;

	arrowNext.addEventListener('click', ()=>changePosition(1));
	arrowBefore.addEventListener('click', ()=>changePosition(-1));

	function changePosition(change){
		const currentElement = Number(document.querySelector('.slider_body--show5').id);
		value = currentElement;
		value +=change;

		if(value === 0 || value == sliders.length+1){
			value = value === 0 ? sliders.length :1;
		}
		sliders[currentElement-1].classList.toggle('slider_body--show5');
		sliders[value-1].classList.toggle('slider_body--show5');

	}

})()
