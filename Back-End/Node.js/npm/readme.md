# npm  



G:\wwwRoot\learning\Front-End-Tools\NPM





G:\wwwRoot\learning\000projects\commenting-engine\readme.md


$ npm run [commands] 


*******************************************************************************
G:\wwwRoot\learning\000projects\commenting-engine\readme.md
*******************************************************************************


## npm script comand error (package.json)

??? npm run ???

***************************************
# error  
$ npm serve:dist

# OK  
$ npm run serve:dist

# webpack build ./dist/
$ npm run dist

***************************************


Usage: npm <command>

where <command> is one of:
    access, adduser, bin, bugs, c, cache, completion, config,
    ddp, dedupe, deprecate, dist-tag, docs, edit, explore, get,
    help, help-search, i, init, install, install-test, it, link,
    list, ln, login, logout, ls, outdated, owner, pack, ping,
    prefix, prune, publish, rb, rebuild, repo, restart, root,
    run, run-script, s, se, search, set, shrinkwrap, star,
    stars, start, stop, t, team, test, tst, un, uninstall,
    unpublish, unstar, up, update, v, version, view, whoami

npm <cmd> -h     quick help on <cmd>
npm -l           display full usage info
npm help <term>  search for help on <term>
npm help npm     involved overview

Specify configs in the ini-formatted file:
    C:\Users\xray\.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@4.0.5 C:\Users\xray\AppData\Roaming\npm\node_modules\npm



"scripts": {
    "clean": "rimraf dist/*",
    "copy": "copyfiles -f ./src/index.html ./src/favicon.ico ./dist",
    "dist": "npm run copy & webpack --env=dist",
    "lint": "eslint ./src",
    "posttest": "npm run lint",
    "release:major": "npm version major && npm publish && git push --follow-tags",
    "release:minor": "npm version minor && npm publish && git push --follow-tags",
    "release:patch": "npm version patch && npm publish && git push --follow-tags",
    "serve": "node server.js --env=dev",
    "serve:dist": "node server.js --env=dist",
    "start": "node server.js --env=dev",
    "test": "karma start",
    "test:watch": "karma start --autoWatch=true --singleRun=false"
},


*******************************************************************************
*******************************************************************************





*******************************************************************************






*******************************************************************************








*******************************************************************************







*******************************************************************************


## How to Use npm Scripts as Your Build Tool


https://egghead.io/lessons/tools-create-a-basic-package-json-file?course=how-to-use-npm-scripts-as-your-build-tool


https://egghead.io/instructors/elijah-manor

https://github.com/elijahmanor/react-file-size

https://egghead.io/lessons/javascript-es6-parameter-object-destructuring-with-required-values


$ npm init 

$ npm init -f

$ npm init -f -y

// https://nodejs.org/api/synopsis.html
// https://nodejs.org/api/cli.html#cli_command_line_options

// node -e "script_codes" === node scriptname.js

# === node ...
$ npm run  



$ npm test

$ npm t







$ npm i request-promise cookie-session cookies helmet -D




## npm

https://www.npmjs.com/package/request

https://www.npmjs.com/package/request-promise

https://www.npmjs.com/package/cookie-session


https://www.npmjs.com/package/cookies

https://www.npmjs.com/package/helmet


$ npm i cookie-session -D

$ npm i request-promise cookies helmet -D


$ npm i request -D

































