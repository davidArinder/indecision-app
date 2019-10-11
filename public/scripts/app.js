'use strict';

console.log('App.js is running!');
//to run during dev
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public

// JSX - JavaScript XML
var template = // wrapping parantheses only for readability, to remove an open-ended '='
React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some cool info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'David Arinder'
    ),
    React.createElement(
        'p',
        null,
        'Location: Seattle'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot); // render this element (template) into this part of the browser (appRoot)
