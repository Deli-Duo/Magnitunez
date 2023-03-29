const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa0cb7e2f1msh9b59f67b1eb228ep132237jsn1ad890c3071e',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

const genres = document.getElementById('genres');
const search = document.getElementById('search');
const searchButton = document.getElementById('search-button');
const recommendedButton = document.querySelector('#recommended');
const historyButton = document.querySelector('#history');
const likedSongsButton = document.querySelector('#liked');
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

// Raven: Display recommended artists based on the most recently searched artist's Spotify ID
// Adding placeholder variable for the fetch for now
let id = ''
likedSongsButton.addEventListener('click', (e) => {
  e.preventDefault()
  
})