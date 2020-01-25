import React from 'react';
import { Route, Link } from 'react-router-dom'


function Detail(props) {
    console.log(props)
    return (
      <div className="App">
        <Link to={`/posts/${props.artDetail.objectID}`}>
        
        <img src={props.artDetail.primaryImage} />
     </Link>
      </div>
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