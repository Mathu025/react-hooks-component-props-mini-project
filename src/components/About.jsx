import React from 'react'

const About = ( {image="https://via.placeholder.com/215", about}) => {
  return (
   <aside>
    <img src={image} alt="blog image" />
    <p>{about}</p>
   </aside>
  )
}

export default About