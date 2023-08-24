import { useState } from "react";
import MovieComponent from "./components/MovieComponent";
import  styled from "styled-components";
import axios from "axios";
const API_KEY='jt4NkhIIhXpFGaBTQap9pbSaF1pa2c6GztGiFmEcC5hYNAnSmL3sPb16a12p7b12';
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
  const fetchData= async (searchString)=>{
   const respone=await fetch('https://eu-west-2.aws.data.mongodb-api.com/app/dataogjld/endpoint/data/v1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': API_KEY,
    },
    body: JSON.stringify({
      collection: 'movies',
      database: 'sample_mflix',
      dataSource: 'ServerlessInstance0',
    }),
  });
  console.log('respone')
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
        <MovieListContainer>
          <MovieComponent/>
          <MovieComponent/>
          <MovieComponent/>
          <MovieComponent/>
          <MovieComponent/>
        </MovieListContainer>
    </Container>
  );
}

export default App;
