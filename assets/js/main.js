const url = document.querySelector("#url");

const button = document.querySelector(".url__button")

button.addEventListener("click", (evento) => {
    let search = url.value;
    fetch (`https://api.shrtco.de/v2/shorten?url=${search}`)
    .then(response => { response.json()
        .then(data => console.log(data)) 
    })
    .catch(evento => console.log('Ocorreu um erro!!!' + evento,message))
});



/*fetch ('https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html')
.then((response) => response.json())
.then((data) => console.log(data));*/