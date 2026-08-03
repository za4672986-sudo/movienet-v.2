interface Props{

message:string;

}

export default function ErrorState({

message

}:Props){

return(

<div className="py-20 text-center text-red-500">

<h2>

{message}

</h2>

</div>

)

}
