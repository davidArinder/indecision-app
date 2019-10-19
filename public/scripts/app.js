'use strict';

console.log('App.js is running!');
//to run during dev
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public

// JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'An App for the Indecisive',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); // stops full page refresh on event

    var option = e.target.elements.option.value; // get value user types from "option" in input tag

    if (option) {
        // check if there is a value typed in, ignore submission form if not
        app.options.push(option); // push item to options array in app variable
        e.target.elements.option.value = ''; // reset form to blank after submission
        render(); // re-render to update app
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = []; // set options array back to empty
    render(); // re-render to update app
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length); // generate random number tied to the options array
    var option = app.options[randomNum]; // use randomNum as indeces to randomly choose an option
    alert(option);
};

var appRoot = document.getElementById('app');

var render = function render() {
    // function so page can be re-rendered upon input
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
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        ' ',
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            // show the input options within the ol area
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            }) // JSX requires key for each array child

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
    ReactDOM.render(template, appRoot);
};

render(); // render app on initial page load
