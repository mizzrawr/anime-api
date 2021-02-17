import React from 'react';
import useSWR from 'swr'
import Header from './Header';
import Form from './Form'
import Footer from './Footer';
import '../css/App.css';
import fetcher from './Fetcher'
import Card from './Card'


const API_URL = 'https://kitsu.io/api/edge/trending/anime'
//General animes =>
//https://kitsu.io/api/edge/anime



console.log(process.env)

const App = ()=>{


const {data,error}= useSWR(API_URL,fetcher)

if(error) return <div> failed to load</div>
if(!data) return <div> loading...</div>

console.log(data)

    return(

    <div className="App">
    <Header data={data}/>
        <Form/>
    <Card data={data} error={error}/>
        <Footer/>
    </div>

    )

}
export default App
