# vault-api

## The backbone to data storage for the Vault Counter application designed by Grady Wasil.

## Api Calls List:
* GET
  - To retreive all the stores counts requires no body, fetch at '/'
  - To retreive a specific store's counts only requires a "store" variable in the body, fetch at '/:store'
* POST
  - Requires "store" and "count" variables in the body, fetch at '/'
* PATCH
  - Requires "_id" and "count" variables in the body, fetch at '/:id'
* DELETE
  - Requires "_id" variable in the body, fetch at '/:id'

## Technologies Used
* Node.js
* nodemon
* mongodb / mongoose
* Express.js
* ESLint