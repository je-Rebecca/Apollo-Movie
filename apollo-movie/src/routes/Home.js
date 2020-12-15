import React from "react";

import { gql, useQuery } from '@apollo/client';

const GET_MOVIES =gql`
{
    movies{
       id
       medium_cover_image
    }
  }
`;
// eslint-disable-next-line
export default () =>{
    // eslint-disable-next-line
    const {loading ,error, data} =useQuery(GET_MOVIES);
    if(loading){
        return "loading..."
    }
    if(data && data.movies){
        return data.movies.map(m => <h1>{m.id}</h1> )
    }
} ;

