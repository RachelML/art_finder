import React from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios'




  class SelectedImage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          detail: []
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
          return(
              <div>
                 <h2>Detail</h2> 
                 <p>image</p>
                  <img src={this.state.detail.primaryImage} />   
                  <p>{this.state.detail.title}</p>
                  <p></p>
                  <p>artist</p>
                  <p>{this.state.detail.artistDisplayName}</p>

                 <p>date</p>
                 <p>{this.state.detail.objectDate}</p>

                 <p>category</p>
                 <p>{this.state.detail.department}</p>

                
                <Link exact activeClassName="active" to="/art/">Back</Link>

              </div>
          )
      }
    }

    export default SelectedImage;