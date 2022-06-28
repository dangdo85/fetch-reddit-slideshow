let i=0

let arrayOfURLs = []

const mainFunc = (redditObject) => {
    
// console.log(redditObject)
    for (let i = 0; i < 25; i++){
        arrayOfURLs[i] = redditObject.data.children[i].data.url
    }
    // console.log(arrayOfURLs[0])
}

const innerLoop = () => {
    const gallery = document.querySelector('#gallery')
    gallery.innerHTML = `<img src="${arrayOfURLs[i]}" + width=600px + height = auto; /img>`
    // console.log(gallery)

    i++
    }

let intervalID = setInterval(innerLoop,3000)


//not working////////////////
// const getSearchText = () => {
//     let searchTxt = document.getElementById('searchText')
// }

// searchButton.addEventListener('click', getSearchText).value;
//     console.log(getSearchText())
///////////////////////


fetch(`https://www.reddit.com/search.json?q=cats+nsfw:no+type:image` )
.then(res => res.json())
.then(mainFunc)
.catch()
    
    
const startFunc = () => {
    setInterval(innerLoop,3000)
    // console.log('Im in the start function')
}

const stopFunc = () => {
    clearInterval(intervalID);
    // console.log('Im in the stop function')
}

const stopButton = document.getElementById('stopButton')
// console.log(stopButton[0])

stopButton.addEventListener('click', stopFunc)


// const startFunc = () => {
//     setInterval(innerLoop,3000)
//     // console.log('Im in the start function')
// }

document.getElementById('startButton').addEventListener('click', startFunc)
// console.log(startButton)