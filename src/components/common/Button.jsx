import React, { Component } from 'react'
import styled from  'styled-components';

const _Button = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 1.2em;
    &:focus {
        outline: none;
    }
`;

export default class Button extends Component {
  constructor(props) {
    super(props)
  }  

  render() {     
    return (
        <_Button>{this.props.title}</_Button>
    )
  }
}
