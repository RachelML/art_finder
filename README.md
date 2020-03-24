# art finder

An app that will render data about a piece of art based on the users search. Using the Metropolitan museums API, user will be able to search artist or topic to display images on site. User will then be able to click on the image to get Artist and painting information. 

## API Snippet

https://metmuseum.github.io/

```
{
    "objectID": 193938,
    "isHighlight": false,
    "accessionNumber": "17.190.1285a–c",
    "isPublicDomain": true,
    "primaryImage": "https://images.metmuseum.org/CRDImages/es/original/39533.jpg",
    "primaryImageSmall": "https://images.metmuseum.org/CRDImages/es/web-large/39533.jpg",
    "additionalImages": [],
    "constituents": [
        {
            "role": "Maker",
            "name": "Pierre-Denis Chaumont"
        }
    ],
    "department": "European Sculpture and Decorative Arts",
    "objectName": "Souvenir",
    "title": "Souvenir",
    "culture": "",
    "period": "",
    "dynasty": "",
    "reign": "",
    "portfolio": "",
    "artistRole": "Maker",
    "artistPrefix": "",
    "artistDisplayName": "Pierre-Denis Chaumont",
    "artistDisplayBio": "master 1777, active 1793",
    "artistSuffix": "",
    "artistAlphaSort": "CHAUMONT PIERRE-DENIS",
    "artistNationality": "",
    "artistBeginDate": "1777",
    "artistEndDate": "1793",
    "objectDate": "1789–92",
    "objectBeginDate": 1789,
    "objectEndDate": 1792,
    "medium": "Gold",
    "dimensions": "3-3/16 x 2-3/16 in.  (8.1 x 5.6 cm)",
    "creditLine": "Gift of J. Pierpont Morgan, 1917",
    "geographyType": "",
    "city": "",
    "state": "",
    "county": "",
    "country": "",
    "region": "",
    "subregion": "",
    "locale": "",
    "locus": "",
    "excavation": "",
    "river": "",
    "classification": "Metalwork-Gold and Platinum",
    "rightsAndReproduction": "",
    "linkResource": "",
    "metadataDate": "2019-04-27T03:00:45.603Z",
    "repository": "Metropolitan Museum of Art, New York, NY",
    "objectURL": "https://www.metmuseum.org/art/collection/search/193938",
    "tags": [
        "Sunflowers"
    ]
}
```

#### MVP :
- Have a search bar on page
- Render images of art based on users search
- provide a clickable art image to route to a different page with more data about art.


### Post-MVP

- Allow user to select favorite pieces
- Create more complex seraches or filter options
- Create local storage
- Allow user to test their art knowlege by selecting art by certain artist etc..
- add changing background image on home page 
- hide search bar on non relevant components 
- change class name on click
- remove search bar when not needed 



## Components

| Component | Description |Type |
| --- | --- | --- |
| App | handles API calls and passes API data down through props. | Functional |
| Header | Fixed with name of app and navigation home link  | Functional |
| Nav link | nav link that routes to home  | Functional |
| Main | takes search input and passes input into api to retrive artist data. Passes data through props to Art data page. Routes to slug (art data) page  | Functional Hooks |
| Footer | my name / MET muesum reference  | Functional |
| Search/input/button | Input and Button components that will raise state with input value to Main component. Handle onClick and OnChange in form components| Functional hooks |
| Art data/search results  | takes props from input api call in main and passes through route as props to render Image and data on page  | Functional |


## Timeframes

| Logic | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating and Building components  | H | 6hrs| 8hrs | 8hrs |
| pseudocoding| H | 3hrs| 1hrs | 1hrs |
| pulling api data | H | 5hrs| 7hrs | 7hrs |
| Building searchbar | H | 6hrs| 3hrs | 3hrs |
| css/flexbox| H | 12hrs| 12hrs | 12hrs |
| Routing to art detail page | H | 8hrs| 5hrs | 5hrs | (working with routing in general)
| Total | H | 40hrs| 24hrs | 36hrs |

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Project Pitch / Project outline | Incomplete
|Jan 25th| Pseudocode/Build components  | Incomplete
|Jan 26th| API calls and render appropriate data  | Incomplete
|Jan 27th| Create search bar  | Incomplete
|Jan 28th| slug/ art details/ reach MVP  | Incomplete
|Jan 29th| CSS | Incomplete
|Jan 30th| Post MVP attempt  | Incomplete
|Jan 31tst| Present | Incomplete

## Additional Libraries

- axios
- React-router-dom

## Issues and Resolutions

- Using api with search and pulling appropriate data. 
- Routing to a different page for artists click 
- Pulling data from api due to API search requirements. API will only pull object data of 1 piece of art. Mapping through works of art requires number of picture x api calls which causes a slow load when trying to render 10+ images  
- appropriately routing to components and identifying what should be on page at load and how routing should occur for certain data . 
- Passing props unnecessarily and causing component re-load when not needed. Trying to change className to change color of heart when clicked but was unable to due to a component reload. 
- adding functions to the MOST logical component for efficient code. Later realizing I could have structured my code differently. lack of pseudocoding and planning in the begining.   
- I ended up tackling alot of post-mvp but they werent planned in my initial component heirarchy and planning. So when adding them on I didnt have a clear picture of how to do it. 



## Code Snippet

I was exciting to figure out and use local storage for the first time. 

```
    componentWillMount(){
    localStorage.getItem('image') && this.setState({
      favorite: JSON.parse(localStorage.getItem('image')),
    })
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('image', JSON.stringify(nextState.favorite))

 }
```

## Change Log
- Only rendering 15 image results opposed to all results due to lag time. 
- adding a favorites component to render favorite images when a heart icon is clicked. 
- adding one art image on home page load to make the home page more visually appealing 
- adding a heart hover feature to all images to let user add to favorites 