"use client";

import MovieCard from "./MovieCard";

import Loading from "./Loading";

import ErrorState from "./ErrorState";

import useMovies from "@/hooks/useMovies";

export default function MovieGrid(){

const{

movies,

loading,

error

}=useMovies();

if(loading){

return <Loading/>;

}

if(error){

return <ErrorState message={error}/>;

}

return(

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

{

movies.map(movie=>(

<MovieCard

key={movie.id}

movie={movie}

/>

))

}

</div>

)

}
