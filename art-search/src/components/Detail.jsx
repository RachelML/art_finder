import React from 'react';
import { Route, Link } from 'react-router-dom'
import SelectedImage from './SelectedImage'
import { render } from '@testing-library/react';


function Detail(props) {
    console.log(props)
    return (
        <div className="App">
            {props.artDetail.map(detail =>
             (
                <div>
            <Link to={`/art/${detail.objectID}`} >
                <img src={detail.primaryImage} />
                {/* <SelectedImage detail={detail} />  */}
            </Link>
             {/* <Route exact path="/art/:id" component={detail => <SelectedImage detail={detail} />} /> */}

            {/* <SelectedImage detail={detail} /> */}
                </div>
            ))}


            


        </div >
    );
}

export default Detail;

