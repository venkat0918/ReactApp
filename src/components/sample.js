import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import Header from './header';
class Sample extends Component {
    render() {
        return (
            // <div fxLayout="column">
            // <div>Hello This is sample data</div>
            // <div>Hello This is sample data</div>
            // </div>
            <Header></Header>
            // <Column flexGrow={1}>
            //     <Row horizontal='center'>
            //         <h1>HEADER</h1>
            //     </Row>
            //     <Row vertical='center'>
            //         <Column flexGrow={1} horizontal='center'>
            //             <h3> Column 1 </h3>
            //             <span> column 1 content </span>
            //         </Column>
            //         <Column flexGrow={1} horizontal='center'>
            //             <h3> Column 2 </h3>
            //             <span> column 2 content </span>
            //         </Column>
            //     </Row>
            // </Column>

        )
    }
}

export default Sample;