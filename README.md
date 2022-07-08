# flo

- The city lovers travel-planner. This app allows the user to plan their trips in an organized manner.
- This app was refactored into TypeScript by the contributors listed below. 
- Unit and End to End testing was also implemented by the contributors using Jest and Cypress.

## Setup

- Install all node packages using the command "npm i" in the root directory, flo-client, and flo-server folders.
- This app utlizes MongoDB as the database language. Download the MongoDb Compass prior to starting the server.
- Enter "nodemon index.js" within the "Flo-server" folder to start the server.
- Import the mock data located in the "data" folder. The journey details should be imported as a JSON file into the MongoDB database.
- To use the Google Maps API, you need to register an account with the Google API service, and create a ".env" file within the "flo-client/src" folder.
- Create a variable within the ".env" file titled "REACT_APP_GMAPS_API_KEY" and set it equal to your key.

## Execution

- Start the client by entering "npm start" within the "flo-client/src folder.
- The user can navigate between their trip locations on the home page.
- The user can edit the details of each trip by clicking on the location.

## Tech Stack

- React, TypeScript, MongoDB, Express, Google Maps API, Node.js

## Contributors

- Carlos Pinilla (github.com/capi1206)
- Rodrigo Reategui Gerstein (github.com/PeicoPaco)

