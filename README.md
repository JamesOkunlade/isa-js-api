INTERNATIONAL SHOWTIMES API

### Requirements
- Node.js
- mongodb

### Installation

```javascript
$ git clone https://github.com/JamesOkunlade/isa-js-api.git
$ cd isa-js-api
$ npm i
```

TESTING

```javascript
node src
```

```javascript
curl http://localhost:3001
```

```javascript
curl -X POST -H 'Content-Type: application/json' -d '{
  "title": "The vampire diaries",
  "description": "On her first day at high school, Elena meets Stefan and immediately feels a connection with him. However, what she does not know is that Stefan and his brother, Damon, are in fact vampires."
}' http://localhost:3001/