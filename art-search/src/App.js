import React from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import SelectedImage from './components/SelectedImage'

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
    this.searchCall()

  }

  userInput = async (name) => {
    const inputRes = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?Begin=1800&dateEnd=2000&medium=Paintings&hasImages=true&q=${name}`)
    return inputRes
  }

  returnSearch = async (object) => {
    const res = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${object}`)
    return res
  }

  async searchCall() {
    let allResults = await Promise.all(this.state.inputSearch.slice(0, 20).map(async (element) => {
      let response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`)
      return response.data
    }))
    this.setState({
      art: allResults
    })
  }

  // async searchCall() {
  //   let results = []
  //   this.state.inputSearch.slice(0, 2).forEach(async (element) => {
  //     let response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`)
  //     this.setState(prevState => ({
  //       art: [...prevState.art, response.data]
  //     }))
  //   })
  // }



  // async secondApiCall() {
  //   let response = await this.returnSearch(this.state.inputSearch[0])
  //   this.setState({
  //     art: response.data
  //   })
  //   console.log(this.state.inputSearch)
  // }

  // async thirdApiCall() {
  //   let responseTwo = await this.returnSearch(this.state.inputSearch[1])
  //   this.setState({
  //     artTwo: responseTwo.data
  //   })
  // }



  // mappingUserInput = () => {
  //   const array = this.state.inputSearch;
  //   const listItems = array.map((list) =>
  // <div>{list}</div>)
  //   console.log(listItems)
  // }

  render() {
    return (

      <div className="App">
        <Header />
        <Main artDetail={this.state.art} searchInput={this.state.searchInput} handleClick={this.handleClick} handleChange={this.handleChange} />
        {/* <img src={this.state.artTwo.primaryImage} /> */}


        <Route exact path="/art/:id" component={(match) => <SelectedImage artDetail={this.state.art} match={match} />} />

        <Footer />

      </div>
    );
  }
}

export default App;
