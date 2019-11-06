// console.log('App.js is running!')
// //to run during dev
// //babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// //live-server public

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: props.options // use default options
        }
    }
    // runs when component mounts
    componentDidMount() { // lifecycle component. only available in class based component
        console.log('fetching data')
    }
    // runs when component updates
    componentDidUpdate (prevProps, prevState) {
        console.log('saving data')
        // don't save options every time component update fires
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    handleDeleteOptions() { // created method to pass from parent to child
        this.setState(() => ({ options: [] })) // parens around curlies is so one line arrow function can return an object rather than curlies being function body
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length) // generate random number tied to the options array
        const option = this.state.options[randomNum] // use randomNum as indeces to randomly choose an option
        alert(option)
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add option'
        } else if (this.state.options.indexOf(option) > -1) { // check if new option already exists in array
            return 'This option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) })) // add option to options array in this.state
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                {/* passes to Options component */}
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} 
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = { // sets default props for options will render if no title prop provided, can be overridden
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>} {/*shows if subtitle provided, disappears if not*/}
        </div>
    )
}

Header.defaultProps = { // sets default props for Header, will render if no title prop provided, can be overridden
    title: 'Indecision'
}

const Action = (props) => { // in stateless component, must pass props in as arg to get access
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions} // if false (no options), disable button
            >
                What should I do?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => (
                    // optionText lets this be accessed from outside component
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    /> 
                ))    
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={() => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
            Remove
            </button>
        </div>
    )
}


class AddOption extends React.Component { // React.Component gives all the behavior of React component w/o having to write out the code
    constructor(props) { // constructor set up here and parent to keep the specific logic in this component
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = { // state just for this component for error
            error: undefined
        }
    }
    handleAddOption(e) {
            e.preventDefault() // prevent page reload
            const option = e.target.elements.option.value.trim() // option is same as value in input tag, trim gets rid of empty spaces
            if (option) { // only run if option exists
                e.target.elements.option.value = '' // reset input field to blank
            }
            const error = this.props.handleAddOption(option)

            this.setState(() => ({ error }))
    }
    render() { // React components must define render()
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>} {/*add if error needed */}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))






// stateless functional component

// class IndecisionApp extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//       this.handlePick = this.handlePick.bind(this);
//       this.handleAddOption = this.handleAddOption.bind(this);
//       this.handleDeleteOption = this.handleDeleteOption.bind(this);
//       this.state = {
//         options: props.options
//       };
//     }
//     handleDeleteOptions() {
//       this.setState(() => ({ options: [] }));
//     }
//     handleDeleteOption(optionToRemove) {
//       this.setState((prevState) => ({
//         options: prevState.options.filter((option) => optionToRemove !== option)
//       }));
//     }
//     handlePick() {
//       const randomNum = Math.floor(Math.random() * this.state.options.length);
//       const option = this.state.options[randomNum];
//       alert(option);
//     }
//     handleAddOption(option) {
//       if (!option) {
//         return 'Enter valid value to add item';
//       } else if (this.state.options.indexOf(option) > -1) {
//         return 'This option already exists';
//       }
  
//       this.setState((prevState) => ({
//         options: prevState.options.concat(option)
//       }));
//     }
//     render() {
//       const subtitle = 'Put your life in the hands of a computer';
  
//       return (
//         <div>
//           <Header subtitle={subtitle} />
//           <Action
//             hasOptions={this.state.options.length > 0}
//             handlePick={this.handlePick}
//           />
//           <Options
//             options={this.state.options}
//             handleDeleteOptions={this.handleDeleteOptions}
//             handleDeleteOption={this.handleDeleteOption}
//           />
//           <AddOption
//             handleAddOption={this.handleAddOption}
//           />
//         </div>
//       );
//     }
//   }
  
//   IndecisionApp.defaultProps = {
//     options: []
//   };
  
//   const Header = (props) => {
//     return (
//       <div>
//         <h1>{props.title}</h1>
//         {props.subtitle && <h2>{props.subtitle}</h2>}
//       </div>
//     );
//   };
  
//   Header.defaultProps = {
//     title: 'Indecision'
//   };
  
//   const Action = (props) => {
//     return (
//       <div>
//         <button
//           onClick={props.handlePick}
//           disabled={!props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   };
  
//   const Options = (props) => {
//     return (
//       <div>
//         <button onClick={props.handleDeleteOptions}>Remove All</button>
//         {
//           props.options.map((option) => (
//             <Option
//               key={option}
//               optionText={option}
//               handleDeleteOption={props.handleDeleteOption}
//             />
//           ))
//         }
//       </div>
//     );
//   };
  
//   const Option = (props) => {
//     return (
//       <div>
//         {props.optionText}
//         <button
//           onClick={(e) => {
//             props.handleDeleteOption(props.optionText);
//           }}
//         >
//           remove
//         </button>
//       </div>
//     );
//   };
  
//   class AddOption extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleAddOption = this.handleAddOption.bind(this);
//       this.state = {
//         error: undefined
//       };
//     }
//     handleAddOption(e) {
//       e.preventDefault();
  
//       const option = e.target.elements.option.value.trim();
//       const error = this.props.handleAddOption(option);
  
//       this.setState(() => ({ error }));
//     }
//     render() {
//       return (
//         <div>
//           {this.state.error && <p>{this.state.error}</p>}
//           <form onSubmit={this.handleAddOption}>
//             <input type="text" name="option" />
//             <button>Add Option</button>
//           </form>
//         </div>
//       );
//     }
//   }
  
//   // const User = (props) => {
//   //   return (
//   //     <div>
//   //       <p>Name: {props.name}</p>
//   //       <p>Age: {props.age}</p>
//   //     </div>
//   //   );
//   // };
  
//   ReactDOM.render(<IndecisionApp />, document.getElementById('app'));