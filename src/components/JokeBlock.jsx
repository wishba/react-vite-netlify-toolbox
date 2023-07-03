import React, { useEffect, useState } from 'react'

function JokeBlock() {
  const [joke, setJoke] = useState("")

  useEffect(() => {
    fetch('/.netlify/functions/joke')
      .then(res => res.json())
      .then(jokeJSON => {
        setJoke(jokeJSON)
      })
  }, []);

  return (
    <blockquote>{joke}</blockquote>
  )
}

export default JokeBlock