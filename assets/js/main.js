const button=document.querySelector("button");

document.addEventListener ("click", function () {
	var button=document.getElementById("button");
	button.parentNode.removeChild(button);
});


const img=document.createElement("img");
img.src="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY";
document.body.appendChild(img);


const countriesList=document.querySelector("#countriesList");
function renderCountries(countries) {
	return countries.map(
		(el) => `
		<div class="countries">
		<img class="img" src="${el.flag}" alt="${el.name}">
		<div>
		<h1 class="h1">${el.name}</h1>
		<h3 class="h3">${el.capital[0]}</h3>
		<button class="button1">Show more info</button>
		<button class="button2">Delete card</button>

		</div>
		</div>
   	`
		);
}

countriesList.innerHTML=renderCountries(countries)