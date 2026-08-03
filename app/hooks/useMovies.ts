"use client";

import { useEffect,useState } from "react";

import api from "@/services/api";

import { Movie } from "@/types/movie";

export default function useMovies(){

const [movies,setMovies]=useState<Movie[]>([]);

const [loading,setLoading]=useState(true);

const [error,setError]=useState("");

useEffect(()=>{

loadMovies();

},[]);

async function loadMovies(){

try{

const res=await api.get("/movies/trending");

setMovies(res.data);

}catch{

setError("Unable to load movies.");

}finally{

setLoading(false);

}

}

return{

movies,

loading,

error

};

}
