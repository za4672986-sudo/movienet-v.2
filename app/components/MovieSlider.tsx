"use client";

import MovieCard from "./MovieCard";

const movies=[

{

id:1,

title:"Interstellar",

poster:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",

rating:8.9

},

{

id:2,

title:"Batman",

poster:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",

rating:8.5

},

{

id:3,

title:"Avatar",

poster:"https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",

rating:8.2

},

{

id:4,

title:"Joker",

poster:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",

rating:8.4

}

]

export default function MovieSlider(){

return(

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

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
