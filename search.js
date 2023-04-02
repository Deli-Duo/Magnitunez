const results = document.querySelector('#search-results')
const likedSongArr = []; 

/*
likedSongArr = [
    {title: "party in the usa", artist: 'miley cyrus'}
]


currentPlaylistSongs = {
    party in the usa: true 
}

*/

const getEl = (classOrId) => document.querySelector(classOrId);
const createEl = (el) => document.createElement(el); 

const searchTitle = JSON.parse(localStorage.getItem('searchValue'))

console.log(searchTitle)

async function search() {
	await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=` + searchTitle, options)
	.then(response =>response.json())
	.then(data => {

		localStorage.setItem('song-names', JSON.stringify(data))
		console.log(data.data)
data.data.forEach(element => {
    let ol = document.createElement('ol')
    let div = document.createElement('div')
    let likeButton = createEl('button');
    div.innerHTML = `<audio controls>
    <source src="${element.preview}" type="audio/ogg">
  Your browser does not support the audio element.
  </audio>`
    ol.innerHTML = `<p><img src="${element.album.cover} "> ${element.title} ${element.artist.name}</p>`
    likeButton.innerText = 'Like'
    likeButton.addEventListener('click', () => {
        const likedSongObj = {};
        if (!(element.title in likedSongObj) && !(element.artist.name in likedSongObj)) {
            likedSongObj['title'] = element.title;
            likedSongObj['artist'] = element.artist.name;
            likedSongArr.push(likedSongObj);
        }
        localStorage.setItem('likedSongs', JSON.stringify(likedSongArr))
        likeButton.innerText = 'Liked'
        let likedList = JSON.parse(localStorage.getItem('likedSongs'));
        console.log(likedList);
    })
    ol.append(likeButton)
    ol.append(div)
    results.append(ol)
});	

	
	}
		) 
	.catch(err => console.error(err));
	}
	search();