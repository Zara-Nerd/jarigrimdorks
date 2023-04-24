const jsonURL = "https://zara-nerd.github.io/jari-data/adventure.json"

window.onload = () => {
  MSPFA.slide.push(() => {

    if (document.getElementById("play")) {
      document.getElementById("play").addEventListener("click", () => {
        document.querySelector("#video111").play()
        document.querySelector("#play").remove()
      })
      console.log("vriska")
    }

  })
}

setInterval(() => {
  if (document.querySelector("#play")) {
    document.getElementById("play").onclick = () => {
      document.querySelector("#video111").play()
      document.querySelector("#play").remove()
    }
  }
  

  if (document.querySelector("#video111")) {
    let vidTime = document.querySelector("#video111").currentTime
    
    document.body.className = "mspfa p111"
    if (vidTime > 67 && vidTime < 144.5) document.body.className = "mspfa p111 sunset"
    if (vidTime > 117. && vidTime < 144.5) document.body.className = "mspfa p111 twilight"
    if (vidTime > 121.5 && vidTime < 144.5) document.body.className = "mspfa p111 nightsky"
    if (vidTime > 138 && vidTime < 144.5) document.body.className = "mspfa p111 nightsky widescreen"
    if (vidTime > 144.5 && vidTime < 241) document.body.className = "mspfa p111 dark widescreen"
    if (vidTime > 238 && vidTime < 241) document.body.className = "mspfa p111 dark"
  }
}, 100);