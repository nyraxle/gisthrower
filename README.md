[![Build Status](https://travis-ci.org/eduardoarnold/gisthrower.svg?branch=master)](https://travis-ci.org/eduardoarnold/gisthrower) [![codecov](https://codecov.io/gh/eduardoarnold/gisthrower/branch/master/graph/badge.svg)](https://codecov.io/gh/eduardoarnold/gisthrower) [![Dependency Status](https://david-dm.org/eduardoarnold/gisthrower.svg)](https://david-dm.org/eduardoarnold/gisthrower) [![Node Version](https://img.shields.io/badge/node-5.9.x-blue.svg)]()


## Gisthrower
NodeJS CLI to easy create and manage gists

 :shipit: Feel free to contribute :shipit:

### CLI
```sh
$ gulp lint # lint the code using avaiable es6 features*
```

### CLI (The DEV one)
```sh
$ npm install -g # globally installs the gisthrower (to run commands)
$ npm link # create the symlink to gisthrower command (bind to development/code local repository)
```

### CLI (The Gisthrower one)
```sh
$ gisthrower # equivalent to --help
$ gisthrower --auth|-a <username>:<token> # Save your git personal token
$ gisthrower --help # Help
$ gisthrower list --all|-a # list all gists from your user
$ gisthrower list --starred|-s # List all starred gists from your user
$ gisthrower list --from-user <targetuser> # List all from targetuser
$ gisthrower list --range <from>:<to> # List all gists based on previous listed numbers
```

# Roadmap
- [ ] Get details from a single gist
- [ ] Point files to include on gist (fs IO)
- [ ] Create Gists
- [ ] Edit Gists
- [ ] Delete Gists
- [ ] Star Gists
- [ ] Unstar Gists
- [X] Show dependencies
- [x] 100% coverage
- [x] Apply on Travis.ci

`notes`
- [Github api v3](https://developer.github.com/v3/gists/)
- Github authentication using [Personal Access Token](https://developer.github.com/v3/auth/)
- [Commander (User for CLI)](https://www.npmjs.com/package/commander)
