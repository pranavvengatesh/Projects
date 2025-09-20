import React, { useEffect, useRef, useState } from 'react'
import './TittleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'
import { Link } from 'react-router-dom'
// TittleCards component for the Netflix clone application




const TittleCards = ({tittle,category}) => {

  const [apiData,setapiData]=useState([])
  const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTJmM2ExN2MzNThmMGQ3YWU0ZjMzYTc3YjZiZDc2ZCIsIm5iZiI6MTc1NTYyMjA5Ny4wODA5OTk5LCJzdWIiOiI2OGE0YWFkMTc0YjYzNzRkYzE4MzQ1ZGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qrilhBpIBAYWM3HTTUNCCTSZzzgVGt9BBd1g-StMi2Y'
  }
};





const handlewheel= (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY

}
useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setapiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handlewheel)

},[])
  return (
    <div className="tittle-cards" ref={cardsRef}>
      <h2>{tittle?tittle:"Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card,index)=>{
          return(
          
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.name} />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TittleCards