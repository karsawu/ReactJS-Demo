/**
 * Created by karsawu on 2016/12/1.
 */
import React, {
    Component
} from 'react'

import ReactDom from 'react-dom'
import QRcodeView from './Components/qrCodeGenerator/qrCodeGenerator'

import './main.css'

export default class App extends Component {
    constructor(){
        super();

        this.state = {};
    }

    render() {
        console.log("=======init======");
        return (
            <div className="app">
                {<QRcodeView/>}
            </div>
    )
    }
}

ReactDom.render(<App/>, document.body)
