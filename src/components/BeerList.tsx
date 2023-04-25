import { useState } from "react";

import { Beer } from "./Beer";

interface Props { }

export function BeerList(props: Props) {
    let [beers, setBeers] = useState([
        "Corona",
        "Coreff",
        "Mort subite"
    ]);

    return (
        <div>
            <ul>
                {beers.map((b, index) =>
                    <Beer key={index} name={b} />
                )}
            </ul>
        </div>
    );
}