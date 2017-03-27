# API-basic
Demo app with basic REST API.
____

## REST API
List of user routes:

|Route | HTTP Method | Description |
|------|------|-------------|
|`/api/users` | GET | Get all the users info|
|`/api/users/:id` | GET | Get a single user info |
|`/api/users` | POST | Create a user |
|`/api/users/:id` | DELETE | Delete a user |
|`/api/users/:id` | PUT | Update a user with new info |

All HTTP Methods described above can be executed using a Chrome app named  [POSTMAN](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en).


### Usage

With only npm:

```
npm install
npm start
```

Access the API via `http://localhost:3000/api`
