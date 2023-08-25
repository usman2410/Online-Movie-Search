import axios from "axios";
import { useEffect ,useState} from "react";
import { styled } from "styled-components";
import  { API_KEY } from "../App.js"

const Container=styled.div`
display: flex;
flex-direction:row;
padding: 20px 30px;
justify-content: center;
border-bottome: 2px solid black;
`;
const CoverImage= styled.img`
object-fit:cover;
height: 350px;
`;
const InfoColumn=styled.div`
display:flex;
flex-direction:column;
margin:20px;
`;
const Moviename= styled.span`
font-size: 15px;
font-weight: 650;
color: black;
margin: 15px 0;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`;
const MovieInfo=styled.span`
font-size: 15px;
font-weigth: 500;
color:red;
overflow:hidden;
margin: 4px 0;
text-overflow: elipsis
`;
const MovieInfoComponent = (props) => {
    const[movieInfo, setMovieInfo]=useState();
    const { selectedMovie }=props;
    useEffect(()=>{axios.get(`https://www.omdbapi.com/?s=${selectedMovie}&apikey=${API_KEY}`).
    then((response)=>setMovieInfo(response.data));
},[selectedMovie]);
    return(
    <Container>
       <CoverImage src={movieInfo?.Poster}/> 
       <InfoColumn>
        <Moviename>Movie: {movieInfo?.Title}</Moviename>
        <MovieInfo>IMDB Rating: {movieInfo?.imdbRating} </MovieInfo>
        <MovieInfo>IMDB Language: {movieInfo?.Language} </MovieInfo>
        <MovieInfo>IMDB Rated: {movieInfo?.Rated} </MovieInfo>
        <MovieInfo>IMDB Released: {movieInfo?.Released} </MovieInfo>
        <MovieInfo>IMDB Runtime: {movieInfo?.Runtime} </MovieInfo>
        <MovieInfo>IMDB Actors: {movieInfo?.Actors} </MovieInfo>
        </InfoColumn>
        </Container>
        )

}
export default MovieInfoComponent