console.log('App.js is running!')
//to run during dev
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public

// JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'An App for the Indecisive',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault() // stops full page refresh on event

    const option = e.target.elements.option.value // get value user types from "option" in input tag

    if (option) { // check if there is a value typed in, ignore submission form if not
        app.options.push(option) // push item to options array in app variable
        e.target.elements.option.value = '' // reset form to blank after submission
        render() // re-render to update app
    }
}

const onRemoveAll = () => {
    app.options = [] // set options array back to empty
    render() // re-render to update app
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length) // generate random number tied to the options array
    const option = app.options[randomNum] // use randomNum as indeces to randomly choose an option
    alert(option)
}

const appRoot = document.getElementById('app')

const render = () => { // function so page can be re-rendered upon input
    const template = ( // wrapping parantheses only for readability, to remove an open-ended '='
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>} {/* As long as there is a subtitle, render subtitle */}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button> {/*button disabled when options array is empty*/}
            <button onClick={onRemoveAll}>Remove all</button>
            <ol>
                { // show the input options within the ol area
                    app.options.map((option) => <li key={option}>{option}</li>) // JSX requires key for each array child
                }
            </ol>
            <form onSubmit={onFormSubmit}> {/*References onFormSubmit but does not call it*/}
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

render() // render app on initial page load