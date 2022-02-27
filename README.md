## React

## TypeScript

## React Router Dom

## json-server

## Semantic ui

## Helmet

## Hooks

## PWA

## Jest

json-server --watch mock/mock-data.json --port 3001 --middlewares mock/mock-api.js

http://localhost:3001/games

/login

username: rebecka
password: secret

username: eric
password: dad

username: stoffe
password: rock

```js
fetch("http://localhost:3001/login", {
  method: "post",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "rebecka",
    password: "secret",
  }),
});
```

```js
{
    status: 'success',
    player: {
        name: 'Rebecka Awesome',
        avatar: 'images/avatar/rebecka.jpg',
        event: 'Last seen gambling on Starburst.'
    }
}
```

/logout

```js
fetch("http://localhost:3001/logout", {
  method: "post",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "rebecka",
  }),
});
```

/games

```js
fetch("http://localhost:3001/games", { method: "get" });
```

/categories

```js
fetch("http://localhost:3001/categories", { method: "get" });
```

comeon.game.launch('starburst');
