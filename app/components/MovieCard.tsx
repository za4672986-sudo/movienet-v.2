"use client";

import Image from "next/image";
import { Star, Play } from "lucide-react";
import { motion } from "framer-motion";

interface Movie {

  id:number;

  title:string;

  poster:string;

  rating:number;

}

export default function MovieCard({

  movie

}:{

  movie:Movie

}){

return(

<motion.div

whileHover={{

scale:1.05,

y:-8

}}

transition={{

duration:.3

}}

className="rounded-xl overflow-hidden bg-zinc-900 cursor-pointer shadow-xl"

>

<div className="relative">

<Image

src={movie.poster}

alt={movie.title}

width={300}

height={450}

className="w-full h-[350px] object-cover"

/>

<div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex justify-center items-center">

<button className="bg-red-600 p-4 rounded-full">

<Play/>

</button>

</div>

</div>

<div className="p-4">

<h3 className="font-bold text-lg">

{movie.title}

</h3>

<div className="flex items-center gap-2 mt-2">

<Star

size={18}

fill="gold"

color="gold"

/>

<span>

{movie.rating}

</span>

</div>

</div>

</motion.div>

)

}
