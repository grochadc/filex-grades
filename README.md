## How to Setup a project with json-server and react running concurrently (like this one)

### For Production

Create a `server.js` file in root:

```javascript
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data/grades.json");

//Let json-server know where is the Production version of the app to serve it alongside the server
const middlewares = jsonServer.defaults({ static: "./build" }); 

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 3000, () => {
  console.log("JSON Server is running");
});
```

Deploy on Heroku using this `Procfile`

```
web: node server.j
```

### For development

Use the npm package `concurrently`

``` shell
yarn add concurrently -D
```

Add this to the `scripts` section in `package.json`:
``` json
"json-server" : "json-server --watch db.json --port 5000",
"dev": "concurrently \"yarn start\" \"yarn run json-server\""
```

Start the dev server with:
```
yarn run dev
```
