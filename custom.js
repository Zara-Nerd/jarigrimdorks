const jsonURL = "https://zara-nerd.github.io/jari-data/adventure.json"

// window.onload = () => {
//   MSPFA.slide.push(() => {
//     console.log("vriska")
//   })
// }

setInterval(() => {
  if (document.querySelector("#video111")) {
    let vidTime = document.querySelector("#video111").currentTime
    
    document.body.className = "mspfa p111"
    if (vidTime > 67 && vidTime < 144.5) document.body.className = "mspfa p111 sunset"
    if (vidTime > 117. && vidTime < 144.5) document.body.className = "mspfa p111 twilight"
    if (vidTime > 121.5 && vidTime < 144.5) document.body.className = "mspfa p111 nightsky"
    if (vidTime > 138 && vidTime < 144.5) document.body.className = "mspfa p111 nightsky widescreen"
    if (vidTime > 144.5 && vidTime < 241) document.body.className = "mspfa p111 dark widescreen"
    if (vidTime > 238 && vidTime < 241) document.body.className = "mspfa p111 dark"
    console.log(document.querySelector("#video111").currentTime > 144.5)
  }
}, 100);