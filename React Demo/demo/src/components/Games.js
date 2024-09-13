import React, { useState, useEffect } from 'react';
const baseUrl = 'https://66ced4b6901aab24841fbca2.mockapi.io/Games';

export const Games = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const getAll = async () => {
            try {
                const response = await fetch (baseUrl);
                if(!response.ok){
                    throw new Error ('Something went wrong...');
                }
                const data = await response.json();
                setGames(data);
            }catch(error){
                throw new Error ('Something went wrong...');
            }finally{
                setLoading(false);
            }
        };
        getAll();

    }, []);

    if(loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Game List</h1>
                <ul>
                    {games.map(game => (
                    <li key={game.id}>{game.name}</li>
                 ))}
                </ul>
                
        </div>
    );
    

}