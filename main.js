const searchForm = document.querySelector('.search');
const newslist = document.querySelector('.news-list');
const input = document.querySelector('.input');

searchForm.addEventListener('submit', retrieve)

function retrieve(e){

    e.preventDefault()

    const myKey = '9772e16834a1435cb36284afaf8562b9';

    let topic = input.value;

    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${myKey}`

    //let url = `http://newsapi.org/v2/top-headlines?country=us&category=${topic}&apiKey=${myKey}`

    fetch(url).then((res) =>{
        return res.json()
    }).then((data)=>{
        console.log(data)
    })

    console.log(topic);
}