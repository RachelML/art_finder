import React from 'react';
import { Route, Link } from 'react-router-dom'


function Detail(props) {
    console.log(props)
    return (
        <div className="App">
            {props.artDetail.map(detail =>
             (
            <Link to={`/art/${detail.objectID}`} >
                <img className="img" src={detail.primaryImage} />
            </Link>
           
            ))}

        </div >
    );
}

export default Detail;

