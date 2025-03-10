let count=0;
const fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Dragonfruit",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tangerine",
    "Ugli fruit",
    "Vanilla bean",
    "Watermelon",
    "Xigua",
    "Yuzu",
    "Zucchini"
];
let fruitsArr=document.getElementById('list');
let searchElement=document.getElementById('search');
searchElement.addEventListener('input',()=>{
    performanceSearch();
});
let performanceSearch=function(){
    let searchQuary=searchElement.value;
    let searchResultsele=document.getElementById('searchResults');
    searchResultsele.innerHTML="";
    let searchResults=fruits.filter((fruit)=>fruit.toLowerCase().includes(searchQuary.toLowerCase()));
    if(searchResults.length===0){
        fruitsArr.style.display="block";
    }else{
        fruitsArr.style.display="none";
        searchResults.forEach((item)=>{
            let li=document.createElement('li');
            li.innerText=item;
            searchResultsele.appendChild(li);
        })
    }
}

let debounceFun=function(cb,delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            cb();
            console.log("Searching in debounce",searchElement.value,count++);
        },delay);
    }
}

let debounce=debounceFun(performanceSearch,300);

searchElement.addEventListener('input', debounce);
