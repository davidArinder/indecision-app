'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// console.log('App.js is running!')
// //to run during dev
// //babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// //live-server public

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: props.options // use default options
        };
        return _this;
    }
    // runs when component mounts


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // lifecycle component. only available in class based component
            console.log('fetching data');
        }
        // runs when component updates

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            console.log('saving data');
            // don't save options every time component update fires
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount');
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            // created method to pass from parent to child
            this.setState(function () {
                return { options: [] };
            }); // parens around curlies is so one line arrow function can return an object rather than curlies being function body
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length); // generate random number tied to the options array
            var option = this.state.options[randomNum]; // use randomNum as indeces to randomly choose an option
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add option';
            } else if (this.state.options.indexOf(option) > -1) {
                // check if new option already exists in array
                return 'This option already exists';
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            }); // add option to options array in this.state
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Put your life in the hands of a computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = { // sets default props for options will render if no title prop provided, can be overridden
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        ),
        ' '
    );
};

Header.defaultProps = { // sets default props for Header, will render if no title prop provided, can be overridden
    title: 'Indecision'
};

var Action = function Action(props) {
    // in stateless component, must pass props in as arg to get access
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions // if false (no options), disable button
            },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.options.map(function (option) {
            return (
                // optionText lets this be accessed from outside component
                React.createElement(Option, {
                    key: option,
                    optionText: option,
                    handleDeleteOption: props.handleDeleteOption
                })
            );
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick() {
                    props.handleDeleteOption(props.optionText);
                }
            },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    // React.Component gives all the behavior of React component w/o having to write out the code
    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props)); // constructor set up here and parent to keep the specific logic in this component


        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = { // state just for this component for error
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault(); // prevent page reload
            var option = e.target.elements.option.value.trim(); // option is same as value in input tag, trim gets rid of empty spaces
            if (option) {
                // only run if option exists
                e.target.elements.option.value = ''; // reset input field to blank
            }
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            // React components must define render()
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                ' ',
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

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
