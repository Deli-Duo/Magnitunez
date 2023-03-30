
const results = document.querySelector('#search-results')

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
    let li = document.createElement('li')
    let div = document.createElement('div')
    let likeButton = createEl('button');
    div.innerHTML = `<audio controls>
    <source src="${element.preview}" type="audio/ogg">
  Your browser does not support the audio element.
  </audio>`
    li.innerHTML = `<p>${element.title}"${element.artist.name}</p>`
    likeButton.innerText = 'Like'
    likeButton.addEventListener('click', () => {
        const likedSongObj = {};
        if (!(element.title in likedSongObj)) {
            likedSongObj['title'] = element.title;
            likedSongObj['artist'] = element.artist.name;
        }
        localStorage.setItem('likedSongs', JSON.stringify(likedSongObj))
        likeButton.innerText = 'Liked'
        let likedList = JSON.parse(localStorage.getItem('likedSongs'));
        console.log(likedList);
    })
    li.append(likeButton)
    li.append(div)
    results.append(li)
});	

	
	}
		) 
	.catch(err => console.error(err));
	}
	search();