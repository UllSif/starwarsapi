var movietest = document.getElementById('movie')
id = sessionStorage.getItem('movieId');


console.log(id)
fetch('/api/movie/' + id)
    .then(function (response) {
        console.log(response)
        return response.json()
    })
    .then(function (movie) {

        console.log(movie)
        var h2 = document.createElement('h2');
        h2.innerHTML = movie.Title;
        movietest.appendChild(h2);

        var p = document.createElement('p');
        p.innerHTML = movie.Plot;
        movietest.appendChild(p)
})



