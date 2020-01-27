import React from 'react';
import { Route, Link } from 'react-router-dom'
import SelectedImage from './SelectedImage'


function Detail(props) {
    console.log(props)
    return (
        <div className="App">
            {props.artDetail.map(detail => (
                <Link to={`/art/${detail.objectID}`}>
                <img src={detail.primaryImage} />
            </Link>
            ))}



        </div >
    );
}

export default Detail;

//   <h2>Detail</h2>  
//   <p>name</p>
//   <p>{props.artDetail.objectName}</p>
//   <p>artist</p>
//   <p>{props.artDetail.artistDisplayName}</p>
//   <p>date</p>
//   <p>{props.artDetail.objectDate}</p>
//   <p>category</p>
//   <p>{props.artDetail.department}</p>
//   <p>image</p>