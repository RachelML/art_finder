import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import SelectedImage from './components/SelectedImage'
import Search from './components/Search'
import Detail from './components/Detail'
import Favorite from './components/Favorite'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      art: [],
      inputSearch: [],
      searchInput: '',
      searchArtist: null,
      loading: false,
      favorite: [],
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
      inputSearch: searchResponse.data.objectIDs,
    })
    this.searchCall();
  }

  handleFaveToggle = async (props)=> {
    console.log(props)
    console.log(this.state.favorite)
    let tempArray= this.state.favorite
    tempArray.push(props)
     this.setState( {
      favorite: tempArray
    })
  
  }

//     componentWillMount(){
//     localStorage.getItem('image') && this.setState({
//       favorite: JSON.parse(localStorage.getItem('image')),
//       isLoading: false
//     })
//   }

//   componentWillUpdate(nextProps, nextState) {
//     // this.state.favorite.push(nextProps.favorite)
//     localStorage.setItem('image', JSON.stringify(nextState.favorite))

//  }


  userInput = async (name) => {

    const inputRes = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?Begin=1800&dateEnd=2000&medium=Paintings&hasImages=true&q=${name}`)
    return inputRes
  }

  returnSearch = async (object) => {
    const res = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${object}`)
    return res
  }
 


  async searchCall() {
    if (this.state.inputSearch === null) {
      return (
        alert("this returns no results")
      )
    }
    this.setState({
      loading: true
    })

    let allResults = await Promise.all(this.state.inputSearch.slice(0, 10).map(async (element) => {
      let response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`)
      return response.data
    }))
    this.setState({
      loading: false,
      art: allResults
    })
  }

 


  render() {
    return (


      <div className="App">



        <Header />

        <Search
          searchInput={this.state.searchInput}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        /> 


        {this.state.loading ? <div class="loader"></div> :
          <Route exact path="/" component={Navigationprops => <Detail
            {...Navigationprops}
            artDetail={this.state.art}
            // returnSearch={this.returnSearch}
            onFaveToggle={this.handleFaveToggle}
          />} />} 

        <Route exact path="/art/:id" component={SelectedImage} />
        <Route exact path="/favorite" component={Navigationprops => <Favorite
            {...Navigationprops}
            favoriteData={this.state.favorite}
          />}/>

        <Footer />

      </div>
    );
  }
}

export default App;
