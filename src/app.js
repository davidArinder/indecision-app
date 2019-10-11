console.log('App.js is running!')
//to run during dev
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public

// JSX - JavaScript XML
var template = ( // wrapping parantheses only for readability, to remove an open-ended '='
<div>
    <h1>Indecision App</h1> 
    <p>This is some cool info</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
)

var templateTwo = (
<div>
    <h1>David Arinder</h1>
    <p>Location: Seattle</p>
</div>
)


var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot) // render this element (template) into this part of the browser (appRoot)