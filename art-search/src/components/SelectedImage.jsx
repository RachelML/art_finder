import React from 'react';
import { Route, NavLink } from 'react-router-dom'


function SelectedImage (props) {
    console.log(props)
    return (
      <div className="App">
        
            <h2>Detail</h2>  
             <p>name</p>
            {/* <p>{props.artDetail.objectName}</p>
             <p>artist</p>
            <p>{props.artDetail.artistDisplayName}</p>
           <p>date</p>
           <p>{props.artDetail.objectDate}</p>
             <p>category</p>
          <p>{props.artDetail.department}</p>
           <p>image</p>
            <img src={props.artDetail.primaryImage} />
      */}
      </div>
    );
  }
  
  export default SelectedImage;