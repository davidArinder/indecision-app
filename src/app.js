console.log('App.js is running!')
//to run during dev
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public

// JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'An App for the Indecisive',
    options: ['One', 'Two']
}
const template = ( // wrapping parantheses only for readability, to remove an open-ended '='
<div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
)

const user = {
    name: 'Aragorn',
    age: 85,
    location: 'Minas Tirith'
}
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    } 
}

const templateTwo = (
<div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
</div>
)


const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot) // render this element (template) into this part of the browser (appRoot)