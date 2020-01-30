import React from 'react';
import { Route, Link } from 'react-router-dom'


class Favorite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: props.favoriteData
        }
        // console.log(props.favoriteData)
    //   this.setState ({
    //       detail: props.favoriteData
    //   })
      console.log(this.state.detail)

    }

    render() {
        return (
            <div className="container">
                {/* <h1>MY GALLERY</h1>
                    <img className="favorite-image" src={this.props.favoriteData.primaryImage} /> */}
                    <h1>My gallery</h1>

                {this.state.detail.map( (detail) => (
                <div>
                    <img className="favorite-image" src={detail.primaryImage} />
                  </div>

                 ) )}
                 <div>
                 <Link exact activeClassName="active" to="/">Back</Link>
                 </div>


            </div>
        )
    }
}

export default Favorite;


