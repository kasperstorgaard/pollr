# pollr
a simple app where you can create a poll for anything

# Prerequisites
- install rethinkdb
- install horizon:
    `npm install -g horizon`
    

## install
```
npm install
jspm install
```

## serve
```
npm start
```
this will:
- start up the local horizon server
- serve index.html locally in a jspm context

go to localhost:9000 to see the app in action

## test
serve the app, then go to localhost:9000/test
this serves test/index.html which imports and runs
all the test files in a jspm context
