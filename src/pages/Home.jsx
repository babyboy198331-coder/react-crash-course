import React, {useEffect} from 'react'
import axios from 'axios'

function Home() {
    useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/usres")
    }, [])
    return <h1>Home</h1>;
}

export default Home;
