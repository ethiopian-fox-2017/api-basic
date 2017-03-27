# api-basic
## My First API

this is my first API created using ExpressJS, that contain several functions , such as getUser, getUser by ID, update user, delete user, and create user


route |HTTP | Description
--- | --- | ---
`/api/users`| GET | Get all the users
`/api/users/:id`| GET | Get a single user
`/api/users`| POST | create a user
`/api/users/:id`| DELETE | delete a user
`/api/users/:id`| PUT | edit a user


Usage
with npm :

```
npm install
npm start
npm run dev

```

Access localy from your browser `http://localhost:3000` or API via `http://localhost:3000/api`