const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa0cb7e2f1msh9b59f67b1eb228ep132237jsn1ad890c3071e',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

const genres = document.getElementById('genres');
const search = document.getElementById('search');
const searchButton = document.getElementById('search-button');
let topResults

searchButton.addEventListener('click', (e) => 
{
	e.preventDefault()
	async function search () {
	await fetch(`https://spotify23.p.rapidapi.com/search/?q=${search.value}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
	.then(response => response.json())
	.then(data => {
		localStorage.setItem('song-names', JSON.stringify(data))
			topResults = data
		console.log(data)
	
	}
		) 
	.catch(err => console.error(err));
	}
	search();
	setTimeout(function () {
		window.location ="search.html"
	},1000)
	
	
})

