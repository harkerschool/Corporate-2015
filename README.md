# Harker Marketing Website 2015

The front-end templates, styles and scripts for The Harker School's corporate website: http://www.harker.org/. Uses modular design to support rapid production of rich, responsive web pages.

## Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [bower](http://bower.io): `npm install bower -g`
  * [grunt](http://gruntjs.com/): `npm install -g grunt-cli`

## Getting Started

  * Run `npm install` to install dev dependencies for project
  * Run `bower install` to install plugins and libraries
  * Run `grunt bower` to concat bower components into one file (index.php references this file, so it's required).
  * Run `compass compile` to compile sass files. Run `compass watch` to watch for changes in scss folder.
  * Run `grunt` to build distribution folder with concatenated and minified files of js and css files. Also, copies any required images or fonts.
