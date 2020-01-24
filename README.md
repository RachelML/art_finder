# Project Overview


## My art finder 

**Project decription:** An app that will render data about a piece of art based on the users search. Using the Metropolitan museums API, user will be able to search artist or topic to display images on site. User will then be able to click on the image to get Artist and painting information. 

## API Snippet

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

Display all wireframes here with any neccessary descriptions.

### MVP

Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE:
- Have a search bar on page
- Render images of art based on users search
- provide a clickable art image to route to a different page with more data about art.


### Post-MVP

-Allow user to select favorite pieces
-Create more complex seraches or filter options
-Create local storage


## React Component Hierarchy

Include an image of your component hierarchy that shows the data flow and architectural design of your app.

## Components

| Component | Description |Type |
| --- | --- | --- |
| App | The Header receives props that render multiple nav titles and links | Functional |
| Header | The Header receives props that render multiple nav titles and links | Functional |
| Main | This component houses multiple rendered views through React Router and controls data received from the initial API call in state | Class |
| Footer | The Header receives props that render multiple nav titles and links | Functional |
| Search/input/button | The Header receives props that render multiple nav titles and links | Functional |
| Art data | The Header receives props that render multiple nav titles and links | Functional |
| search results  | The Header receives props that render multiple nav titles and links | Functional |


## Priority Matrix

Include an image of your Priority Matrix (X is time and Y is priority)

## Timeframes

Timeframes are key in the development cycle. You have limited time to code and so much to accomplish!  Look at all of your planned files and components, and all of the areas of development you are planning and give an estimate of how long each one will take to complete. It's always best to pad the time to account for the unknown, so be sure to add an additional hour or two to play it safe. As you progress, you can update the "Time Invested" column to keep track of your hours, but that number should turn into "Actual Time" by the presentation day. Also, put a winter-themed gif at the top of your readme before you pitch to show you read the instructions thoroughly.


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

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

axios
React-router-dom

## Issues and Resolutions

Using api with search and pulling appropriate data. 
Routing to a different page for artists click 

## Code Snippet

Use this section to include a brief code snippet you are proud of, along with a brief description of why.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made in your overall planning and the reasoning behind those changes.  
