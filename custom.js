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

    let posX = (-e.clientX + window.innerWidth / 2) / 11  - lenX - window.innerWidth / 11 / 2
    let posY = (-e.clientY + window.innerHeight / 2) / 11  - lenY - window.innerHeight / 11 / 2
    
    document.body.style.setProperty('--x', posX);
    document.body.style.setProperty('--y', posY);
  })
}

const setBodyClass = (intervals, currentTime, page) => {
  let className = ""
  intervals.forEach(interval => {
    if (interval[0] < currentTime) {
      className = interval[1]
    }
  })
  document.body.className = `mspfa p${page} ${className}`
}

const transitions = {
  69: [
    [0, "dark"],
    [18, ""],
  ],
  111: [
    [67, "sunset"],
    [117.5, "twilight"],
    [121.5, "nightsky"],
    [138, "nightsky widescreen"],
    [144.5, "dark widescreen"],
    [238, "dark"],
    [241, ""],
  ],
}

setInterval(() => {

  if (document.querySelector("#play")) {
    document.getElementById("play").onclick = () => {
      document.querySelector("video").play()
      document.querySelector("#play").remove()
    }
  }

  // Transitions

  for (const [page, intervals] of Object.entries(transitions)) {

    if (document.querySelector(`.p${page} video`)) {
      let vidTime = document.querySelector(`.p${page} video`).currentTime
      if (vidTime > 0) { setBodyClass(intervals, vidTime, page) }
    }

  }

}, 100);