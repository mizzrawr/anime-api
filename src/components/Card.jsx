import React from 'react'

const Card = ({data}) => {
    return (
        <div className="card-container">
            {data.data.map(anime =>{

                let {
                    canonicalTitle,
                    averageRating,
                    synopsis,
                    posterImage: {medium}
                } = anime.attributes

                return(
                    <div key={anime.id}>

                        <img className="card-poster" src={medium} alt="poster"/>

                        <h2 className="card-title">{canonicalTitle}</h2>
                        <p className="card-description">Synopsis: {synopsis.substring(0,150)}...</p>
                        <p className="card-rating">Average Rating: {averageRating}</p>
                    </div>
                )
            })}
        </div>
      
    )
}

export default Card