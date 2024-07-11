import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            intriduction: "Hello!",
            buttonText: "Exit",
        };
    }


    render() {
        return (
            <div>
                <h1>{this.state.intriduction} {this.props.greeting}</h1>
                <button>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting;