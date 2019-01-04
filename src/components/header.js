import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import './header.css';
class Header extends Component {
    render() {
        return (
            <div>
                <Row className="header" justifyContent="space-between">
                    <h3 className="data"> User Portal</h3>
                    <Row className="data" alignContent="space-between" alignItems="center">
                        <i className="far fa-bell iconunion iconsData"></i>
                        <i className="far fa-bell iconunion iconsData"></i>
                        <i className="far fa-bell iconunion iconsData"></i>
                    </Row>
                </Row>
            </div>
        )
    }
}

export default Header