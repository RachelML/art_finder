import React from 'react';
import { Route, Link } from 'react-router-dom'


function Detail(props) {
    return (
        <div className="flex">
            {props.artDetail.map(detail =>
             (
                 <div className="container">
                    <Link className="image" to={`/art/${detail.objectID}`} >
                        <img className="img" src={detail.primaryImage} />
                 </Link>
                     <Link detail={props.detail} exact className="overlay" activeClassName="active" to="/favorite" >
                     <h1 className="icon"> <i class="fa fa-heart"></i>
                        </h1>
                     </Link>
            </div>
            ))}

        </div >
    );
}

export default Detail;

