## Gisthrower
NodeJS CLI to easy create and manage gists

### CLI
```sh
$ gulp lint # lint the code using avaiable es6 features*
$ gulp start # start nodemon with lint
$ gulp test:mocha # start test engine using mocha
```

### CLI (The Gisthrower one)
```sh
$ npm install -g # globally installs the gisthrower (to run commands)
$ npm link # create the symlink to gisthrower command (bind to development/code local repository)
$ gisthrower
```

### Architecture
`basic structure`
```sh
-- whatever
```

`notes`
- root (src) are used only for express basic configurations (cookie-parser, bodyparser etc...)
- our private node_modules exists to avoid path hell
  - [avoiding ../../../../](https://github.com/substack/browserify-handbook#avoiding-)
  - [how node_modules works](https://github.com/substack/browserify-handbook#how-node_modules-works)
- every module in `src\node_modules` needs the prefix nsk (**gisthrower** it)
  - every private module in `src\node_modules` need an index.js
- nodemon.json has been added to avoid nodemon ignoring our private node_modules
  - see: [overriding the underlying default ignore rules](https://github.com/remy/nodemon/blob/master/faq.md#overriding-the-underlying-default-ignore-rules)
- codecov and travis integration as [this example](https://github.com/codecov/example-node)

### authauth

- github authentication using [Personal Access Token](https://developer.github.com/v3/auth/)
- http://stackoverflow.com/questions/5643321/how-to-make-remote-rest-call-inside-node-js-any-curl
- https://nodejs.org/api/http.html#http_http_request_options_callback
- https://developer.github.com/guides/basics-of-authentication/
- https://github.com/request/request
- https://developer.github.com/v3/gists/
- https://nodejs.org/docs/v0.5.2/api/http.html#http.request