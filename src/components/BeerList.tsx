import { useState } from "react";

import { Beer } from "./Beer";
import { Link } from "react-router-dom";

export function BeerList() {
    let [beers, setBeers] = useState([
        { id: 0, name: "Corona" },
        { id: 1, name: "Coreff" },
        { id: 2, name: "Mort subite" }
    ]);

    let nextBeerId = beers.length;

    let [newBeerInput, setNewBeerInput] = useState("");

    const clearNewBeerInput = () => {
        setNewBeerInput("");
    };

    const addBeer = () => {
        const newBeer = {
            id: nextBeerId++,
            name: newBeerInput
        };

        const newBeers = [...beers, newBeer];
        setBeers(newBeers);

        clearNewBeerInput();
    };

    const removeBeer = (id: number) => {
        const newBeers = beers.filter(b => b.id != id);

        setBeers(newBeers);
    };

    return (
        <div>
            <h1>Beer list</h1>

            <Link to="/about">About</Link>
            <br />

            <input value={newBeerInput} onChange={evt => setNewBeerInput(evt.target.value)}/>
            <button onClick={addBeer}>Add beer</button>

            <ul>
                {beers.map(b =>
                    <Beer key={b.id} name={b.name} onRemove={() => removeBeer(b.id)}/>
                )}
            </ul>
        </div>
    );
}