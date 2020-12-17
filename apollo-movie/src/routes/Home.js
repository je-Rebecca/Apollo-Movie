import React from "react";

import { gql, useQuery } from '@apollo/client';
import Movie from "../components/Movie";
import styled from "styled-components";

const GET_MOVIES =gql`
{
    movies{
       id
       medium_cover_image
    }
  }
`;

const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%
  `;

const Headers =styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight:600p;
  margin-bottom: 20px;
`;


const Subtitle = styled.h3`
  font-size: 35px;
`
const Loading  = styled.div`
  font-size: 18px;
  opavity: 0.5;
  font-weight: 500;
  margin-top :10px;
`; 


// eslint-disable-next-line
export default () =>{
    // eslint-disable-next-line
    const {loading, data} =useQuery(GET_MOVIES);
    return(
        <Container>
            <Headers>
                <Title>Apollo</Title>
                <Subtitle>I love GraphQL</Subtitle>
            </Headers>
            {loading && <Loading >Loading... </Loading >}
            {!loading && 
            data.movies &&
            data.movies.map(m=> <Movie key={m.id} id ={m.id}/>)}
        </Container>
    );
} ;

