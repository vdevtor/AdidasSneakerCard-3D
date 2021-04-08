window.onload = function(){

//moviment and animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//ITENS

const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//Moving animation event

container.addEventListener('mousemove', (e) =>{

	let xAsis = (window.innerWidth / 2 - e.pageX) / 25;
	let yAsis = (window.innerHeight / 2 - e.pageY) / 25;
	card.style.transform = `rotateY(${xAsis}deg) rotateX(${yAsis}deg)`;

});
//animate in
container.addEventListener('mouseenter', (e) =>{

	card.style.transition ='none';

	//pop out

	title.style.transform = "translateZ(150px)";
	sneaker.style.transform = "translateZ(155px) rotateZ(-35deg)";
	description.style.transform = "translateZ(150px)";
	sizes.style.transform = "translateZ(150px)";
	purchase.style.transform = "translateZ(150px)";
});


//Animate out
container.addEventListener('mouseleave', (e) =>{

	card.style.transition ='all 0.5s ease';
	card.style.transform =`rotateY(0deg) rotateX(0deg)`;

	//Pop back

	title.style.transform = "translateZ(0px)";
	sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
	description.style.transform = "translateZ(0px)";
	sizes.style.transform = "translateZ(0px)";
	purchase.style.transform = "translateZ(0px)";
});



}
