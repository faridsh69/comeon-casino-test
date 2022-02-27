React
TypeScript
React Router Dom
json-server
Semantic ui
Helmet
Hooks
PWA
Jest

json-server --watch mock/mock-data.json --port 3001 --middlewares mock/mock-api.js

http://localhost:3001/games

/login

username: rebecka
password: secret

username: eric
password: dad

username: stoffe
password: rock

fetch('http://localhost:3001/login', {
method: 'post',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json'
},
body: JSON.stringify({
username: 'rebecka',
password: 'secret'
})
}
);

{
status: 'success',
player: {
name: 'Rebecka Awesome',
avatar: 'images/avatar/rebecka.jpg',
event: 'Last seen gambling on Starburst.'  
 }
}

/logout

fetch('http://localhost:3001/logout', {
method: 'post',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json'
},
body: JSON.stringify({
username: 'rebecka'
})
}
);

/games

fetch('http://localhost:3001/games', { method: 'get' });

/categories

fetch('http://localhost:3001/categories', { method: 'get' });

comeon.game.launch('starburst');
