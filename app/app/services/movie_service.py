from app.schemas.movie import Movie


async def get_trending_movies():

    return [

        Movie(
            id=1,
            title="Interstellar",
            poster="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
            overview="A team travels through a wormhole.",
            rating=8.7,
            year="2014",
        ),

        Movie(
            id=2,
            title="The Batman",
            poster="https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
            overview="Batman investigates corruption.",
            rating=8.3,
            year="2022",
        ),

    ]
