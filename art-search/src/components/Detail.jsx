import React from 'react';

function Detail(props) {
    console.log(props)
    return (
      <div className="App">
        
        <h2>Detail</h2>  
        <p>name</p>
        <p>{props.artDetail.objectName}</p>
        <p>artist</p>
        <p>{props.artDetail.artistDisplayName}</p>
        <p>data</p>
        <p>{props.artDetail.objectDate}</p>
        <p>category</p>
        <p>{props.artDetail.department}</p>
        <p>image</p>
        <img src={props.artDetail.primaryImage} />
     
      </div>
    );
  }
  
  export default Detail;