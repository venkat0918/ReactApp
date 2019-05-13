import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Column, Row } from 'simple-flexbox';
export default class SelectTarget extends Component {
    render() {
        return (
            <div>
                <Column>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
                </Column>
            </div >
        )
    }
}
