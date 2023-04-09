(function(){
	const sliders =[...document.querySelectorAll(".slider_body4")];
	const arrowNext = document.querySelector('#next4');
	const arrowBefore = document.querySelector('#before4');
	let value;

	arrowNext.addEventListener('click', ()=>changePosition(1));
	arrowBefore.addEventListener('click', ()=>changePosition(-1));

	function changePosition(change){
		const currentElement = Number(document.querySelector('.slider_body--show4').id);
		value = currentElement;
		value +=change;

		if(value === 0 || value == sliders.length+1){
			value = value === 0 ? sliders.length :1;
		}
		sliders[currentElement-1].classList.toggle('slider_body--show4');
		sliders[value-1].classList.toggle('slider_body--show4');

	}

})()
