#PokitDok Test app

Heroku app that lists and provides client-side search for PokitDok trading partners info.

Requirements

* node v0.12.x
* PokitDok API access

Install dependencies
```
npm install
```

Define environment variables for PokitDok API access:
```
POKIT_SECRET=secret-secret
POKIT_CLIENT_ID=ivegotasecret
```

Run the server
```
npm start
OR
node server.js
OR
foreman start local
```