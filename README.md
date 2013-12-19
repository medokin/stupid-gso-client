Welcome to StupidGSO-Client!
====================

[![Code Climate](https://codeclimate.com/github/medokin/stupid-gso-client.png)](https://codeclimate.com/github/medokin/stupid-gso-client)

Live: [gso.medok.in][2]

How to install
---------

- Make sure you have **node**, **npm** and **git** installed.
- Install necessary global npm packages

npm install -g grunt-cli bower

- Get the Code

```
git clone https://medokin@bitbucket.org/medokin/stupid-gso-client.git

cd stupid-gso-client
```

- Get project dependencies

```
npm install

bower install
```

Running test server
---------
```
grunt server
```
The server should start on http://localhost:8000

or run with productive build (takes longer!)

```
grunt server:dist
```


Building
---------
```
grunt dist
```
You can find the app in /dist

Server
---------
You can also use your own server instance. The code can be found here: [StupidGSO-Server][1]



  [1]: https://github.com/medokin/stupid-gso-server
  [2]: http://gso.medok.in
