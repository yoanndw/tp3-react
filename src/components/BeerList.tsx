import { useState } from "react";

import { Beer } from "./Beer";

interface Props { }

export function BeerList(props: Props) {
    let [beers, setBeers] = useState([
        { id: 0, name: "Corona" },
        { id: 1, name: "Coreff" },
        { id: 2, name: "Mort subite" }
    ]);

    let nextBeerId = beers.length;

    let [newBeerInput, setNewBeerInput] = useState("");

    const addBeer = () => {
        const newBeer = {
            id: nextBeerId++,
            name: newBeerInput
        };

        const newBeers = [...beers, newBeer];
        setBeers(newBeers);
    };

    const removeBeer = (id: number) => {
        const newBeers = beers.filter(b => b.id != id);

        setBeers(newBeers);
    };

    return (
        <div>
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