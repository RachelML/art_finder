import React from 'react';
import { Route, Link } from 'react-router-dom'


class Favorite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: []
        }
        console.log(props.favoriteData)
      
    }


    render() {
        return (
            <div className="container">
                <h1>My gallery</h1>
                    <img className="favorite-image" src={this.props.favoriteData.primaryImage} />

                {/* {this.props.favoriteData.map( (detail) => (
                <div>
                    <h1>My gallery</h1>
                    <img className="favorite-image" src={detail.primaryImage} />
                  </div>

                 ) )} */}
                 <Link exact activeClassName="active" to="/">Back</Link>


            </div>
        )
    }
}

export default Favorite;


