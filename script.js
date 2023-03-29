const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa0cb7e2f1msh9b59f67b1eb228ep132237jsn1ad890c3071e',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

const genres = document.getElementById('genres');
const searchInput = document.getElementById('search');
const searchResults = []
const searchButton = document.getElementById('search-button');
const recommendedButton = document.querySelector('#recommended');
const historyButton = document.querySelector('#history');
const likedSongsButton = document.querySelector('#liked');
let topResult


searchButton.addEventListener('click', async (e) => 

{
	e.preventDefault()
	let searchValue = searchInput.value
	searchValue = searchValue.replace(' ', "_")
	localStorage.setItem('searchValue',JSON.stringify(searchValue))
	
	setTimeout(function () {
		window.location ="search.html"
	},3000)
	
	
})

// Raven: Display recommended artists based on the most recently searched artist's Spotify ID
// Adding placeholder variable for the fetch for now
// let id = ''
// likedSongsButton.addEventListener('click', (e) => {
//   e.preventDefault()
  
// })