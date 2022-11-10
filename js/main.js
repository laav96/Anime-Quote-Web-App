document.querySelector('button').addEventListener('click', getFetch)


function getFetch() {
    const url = `https://animechan.vercel.app/api/random`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // let random = Math.floor(Math.random() * data.length)
        document.querySelector('h2').innerText = data.quote
        document.querySelector('h3').innerText = data.character
        document.querySelector('h4').innerText = data.anime
     })
    .catch(err => {
        console.log(`error ${err}`)
    });
}