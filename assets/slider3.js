(function(){
	const sliders =[...document.querySelectorAll(".slider_body3")];
	const arrowNext = document.querySelector('#next3');
	const arrowBefore = document.querySelector('#before3');
	let value;

	arrowNext.addEventListener('click', ()=>changePosition(1));
	arrowBefore.addEventListener('click', ()=>changePosition(-1));

	function changePosition(change){
		const currentElement = Number(document.querySelector('.slider_body--show3').id);
		value = currentElement;
		value +=change;

		if(value === 0 || value == sliders.length+1){
			value = value === 0 ? sliders.length :1;
		}
		sliders[currentElement-1].classList.toggle('slider_body--show3');
		sliders[value-1].classList.toggle('slider_body--show3');

	}

})()
