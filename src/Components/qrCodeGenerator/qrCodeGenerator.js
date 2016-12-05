/**
 * Created by karsawu on 2016/12/5.
 */

import React, {
    Component
} from 'react'

import QRCode from 'qrcode.react'
require('./qrCodeGenerator.css')

export default class QRcodeView extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        console.log("QRcodeView");
        return (
            <div className="qrcode">
                <QRCode value="http://facebook.github.io/react/" size={300} fgColor="#3d3d3d" />
            </div>
        );
    }
}