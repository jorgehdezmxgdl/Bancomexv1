import React, { Component } from 'react'
import styled from  'styled-components';
  
const _Label = styled.label`
    border: none;
    border-bottom: 1px solid #ccc;
    width: 100%;
    padding: 10px;
    font-size: 1.2em;
    &:focus {
        outline: none;
    }
`;


export default class Label extends Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <_Label>{this.props.title}</_Label>
        )
    }
}
