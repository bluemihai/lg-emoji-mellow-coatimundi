Publishing an npm package with ES6
==================================

Goal: basically Challenge #7, emoji cipher (publish npm package)

* Install node and babel
```
  brew install node
  npm install --save-dev babel-cli
  npm install --save-dev babel-preset-es2015
```

* Create a .babelrc file with  [Is this really necessary?]
```
  {
    presets: ["es2015"]
  }
```

* Create a /src directory for your source code and /dist for the traspiled output.

* Add to your project's package.json
```
  "scripts": {
    "build": "./node_modules/.bin/babel src -d dist -s",
    "prepublish": "npm run build",
    "buildwatch": "./node_modules/.bin/babel -w src -d dist -s"
  },
  "files": ["dist"],
  "devDependencies": {
    "babel-cli": "^6.10.1",
    "babel-preset-es2015": "^6.9.0"    
  }
```

* Create an account at npmjs.org and run npm login

* Run npm publish, making sure the package name is unique