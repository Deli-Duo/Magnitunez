
const results = document.querySelector('#search-results')

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
    div.innerHTML = `<audio controls>
    <source src="${element.preview}" type="audio/ogg">
  Your browser does not support the audio element.
  </audio>`
    li.innerHTML = `<p>${element.title}"${element.artist.name}</p>`
    li.append(div)
    results.append(li)
});	

	
	}
		) 
	.catch(err => console.error(err));
	}
	search();