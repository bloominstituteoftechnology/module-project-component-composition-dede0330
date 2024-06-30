import { useState, useEffect } from "react"
import axios from "axios"
import React from "react"
import Card from "./Card"

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const {apod, setApod} = useState();
  useEffect(() => {
    function apod(){
      console.log(setApod)
    }
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    fetchPhoto()
    setApod({
      date: "2024-06-24",
      explanation: "What if we could see back to the beginning of the universe?  We could see galaxies forming.  But what did galaxies look like back then?  These questions took a step forward recently with the release of the analysis of a James Webb Space Telescope (JWST) image that included the most distant object yet discovered.  Most galaxies formed at about 3 billion years after the Big Bang, but some formed earlier. Pictured in the inset box is JADES-GS-z14-0, a faint smudge of a galaxy that formed only 300 m...",
      hdurl: "https://apod.nasa.gov/apod/image/2406/MostDistantGalaxy_Webb_960.jpg",
      media_type: "image",
      service_version: "v1",
      title: "JADES-GS-z14-0: A New Farthest Object",
      url: "https://apod.nasa.gov/apod/image/2406/MostDistantGalaxy_Webb_960.jpg"
  });

  }, [])
  if (!apod) return 'Fetching Photo of The Day'
  return(
    <section>
      <card 
      title={apod.title}
      text={apod.explanation}
      imageURL={apod.url}
      date={apod.date}
      />
      </section>
  );
}

export default App
