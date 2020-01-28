import React from 'react';
import axios from 'axios'

class Favorite extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          detail: []
      }
    console.log(props)
    //   console.log(props.match.params.id)
    }

    async componentDidMount() {
    
      const res = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.props.match.params.id}`)
      console.log(res)
      this.setState({
        detail: res.data
      })
    }

      render() {
          return(
              <div className="container">
                  <div>
                    <img className ="detail-image" src={this.state.detail.primaryImage} /> 
                  </div> 
                
                 

              </div>
          )
      }
    }

    export default Favorite;