import { useState } from "react";

import { Beer } from "./Beer";

interface Props { }

export function BeerList(props: Props) {
    let [beers, setBeers] = useState([
        "Corona",
        "Coreff",
        "Mort subite"
    ]);

    let [newBeerInput, setNewBeerInput] = useState("");

    const addBeer = () => {
        const name = newBeerInput;
        const newBeers = [...beers, name];
        setBeers(newBeers);
    };

    const removeBeer = (i: number) => {
        let newBeers = [...beers];
        newBeers.splice(i);

        setBeers(newBeers);
    };

    return (
        <div>
            <input value={newBeerInput} onChange={evt => setNewBeerInput(evt.target.value)}/>
            <button onClick={addBeer}>Add beer</button>

            <ul>
                {beers.map((b, index) =>
                    <Beer key={index} name={b} onRemove={() => removeBeer(index)}/>
                )}
            </ul>
        </div>
    );
}