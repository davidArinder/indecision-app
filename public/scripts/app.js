'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot); // render this element (template) into this part of the browser (appRoot)
