/* jslint node: true */
// "use strict";
require("quiver-ui/base/_base.scss");
require("quiver-ui/core/_core.scss");

/** @jsx React.DOM */
var React = require('react');
var App = require('./src/app.js');
React.render(<App />, document.getElementById('main'));
