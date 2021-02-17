import React from 'react'

const Header = ({data})=>{
    //we have to enter to the object by using de-structuring method => (when you console log the api, you can see the object. )
    let {
        coverImage: {small}
    } = data.data[8].attributes
    return(
    <div className="header">
        <h1>Trending Animes </h1>
        <img className="header-image" src={small} alt="banner"/>
    </div>

    )
}
export default Header