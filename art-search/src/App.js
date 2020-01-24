import React from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      art: [],
      inputSearch: []

    }
  }

 


  userInput = async () => {
    const res = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste Renoir`)
    return res
  }

  returnSearch = async () => {
    const res = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.state.inputSearch[0]}`)
    return res
  }

  async componentDidMount() {
    let searchResponse = await this.userInput()
    this.setState({
      inputSearch: searchResponse.data.objectIDs
    })
    let response = await this.returnSearch()
    this.setState({
      art: response.data
    })
  
  }

  render(){
  return (
    <div className="App">

      
      <Header />
      <Main artDetail={this.state.art}/>
      <Footer />
   
    </div>
  );
}
}

export default App;
