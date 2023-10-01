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
  "test": [
    [0, "zsunset"],
    [7, "none wide750 width13"],
    [19.6, "none wide700 width05"],
    [19.9, "none wide950 width5"],
    [22, "none vidonly tzmusic wide950 width5"],
    [24.3, "none vidonly tzmusic wide850"],
    [40, "none vidonly tzmusic tzjohntalk wide850"],
    [55.3, "none vidonly tzskaia wide850"],
    [58, "none vidonly tzskaia tzskLeft wide850"],
    [82.5, "none vidonly tzskaia tzskLeft tzHouse1 wide850"],
    [87.5, "none vidonly tzskaia tzskLeft tzHouse2 wide850"],
    [91.2, "none vidonly tzskaia tzskLeft tzHouse3 wide850"],
    [93.2, "none vidonly tzskaia tzskLeft tzHouse4 wide850"],
    [100, "none vidonly tzskaia tzskLeft tzLeftFade tzHouse4 wide850"],
    [117, "none vidonly tzskaia tzskLeft tzLeftFade tzHouse4 wide700"],
    [133, "none vidonly tzskaia tzskLeft tzLeftFade tzHouse5 wide700"],
    [140, "none vidonly tzmusic tzHouse5 wide700"],
    [153, "none vidonly tzmusic tzHouse5 wide950"],
    [162.4, "none vidonly tzmusic tzHouse5 wide950 tzvideoTilt"],
    [162.4, "none vidonly tzmusic tzHouse6 wide700 tzvideoTilt"],
    [169.9, "none vidonly wide950 notrans"],
    [185, "dark slowtrans"],
  ]
}

setInterval(() => {

  if (document.querySelector("#play")) {
    document.getElementById("play").onclick = () => {
      document.querySelector("video").play()
      document.querySelector("#play").remove()
      if (document.querySelector("warning")) {
        document.querySelector("warning").remove()
      }
    }
  }

  // Transitions

  for (const [page, intervals] of Object.entries(transitions)) {

    if (document.querySelector(`.p${page} video`)) {
      let vidTime = document.querySelector(`.p${page} video`).currentTime
      if (vidTime > 0) { setBodyClass(intervals, vidTime, page) }

      // Testing
      // document.querySelector(`.p${page} video`).controls = true
    }

  }

}, 100);