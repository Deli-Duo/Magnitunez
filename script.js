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
const likedDiv = document.querySelector('#likedDiv');
const likedList = document.querySelector('#list')
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

// Raven - Like feature
const likedListOl = document.createElement('ol');
const likedListLi = document.createElement('li');
const likedSongs = (JSON.parse(localStorage.getItem('likedSongs')));
console.log(likedSongs);

for (let i = 0; i < 5; i++) {
	let songTitle = likedSongs[i]['title']; 
	let songArtist = likedSongs[i]['artist'];
	// console.log(`"${songTitle}" - ${songArtist}`);
	likedListLi.innerText = `"${songTitle}" - ${songArtist}`
    likedListOl.append(likedListLi);
	likedList.append(likedListOl);
}
likedList.style.display === "none"; 

likedSongsButton.addEventListener('click', (e) => {
  e.preventDefault()
  if (likedList.style.display === "none") {
	likedList.style.display === "block";
  }
  else {
	likedList.style.display === "none";
  }
//   let likedList = document.createElement('ol');
//   let likedSongs = (JSON.parse(localStorage.getItem('likedSongs')));
//   console.log(likedSongs)
//   for (let song in likedSongs) {
//     likedList.append(song)
//     console.log(song['title'], song['artist'])
//   }
})