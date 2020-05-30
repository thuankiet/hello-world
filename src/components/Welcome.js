import React, { Component } from 'react';

class Welcome extends App {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
            </div>
        );
    }
}

export default Welcome;