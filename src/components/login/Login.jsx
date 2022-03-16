import React, { Component } from 'react'
import Button from '../common/Button'
import DivCenter from '../common/DivCenter'
import Image from '../common/Image'
import Input from '../common/Input'
import Label from '../common/Label'


export default class Login extends Component {
  render() {
    return (
       <DivCenter>
          <Image src="./images/logo.png" /> 
          <form>
            <Label title="Clave"  />
            <Input type="text" name="clave" id="clave" autocomplete="off"></Input>
            <Label title="Contraseña" />
            <Input type="password" name="passw" id="passw" autocomplete="off"></Input>
            <Button title="Enviar"/>
          </form> 
        </DivCenter>
    )
  }
}
