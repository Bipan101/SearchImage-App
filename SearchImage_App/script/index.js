
let SearchText = document.getElementById("search");
let button = document.getElementById("button");
let imageDiv = document.getElementById("image");

button.addEventListener("click", ()=>{
let userTypeValue = SearchText.value;
searchImage(userTypeValue);
 
});

async function searchImage(SearchText) {
    console.log(SearchText);
    let response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${SearchText}&client_id=nss1Aw6orpKcSL0M5lWGPOvFSFQGKZOu3CthHbmI2Z0&per_page=12`);
    let data = await response.json();
    // console.log(data);

    let result = data.results;
    result.map((items, index)=>{
        let imageItem = document.createElement("img");
        imageItem.src = data.results[index].urls['small'];
        imageDiv.appendChild(imageItem);
    })
}