import React, {
    Component
} from 'react'

import ReactDom from 'react-dom'

export default class App extends Component {
    constructor(){
        super();

        this.state = {};
    }
    
    render() {
        console.log("=======init======");
        return (
            <div>YOU SUCCESS</div>
        )
    }
}

ReactDom.render(<App/>,document.body)
