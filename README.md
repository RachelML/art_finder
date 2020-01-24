# My art finder
![](https://media.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy-downsized.gif)

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

## Wireframes


https://res.cloudinary.com/rachelml/image/upload/v1579879972/Screen_Shot_2020-01-24_at_10.23.33_AM_kdkdfy.png
https://res.cloudinary.com/rachelml/image/upload/v1579879976/Screen_Shot_2020-01-24_at_10.27.49_AM_mxf3zk.png


#### MVP :
- Have a search bar on page
- Render images of art based on users search
- provide a clickable art image to route to a different page with more data about art.


### Post-MVP

- Allow user to select favorite pieces
- Create more complex seraches or filter options
- Create local storage
- Allow user to test their art knowlege by selecting art by certain artist etc..


## React Component Hierarchy

https://res.cloudinary.com/rachelml/image/upload/v1579887335/Screen_Shot_2020-01-24_at_12.33.44_PM_it0eru.png

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


## Priority Matrix

https://res.cloudinary.com/rachelml/image/upload/v1579881403/Screen_Shot_2020-01-24_at_10.56.21_AM_z1q43y.png

## Timeframes

| Logic | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating and Building components  | H | 6hrs| 0hrs | 0hrs |
| pseudocoding| H | 3hrs| 0hrs | 0hrs |
| pulling api data | H | 5hrs| 0hrs | 0hrs |
| Building searchbar | H | 6hrs| 0hrs | 0hrs |
| css/flexbox| H | 12hrs| 0hrs | 0hrs |
| Routing to art detail page | H | 8hrs| 0hrs | 0hrs |
| Total | H | 40hrs| 0hrs | 0hrs |

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

## Code Snippet

Use this section to include a brief code snippet you are proud of, along with a brief description of why.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made in your overall planning and the reasoning behind those changes.  
