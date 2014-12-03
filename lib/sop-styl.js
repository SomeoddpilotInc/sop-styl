/*!
 * sop-styl
 * Copyright (c) 2014 Alex Robertson <alex@someoddpilot.com>
 */

var stylus = require("stylus");
var path   = require("path");
var nodes  = stylus.nodes;

exports = module.exports = plugin;

/**
 * Library version.
 */

exports.version = require(path.join(__dirname, "../package.json")).version;

/**
 * Stylus path.
 */

exports.path = __dirname;

/**
 * Return the plugin callback for stylus.
 *
 * @return {Function}
 * @api public
 */

function plugin() {
  return function(style){
    style.include(__dirname);

    style.define("has-canvas", nodes.false);
  };
}
