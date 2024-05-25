import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"

const apikey = "3ded449df148731a3c9b175add4ec0f7"
const url = "https://api.themoviedb.org/3"
const imgUrl = "https://image.tmdb.org/t/p/original"
const upcoming = "upcoming"
const nowPlaying = "now_playing"
const popular = "popular"
const topRated = "top_rated"

const Card = ({img}) =>(
    <img className='card' src={img} alt="cover" />
)

const Row = ({title,arr=[

] }) => (

  <div className='row'>
      <h2>{title}</h2>
      <div>
          {
            arr.map((item,index) => (
              <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
            ))
          }
      </div>
    
  </div>
)

const Home = () => {
  const [upcomingMovies,setUpcomingMovies] = useState([])
  const [nowplayingMovies,setNowplayingMovies] = useState([])
  const [popularMovies,setPopularMovies] = useState([])
  const [topRatedMovies,setTopRatedMovies] = useState([])

  useEffect(() => {

    const fetchUpcoming = async()=>{
     const {data:{results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`)
     setUpcomingMovies(results)
    }
    const fetchNowplaying = async()=>{
      const {data:{results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`)
      setNowplayingMovies(results)
     }
     const fetchPopular = async()=>{
      const {data:{results}} = await axios.get(`${url}/movie/${popular}?api_key=${apikey}&page=7`)
      setPopularMovies(results)
     }
     const fetchTopRated = async()=>{
      const {data:{results}} = await axios.get(`${url}/movie/${topRated}?api_key=${apikey}&page=9`)
      setTopRatedMovies(results)
     }
      fetchUpcoming()
      fetchNowplaying()
      fetchPopular()
      fetchTopRated()
  },[])

  return (
    <section className='home'>
        <div className='banner'
           style={{
              backgroundImage:popularMovies[0]? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`:"rgb(0, 0, 0)"
           }}>
            
    { popularMovies[0] && <h1>{popularMovies[0].original_title}</h1> }
     {popularMovies[0] && <p>{popularMovies[0].overview}</p> }   

     <div>
     <button>Play <BiPlay/></button>
     <button>My List <AiOutlinePlus/></button>
     </div>

        </div>

        <Row title={"Upcoming Movies"} arr={upcomingMovies}/>  
        <Row title={"Now Playing"} arr={nowplayingMovies}/>  
        <Row title={"Popular Movies"} arr={popularMovies}/>  
        <Row title={"Top Rated Movies"} arr={topRatedMovies}/>  

    </section>
  )
}

export default Home

// https://api.themoviedb.org/3/movie/popular?api_key=%3C%3Capi_key%3E%3E&language=en.US&page=1

// https://api.themoviedb.org/3/movie/popular?api_key=3ded449df148731a3c9b175add4ec0f7&language=en.US&page=1
