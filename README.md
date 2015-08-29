# Get Page

Clean HTTP requests to scrap internet pages

# Installation
```
$ npm install get-page --save
```

# Usage
Getting the page as a String:
```
// Getting pages as string
var getPage = require('get-page').string;

getPage('https://github.com/', function(page) {
  console.log(page);
});

// <!DOCTYPE html>
// <html lang="en" class="">
// ...
```

Getting binary data as a Buffer:
```
// Getting pages as string
var getPage = require('get-page').buffer;

getPage('https://s.gravatar.com/avatar/09024b63299b12abce833b772a7a3015?s=80', function(image) {
  console.log(image);
});

// <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d ... >
```

# License

This code is released under
[CC0](http://creativecommons.org/publicdomain/zero/1.0/) (Public Domain)
