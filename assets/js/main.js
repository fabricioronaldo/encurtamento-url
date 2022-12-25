const url = document.querySelector("#url");
const button = document.querySelector(".url__button")
const result = document.querySelector("#result");




const showData = (result) => {
    console.log(result)
    const link1 = document.querySelector(".link-1")
    const link2 = document.querySelector(".link-2")
    const link3 = document.querySelector(".link-3")
    link1.textContent = result.result.share_link
    link2.textContent = result.result.short_link
    link3.textContent = result.result.short_link2

    /*for(const campo in result){
        console.log(result.result.full_share_link
            )
    }*/

}

button.addEventListener("click", (evento) => {
    result.classList.remove("none");
    let search = url.value;
    fetch (`https://api.shrtco.de/v2/shorten?url=${search}`)
    .then(response => { response.json()
        .then(data => showData(data))
    })
    .catch(evento => console.log('Ocorreu um erro!!!' + evento,message))
});



/*fetch ('https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html')
.then((response) => response.json())
.then((data) => console.log(data));*/

document.querySelector("button").onclick = function() {
    var element= document.getElementById('numerosx');
    var range = document.createRange();
    range.selectNode(element);
    window.getSelection().addRange(range);
    document.execCommand("copy");
};

