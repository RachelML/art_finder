import React from 'react';
import { Route, Link } from 'react-router-dom'


class Favorite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: props.favoriteData
        }
    }

    render() {
        return (
            <div className="containers">
                    <h1 className="gallery">MY GALLERY</h1>

                {this.state.detail.map( (detail) => (
                 <div>
                    <img className="favorite-image" src={detail.primaryImage} />
                  </div>
                 ))}
                 <div>
                 <Link exact activeClassName="active" to="/">Back</Link>
                 </div>
            </div>
        )
    }
}

export default Favorite;


