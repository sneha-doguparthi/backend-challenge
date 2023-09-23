# ParseXmlToJSON

This is a backend service to parse the Xml data to JSON format and save in the document-based datastore

## Project Setup

Clone the repository

Build the docker image and run the container

Send HTTP requests for the defined Endpoints

## Pre- requisites

Add mongo uri in src/config/keys.js

## When the server is started

    1. the service parses the XML data from https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=XML to get all the vehicle makes. Parse the XML to JSON data
    
    2. the service parses the XML data for each make to get the vehicle types individually. Parses the XML to JSON data
    
    3. Combines the data in the requested format of https://gist.github.com/mbaigbimm/d340e7800d17737482e71c9ad1856f68
    
    4. Saves Vehicle Data in database, saves the JSON data into MongoDB

## Test GraphQL API
Get Vehicle Data - /graphQL

The service fetches the vehicle data from database.

## Tech Stack
[Node.js], [MongoDB], [GraphQL]

- Node : Node.js helps in adding the api's real quick and have the server up and running under a minute

- MongoDB : MongoDB is a document-based daatabase which gives the flexibility of storing data and MongoDB is designed for horizontal scalability. It provides excellent read and write performance

- GraphQL : GraphQL gives the flexibility in Query design, it reduces the problem of over fecthing and under fectching the data. Having single endpoint /graphql simplifies the API

## Tools

Visual studio code, Postman, MongoDBAtlas

## Recording of the working API

https://github.com/sneha-doguparthi/backend-challenge/assets/65627723/35586934-9b5d-451e-ab6a-d075adc3a366

## Challenges

The provided API intermittently fails to deliver XML data, leading to issues in data retrieval. It gives an Axios error but sometimes it works correctly.

When requests are sent back to back, provided API gives Axios errors which disables the user to test this project

## Future Enhancements

Implement Authentication and Authorization that helps in enhancing the security to the APIs

Scheduling a job to get XML information regularly

Exposing a GraphQL endpoint for GraphQL queries

Allow the user to directly send the api link from the request body to fetch the XML and that results in a JSON

Implementing pagination to enhance user experience

Validation of Data and Error handling can be added that can handle any kind of data and give respective error messages

## Reference

https://docs.docker.com/get-started/02_our_app/

## Author

Sneha Jayavardhini Doguparthi - jayavardhini.sneha@gmail.com

