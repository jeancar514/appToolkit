(function(){
	const sliders =[...document.querySelectorAll(".slider_body2")];
	const arrowNext = document.querySelector('#next2');
	const arrowBefore = document.querySelector('#before2');
	let value;

	arrowNext.addEventListener('click', ()=>changePosition(1));
	arrowBefore.addEventListener('click', ()=>changePosition(-1));

	function changePosition(change){
		const currentElement = Number(document.querySelector('.slider_body--show2').id);
		value = currentElement;
		value +=change;

		if(value === 0 || value == sliders.length+1){
			value = value === 0 ? sliders.length :1;
		}
		sliders[currentElement-1].classList.toggle('slider_body--show2');
		sliders[value-1].classList.toggle('slider_body--show2');

	}

})()
