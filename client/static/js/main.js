var mainContent = document.getElementById('main-content')

fetch('/api/movie')
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (myJson) {
        // console.log(myJson);

        myJson.forEach(function (movie) {
            // console.log(movie)

            var div = document.createElement('div');
            div.classList.add('col-3');

            var h2 = document.createElement('h2');
            h2.innerHTML = movie.Title;

            var img = document.createElement('img');
            img.src = movie.Poster;

            var a = document.createElement('a');
            a.appendChild(img);
            a.href = "/movie/" + movie._id;
            a.addEventListener("click", () => {
                movieSelected(movie._id)
            })

            var p = document.createElement('p');
            p.innerHTML = 'Année de sortie : ' + movie.Year;

            mainContent.appendChild(div);
            div.appendChild(h2);
            div.appendChild(a);
            div.appendChild(p);
        })
    })

function movieSelected(id) {
    sessionStorage.setItem('movieId', id);
}

