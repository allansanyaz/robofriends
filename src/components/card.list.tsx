import React from "react";
import Card from "./card";
import { IRobotState } from "../store/request-robots";

const CardList = ({ robots }: IRobotState) => {
    
    return (
        // Everything seems to need a div Tag unless it is a Fragment
        <div>
            {
                // ensure that this expression always returns something
                robots.map((_, i: number) => {
                    return (
                        // The Card.js item constructs our card and here wejust loop to call it to make things as modular as possible
                        // JSX used to return HTML elements
                        // The key is neccessary to compute incase items get deleted
                        <Card 
                            key={i} 
                            id={robots[i].id}
                            name={robots[i].name} 
                            email={robots[i].email} 
                        />
                        // <Card id={user.id} name={user.name} email={user.email} />
                    );
                // Note that this robots.map expression is a variable thus do not insert semi-colon at the end
                })
            }
        </div>
    );
}

export default CardList;