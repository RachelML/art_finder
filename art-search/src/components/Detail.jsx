import React from 'react';
import { Route, Link } from 'react-router-dom'
import Favorite from './Favorite'


function Detail(props) {

    let favoriteClick = (id, e) => {
        e.stopPropagation()
        props.onFaveToggle()
        console.log("adding or removing from favorites")
        console.log(id)

    }

    return (
        <div className="flex">
            {props.artDetail.map(detail =>
                (
                    <div className="container">
                        <Link className="image" to={`/art/${detail.objectID}`} >
                            <img className="img" src={detail.primaryImage} />
                        </Link>
                        <div exact className="overlay" activeClassName="active" to="/favorite" >
                            <h1 to={`/favorite`} onClick= {(e)=>favoriteClick(detail.objectID, e)} className="icon"> <i class="fa fa-heart"></i>
                            </h1>
                        </div>
                    </div>
                ))}

        </div >
    );
}

export default Detail;


//create onClick on h1 to pass image to favorites component
// CSS onClick make heart stay red 
//detail={props.detail}