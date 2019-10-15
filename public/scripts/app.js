'use strict';

console.log('App.js is running!');
//to run during dev
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public

// JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'An App for the Indecisive',
    options: ['One', 'Two']
};
var template = // wrapping parantheses only for readability, to remove an open-ended '='
React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options:' : 'No options'
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

var user = {
    name: 'Aragorn',
    age: 85,
    location: 'Minas Tirith'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot); // render this element (template) into this part of the browser (appRoot)
