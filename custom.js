const jsonURL = "https://zara-nerd.github.io/jari-data/adventure.json"

// window.onload = () => {
//   MSPFA.slide.push(() => {
//     console.log("vriska")
//   })
// }

setInterval(() => {
  if (document.querySelector("#video111")) {
    if (document.querySelector("#video111").currentTime > 144.5 && document.querySelector("#video111").currentTime < 241) document.body.className = "mspfa p111 dark"
    else document.body.className = "mspfa p111"
    console.log(document.querySelector("#video111").currentTime > 144.5)
  }
}, 100);