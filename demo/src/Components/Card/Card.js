import React from 'react';
import classes from './Card.css';

const Card = (props) => {
    let type = props.type;
    let number = props.number;
    let percent = props.percent;

    return(
        <div class="card">
            <h4>{type}</h4>
            <h4>{number}</h4>
            <h4>{percent}</h4>
        </div>
    )
}

export default Card;