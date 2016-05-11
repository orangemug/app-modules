# app-modules
Adds `node_app_modules` to the require path


## Why?
For larger apps you end up doing alot of odd requiring

    require("../../../../../../lib/module");

If you symlink you `./lib` directory, or any other directory in `node_app_modules` you can just do

    require("lib/module");



## Install

    npm i orangemug/app-modules --save



## Usage
Just require at the top of your script

    require("app-modules");



## License
[MIT](LICENSE)
