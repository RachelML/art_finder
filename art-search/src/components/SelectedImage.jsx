import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import axios from 'axios'


// function SelectedImage (props) {
//     console.log(props)
   
//     return (
//       <div className="App">
          
//             <h2>Detail</h2>  
//              <p>name</p>
//             <p>{props.detail.title}</p>
//              <p>artist</p>
//             <p>{props.detail.artistDisplayName}</p>
//            <p>date</p>
//            <p>{props.detail.objectDate}</p>
//              <p>category</p>
//           <p>{props.detail.department}</p>
//            <p>image</p>
//         <img src={props.detail.primaryImage} />
     
//       </div>
//     );
//   }
  
//   export default SelectedImage;

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
                  <p>{this.state.detail.title}</p>
                  <p></p>
                 <p>artist</p>
                <p>{this.state.detail.artistDisplayName}</p>

                 <p>date</p>
                 <p>{this.state.detail.objectDate}</p>

                 <p>category</p>
                 <p>{this.state.detail.department}</p>

                <p>image</p>
                <img src={this.state.detail.primaryImage} />


              </div>
          )
      }
    }

    export default SelectedImage;
