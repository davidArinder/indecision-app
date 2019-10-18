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

const onFormSubmit = (e) => {
    e.preventDefault() // stops full page refresh on event

    console.log('Form submitted')
}

const template = ( // wrapping parantheses only for readability, to remove an open-ended '='
<div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>} {/* As long as there is a subtitle, render subtitle */}
    <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
    <form onSubmit={onFormSubmit}> {/*References onFormSubmit but does not call it*/}
        <input type="text" name="option"/>
        <button>Add Option</button>
    </form>
</div>
)

const appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)