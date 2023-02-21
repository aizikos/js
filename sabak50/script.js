//Promise]

var url = [
    "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
    "(https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
]

let result = url.map(url =>fetch(url));

Promise.all(result)
    .then(responses => responses.forEach(
        response => console.log(`${response.url}: ${response.status}`)
    ));