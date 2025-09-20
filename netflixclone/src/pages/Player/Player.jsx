import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
// Player component for the Netflix clone application
const Player = () => {
const {id} =useParams();
const navigate = useNavigate();



const [apiData,setapiData]=useState({
  name:"",
  key:"",
  published_at:"",
  type:""
})

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTJmM2ExN2MzNThmMGQ3YWU0ZjMzYTc3YjZiZDc2ZCIsIm5iZiI6MTc1NTYyMjA5Ny4wODA5OTk5LCJzdWIiOiI2OGE0YWFkMTc0YjYzNzRkYzE4MzQ1ZGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qrilhBpIBAYWM3HTTUNCCTSZzzgVGt9BBd1g-StMi2Y'
  }
};
useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setapiData(res.results[0]))
  .catch(err => console.error(err));},[])

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
      title='Trailer' frameborder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player