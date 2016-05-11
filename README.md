# app-modules
Adds `node_app_modules` to the require path

[![circleci](https://circleci.com/gh/orangemug/app-modules.png?style=shield)][circleci]
[![Dependency Status](https://david-dm.org/orangemug/app-modules.svg)][dm-prod]
[![Dev Dependency Status](https://david-dm.org/orangemug/app-modules/dev-status.svg)][dm-dev]

[circleci]:  https://circleci.com/gh/orangemug/app-modules
[dm-prod]:   https://david-dm.org/orangemug/app-modules
[dm-dev]:    https://david-dm.org/orangemug/app-modules#info=devDependencies


## Why?
For larger apps you end up doing alot of odd requiring

    require("../../../../../../lib/module");

You could just add symlinks to `node_modules` however that messes with `node_modules` caching on various platforms like heroku and circleci.

This library adds a new directory `node_app_modules` to the load path.



## Install

    npm i orangemug/app-modules --save


## Usage
To setup just require the module

    // Adds `node_app_modules` as a load path
    require("app-modules");

Then you can require anything in your `node_app_modules` directory


## License
[MIT](LICENSE)
