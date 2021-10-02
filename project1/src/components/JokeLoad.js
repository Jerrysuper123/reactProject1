import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './CSS/JokeLoad.css';

const API_JOKE = "https://v2.jokeapi.dev/joke/Any?amount=5"

const JokeLoad = () => {

    const fetchJokes = useCallback(async () => {
        setIsloading(true);
        try {
            const result = await axios.get(API_JOKE);
            const array = result.data.jokes;
            // console.log(array)
            updateDataset(array)
            // console.log(dataset)

        } catch{
            console.log("error")
        }
        setIsloading(false);
        
    })


    useEffect(() => {
        fetchJokes()
    }, [])

    const [dataset, updateDataset] = useState([]);
    const [isloading, setIsloading] = useState(false);

    return (
        <div className="content">
            <p className="reminder">Quote of the day to remind ourselves:</p>
            <blockquote className="otro-blockquote">
                A person without sense of humour is like a wagon
                without springs - jolted by every pebble in the road.
                <span>Henry Ward Beecher</span>
            </blockquote>
            
            {isloading? (<div className="loader"></div>):(
                dataset.map(function (joke) {
                return (
                    <div key={joke.id} className="card">
                        <div className="cardContent">
                        <h2 className="category">Category: {joke.category} || type: {joke.type}</h2>
                        <p className="joke">{joke.setup}</p>
                        <p className="joke">{joke.delivery}</p>
                        <p className="joke">{joke.joke}</p>
                        </div>
                        
                    </div>
                );
            })

            )}
           

            <button className="button-49" onClick={fetchJokes}>Click for more</button>
        </div>
    )
};

export default JokeLoad;