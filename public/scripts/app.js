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

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); // stops full page refresh on event

    console.log('Form submitted');
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
    ' ',
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
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        ' ',
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add Option'
        )
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
