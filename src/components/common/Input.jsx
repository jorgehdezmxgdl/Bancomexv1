import React, { Component } from 'react'
import styled from  'styled-components';

const _Input = styled.input`
    border: none;
    border-bottom: 1px solid #ccc;
    width: 100%;
    padding: 10px;
    font-size: 1.2em;
    &:focus {
        outline: none;
    }
`;

export default class Input extends Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <_Input {...this.props}  />
        )
    }
}
