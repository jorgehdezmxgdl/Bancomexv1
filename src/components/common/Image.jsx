import React, { Component } from 'react'
import styled from  'styled-components';

const _Img = styled.img`
    width: 50%;
    height: 50%;
    border-radius: 5%;
`;

export default class Image extends Component {
  render() {
    return  (<_Img src={this.props.src} />)
  }
}
