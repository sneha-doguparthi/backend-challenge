    # ParseXmlToJSON

    This is a backend service to parse the Xml data to JSON format and save in the document-based datastore

    ## Project Setup
    Clone the repository
    Install the dependencies - npm install
    Build the docker image and run the container 
    Send HTTP requests for the defined Endpoints

    ## Connecting to MongoDB

    Add mongo uri in src/config/keys.js

    ## Test API's in Postman

    Get Vehicle Data - GET /vehicleData

        - When the user does a HTTP GET on /vehicleData, 
            1. the service fetches the XML data from https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=XML to get all the vehicle makes. Parse the XML to JSON data
            2. the service fetches the XML data for each make to get the vehicle types individually. Parses the XML to JSON data
            3. Combines the data in the requested format of https://gist.github.com/mbaigbimm/d340e7800d17737482e71c9ad1856f68
            4. Returns the JSON data

    Save Vehicle Data in database - POST /vehicleData - does not have any body to send from the request but save the values in database

        - When the user does a HTTP POST on /vehicleData
            1. Gets the JSON data using the above steps 
            2. Saves the JSON data into MongoDB

    ## Tech Stack
    [Node.js], [MongoDB]

    - Node : Node.js helps in adding the api's real quick and have the server up and running under a minute
    - MongoDB : MongoDB is a document-based daatabase which gives the flexibility of storing data and MongoDB is designed for horizontal scalability. It provides excellent read and write performance

    ## Tools

    Visual studio code, Postman, MongoDBAtlas

    ## Recording of the working API

    ## Challenges

    The provided API intermittently fails to deliver XML data, leading to issues in data retrieval
    It gives an Axios error but sometimes it works correctly

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

