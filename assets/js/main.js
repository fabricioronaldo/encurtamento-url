const url = document.querySelector("#url");
const button = document.querySelector(".url__button");
const result = document.querySelector("#result");
const copy = document.querySelector(".item__button");
console.log(copy);
const url_encu = document.querySelector(".item__link");
console.log(url_encu);

/*const showData = (result) => {
    console.log(result)
    const link1 = document.querySelector(".link-1")
    const link2 = document.querySelector(".link-2")
    const link3 = document.querySelector(".link-3")
    link1.textContent = result.result.short_link
    link2.textContent = result.result.short_link2
    link3.textContent = result.result.short_link3
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


/*function copy_text() {
    navigator.clipboard.writeText(url_encu.innerHTML);
    //copy[i].innerHTML = 'Copiado';
}

for ( i in copy ) {
    copy[i].addEventListener("click", copy_text);
    
}*/
/*
for ( i in copy ) {
    copy.addEventListener("click", () => {
        navigator.clipboard.writeText(url_encu.innerHTML);
        copy[i].innerHTML = 'Copiado';
    });
    
}

copy.addEventListener('click', function (event) {

    //let url = document.querySelector('.item__link');
    url_encu.innerHTML;
    console.log(url_encu);
    document.execCommand('copy');

});

console.log(copy)*/


button.addEventListener("click", (evento) => {
    //result.classList.remove("none");
    let search = url.value;
    let link;
    fetch (`https://api.shrtco.de/v2/shorten?url=${search}`)
    .then(response => { response.json()
        .then(data => showData(data))
    })
    .catch(evento => console.log('Ocorreu um erro!!!' + evento,message))
});

const showData = (result) => {
    console.log(result)
    const link = result.result.short_link2;
    console.log(link);

    let divResultItem = document.createElement("div");
    divResultItem.className = "result__item"
    
    let linkOrigin = document.createElement("span");
    linkOrigin.className = "item__link";
    linkOrigin.innerHTML = url.value;
    
    let divResulItemChild = document.createElement("div");
    
    let linkShort = document.createElement("span");
    linkShort.className = "item__link , item__link-short";
    linkShort.innerHTML = link;
    
    let button = document.createElement("button");
    button.className = "item__button";
    button.innerHTML = "Copy";
    
    button.addEventListener('click', copyUrl);
    

    divResultItem.appendChild(linkOrigin);
    divResultItem.appendChild(divResulItemChild);
    divResulItemChild.appendChild(linkShort);
    divResulItemChild.appendChild(button);

    let local = document.getElementById("result");
    local.after(divResultItem)
}

function copyUrl(event){
    const e = event;
    const copyLink = e.path[1].childNodes[0].innerText
    console.log(copyLink);
    navigator.clipboard.writeText(copyLink);
    
    const buttonCopy = e.path[0];

    if (buttonCopy.innerHTML == "Copy") {

        const innerButton = document.querySelectorAll('.item__button');
        console.log(innerButton);
        for (let i = 0; i < innerButton.length; i++) {
            innerButton[i].innerHTML = "Copy";
            innerButton[i].style.background = 'var(--Cyan)';
        }

        buttonCopy.innerHTML = "Copied";
        buttonCopy.style.background = 'var(--Dark-Violet)';
    } else {
        buttonCopy.innerHTML = "Copy";
        buttonCopy.style.background = 'var(--Cyan)';
    }
}

