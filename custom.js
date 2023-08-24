const jsonURL = "https://zara-nerd.github.io/jari-data/adventure.json"

window.onload = () => {
  MSPFA.slide.push(() => {

    if (document.getElementById("play")) {
      document.getElementById("play").addEventListener("click", () => {
        document.querySelector("video").play()
        document.querySelector("#play").remove()
      })
      console.log("vriska")
    }

    // Homepage

    const bgs = [
      "BackgroundZara",
      "BackgroundAS"
    ]
    
    if (document.getElementById("homewrap")) {
      let bg = bgs[Math.floor(Math.random()*bgs.length)];
      let f = `url(https://file.garden/X1htvgJ0DEp_tp-Z/jari/backgrounds/${bg}-f.png)`
      let b = `url(https://file.garden/X1htvgJ0DEp_tp-Z/jari/backgrounds/${bg}-b.png)`
      // console.log(bg)
      
      document.getElementById("homewrap").style.setProperty('--f', f)
      document.getElementById("homewrap").style.setProperty('--b', b)
      
      console.log(document.getElementById("homewrap"), urls)
    }

  })

  addEventListener("mousemove", (e) => {
    let aspectRatio = window.innerWidth / window.innerHeight
    let lenX = aspectRatio > 16 / 9 ? 0 : window.innerHeight / 9 * 16 / 2 - window.innerWidth / 2
    let lenY = aspectRatio > 16 / 9 ? window.innerWidth / 16 * 9 / 2 - window.innerHeight / 2 : 0

    // console.log(aspectRatio > 16 / 9)

    let posX = (-e.clientX + window.innerWidth / 2) / 11  - lenX - window.innerWidth / 11 / 2
    let posY = (-e.clientY + window.innerHeight / 2) / 11  - lenY - window.innerHeight / 11 / 2
    
    document.body.style.setProperty('--x', posX);
    document.body.style.setProperty('--y', posY);
  })
}

setInterval(() => {

  if (document.querySelector("#play")) {
    document.getElementById("play").onclick = () => {
      document.querySelector("video").play()
      document.querySelector("#play").remove()
    }
  }

  if (document.querySelector(".p111 video")) {
    let vidTime = document.querySelector(".p111 video").currentTime
    
    document.body.className = "mspfa p111"
    if (vidTime > 67 && vidTime < 144.5) document.body.className = "mspfa p111 sunset"
    if (vidTime > 117.5 && vidTime < 144.5) document.body.className = "mspfa p111 twilight"
    if (vidTime > 121.5 && vidTime < 144.5) document.body.className = "mspfa p111 nightsky"
    if (vidTime > 138 && vidTime < 144.5) document.body.className = "mspfa p111 nightsky widescreen"
    if (vidTime > 144.5 && vidTime < 241) document.body.className = "mspfa p111 dark widescreen"
    if (vidTime > 238 && vidTime < 241) document.body.className = "mspfa p111 dark"
  }

  if (document.querySelector(".p69 video")) {
    let vidTime = document.querySelector(".p69 video").currentTime

    
    if (vidTime < 18) document.body.className = "mspfa p69 dark"
    else document.body.className = "mspfa p69"
  }
}, 100);