# vault-api

## The backbone to data storage for the Vault Counter application designed by Grady Wasil.

## Api Calls List:
* GET
  - Requires no body to retreive all the stores counts, fetch at '/'
  - Requires a "store" variable in the body, fetch at '/:store'
* POST
  - Requires "store" and "count" variables in the body, fetch at '/'
* PATCH
  - Requires "_id" and "count" variables in the body, fetch at '/:_id'
* DELETE
  - Requires "_id" variable in the body, fetch at '/:_id'
