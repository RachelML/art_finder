import React from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import Favorite from './Favorite'




class SelectedImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: [],
      id: props.match.params.id,
    }
    console.log(props.match.params.id)
  }

  async componentDidMount() {

    const res = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.props.match.params.id}`)
    this.setState({
      detail: res.data
    })
  }

  render() {
    return (
      <div className="selected-container">
        <div>
          <img className="detail-image" src={this.state.detail.primaryImage} />
        </div>
        <div className="detail">
          <h1 className="name-detail">{this.state.detail.artistDisplayName} ({this.state.detail.artistBeginDate}-
                    {this.state.detail.artistEngDate}) </h1>

          <span className="italics">{this.state.detail.title},  </span>
          <span>{this.state.detail.objectDate}</span>

          <p>{this.state.detail.medium}</p>

          <p>{this.state.detail.culture}</p>

          <p>Department: {this.state.detail.department}</p>


          <Link exact activeClassName="active" to="/">Back</Link>


        </div>

      </div>
    )
  }
}

export default SelectedImage;
