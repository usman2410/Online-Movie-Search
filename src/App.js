import { useState } from "react";
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";
import  styled from "styled-components";
import axios from "axios";
export const API_KEY='9d02ee7a';
const Container = styled.div`
display:flex;
flex-direction:column;
`;
const Header = styled.div`
display:flex;
flex-direction:row;
background-color: maroon;
color: white;
padding: 15px;
font-size: 20px;;
box-shadow: 0 2px 5px 0 #444;
font-family: Aerial;
justify-content: space-between;
align-itmes: center;
`;
const AppName = styled.div`
display:flex;
flex-direction:column;
align-items: center;
`;
const ImageMovie = styled.img`
width: 40px;
height: 40px;
margin:10px
align-items: left;
`;
const SearchBox = styled.div`
display:flex;
flex-direction:row;
padding: 15px 15px;
background-color: white;
border-radius: 8px;
margin-left:20px;
width:50%;
align-items:center;
`;
const SearchIcon = styled.img`
width: 30px;
height:30px;
`;
const SearchInput = styled.input`
color: black;
font-size: 15px;
border:none;
outline:none;
margin-left: 10px;
`;
const MovieListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 25px;
justify-content: space-evenly;

`;

function App() {
  const [searchMovie, updateSearchMovie]= useState();
  const [timeoutId, updateTimeoutId]= useState();
  const [movieList, updateMovieList]= useState([]);
  const [selectedMovie, onMovieSelect]= useState();

  const fetchData= async (searchMovie)=>{
   const response = await axios.get(`https://www.omdbapi.com/?s=${searchMovie}&apikey=${API_KEY}`);

   console.log(response)
   updateMovieList(response.data.Search)
  }
  
  const onTextChange=(event) =>{
    clearTimeout(timeoutId)
    updateSearchMovie(event.target.value);
    const timeout= setTimeout(() => fetchData(event.target.value), 500)
    updateTimeoutId(timeout)

  }
  return (
    <Container>
      <Header> 
        <AppName><ImageMovie src="/movie.png"/> Usman Movie App</AppName>
        <SearchBox> 
          <SearchIcon src="/search.png"></SearchIcon>
          <SearchInput placeholder="search movie name.."
          value={searchMovie}
           onChange={onTextChange}/>
        </SearchBox>
        </Header>
        {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie}/>}
        <MovieListContainer>
        {
          movieList?.length? movieList.map((movie,index)=><MovieComponent 
          key={index} 
          movie={movie}
          onMovieSelect={onMovieSelect}/>):
          "Keyword Movie not found"
        }
        
        </MovieListContainer>
    </Container>
  );
}

export default App;
