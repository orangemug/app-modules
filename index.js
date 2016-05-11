var debug = require("debug")("app-modules");
var path  = require("path");

var pkgPath = path.dirname(
  require("pkg-up").sync(module.parent.filename)
);

var APP_MODULES_PATH = path.normalize(pkgPath+"/node_app_modules");

debug("Added require path: \"%s\"", APP_MODULES_PATH);

/**
 * <https://gist.github.com/branneman/8048520>
 */
process.env.NODE_PATH = APP_MODULES_PATH;
require("module").Module._initPaths();
