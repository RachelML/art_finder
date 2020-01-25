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
      inputSearch: [],
      searchInput: '',
      searchArtist: null

    }
  }


  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      searchInput: value
    })
    console.log(value)
  }

  handleClick = async (e) => {
    e.preventDefault();
    let searchResponse = await this.userInput(this.state.searchInput);
    this.setState({
      inputSearch: searchResponse.data.objectIDs
    })
    this.secondApiCall()
  }
 
  userInput = async (name) => {
    const inputRes = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${name}`)
    return inputRes
  }

  returnSearch = async (object) => {
    const res = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${object}`)
    return res
  }

  async secondApiCall() {
    let response = await this.returnSearch(this.state.inputSearch[0])
    this.setState({
      art: response.data
    })
  }

 

  render(){
  return (
    <div className="App">

      
      <Header />
      <Main artDetail={this.state.art} searchInput={this.state.searchInput} handleClick={this.handleClick} handleChange={this.handleChange}/>
      <Footer />
   
    </div>
  );
}
}

export default App;
