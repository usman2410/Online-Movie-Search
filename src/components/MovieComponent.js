
import { Styled, styled } from "styled-components"

const MovieContainer= styled.div`
display:flex;
flex-direction:column;
padding: 10px;
width: 300px;
box-shadow: 0 3px 10px 0 #aaa;
cursor: pointer;
`;
const CoverImage= styled.img`
object-fit:cover;
height: 350px;
`;
const MovieName= styled.span`
font-size: 15px;
font-weight: 650;
color: black;
margin: 15px 0;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`;
const InfoColumn=styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
`;
const MovieInfo= styled.div`
font-size: 15px;
font-weight: 500;
color: black;
text-transforn: captalize;
`;

const MovieComponent = (props) => {
    return(<MovieContainer>
        <CoverImage src="https://www.imdb.com/whats-on-tv/early-roles/rg3352337152/mediaviewer/rm206330625?ref_=ext_shr_lnk" /> 
        <MovieName>usman here you go again </MovieName>
        <InfoColumn>
            <MovieInfo>Year: 2012</MovieInfo>
            <MovieInfo>Type: Movie</MovieInfo>
        </InfoColumn>
        </MovieContainer>
        )

}
export default MovieComponent