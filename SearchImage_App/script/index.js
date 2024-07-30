
let SearchText = document.getElementById("search");
let button = document.getElementById("button");
let imageDiv = document.getElementById("image");
let loadMore = document.getElementById("load");
let pageVal =1;

button.addEventListener("click", () => {
    let userTypeValue = SearchText.value;
    searchImage(pageVal,userTypeValue);

});
loadMore.addEventListener("click", () => {
    let userTypeValue = SearchText.value;
    pageVal++;
    searchImage(pageVal,userTypeValue);
});

async function searchImage(pageVal,SearchText) {
    // console.log(SearchText);
    let response = await fetch(`https://api.unsplash.com/search/photos?page=${pageVal}&query=${SearchText}&client_id=nss1Aw6orpKcSL0M5lWGPOvFSFQGKZOu3CthHbmI2Z0&per_page=12`);
    let data = await response.json();
    // console.log(data);

    let result = data.results;
    result.map((items, index) => {
        let imageItem = document.createElement("img");
        imageItem.src = data.results[index].urls['small'];
        imageDiv.appendChild(imageItem);
    })
}