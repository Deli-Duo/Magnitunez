const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa0cb7e2f1msh9b59f67b1eb228ep132237jsn1ad890c3071e',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

const genres = document.getElementById('genres')

fetch('https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
	.then(response => response.json())
	.then(data => {
    let listLength = genres.querySelectorAll("li").length;
      console.log(data.response.artists);
      if (listLength === 0) {
        data.response.artists.forEach((elem) => {
          let listElement = document.createElement("li");
          let anchor = document.createElement("a");
          listElement.textContent = elem.abstract;
          anchor.href = elem.web_url;
          anchor.target = "blank";
          anchor.append(listElement);
          genres.append(anchor);
        });
      } else {
        data.response.docs.forEach((elem, index) => {
          genres.querySelectorAll("a")[index].href = elem.web_url;
          genres.querySelectorAll("a")[index].target = "blank";
          genres.querySelectorAll("li")[index].textContent = elem.abstract;
        });
      }
  })
	.catch(err => console.error(err));