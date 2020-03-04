import React, { Component } from 'react';
import PlantillaG from './PlantillaG';
import { Button } from '@material-ui/core';
import fetch from 'isomorphic-unfetch';
import { OK, FORBIDDEN, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { connect } from 'react-redux'

const stylebutton = {
    background: "#e95a0c",
    borderRadius: 3,
    border: 0,
    color: 'white',
    width : '100%',
    height: 48,
    padding: '0 10px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
   // marginLeft: 20,
    marginTop: 5,
   // marginRight: 20
  };
  
class LoginFormulario extends Component {
    static getInitialProps({store, isServer, pathname, query}) {
        store.dispatch({type: 'DO_LOGIN', value:null
        }); // component will be able to read from store's state when rendered
        return {custom: 'custom'}; // you can pass some custom props to component from here
    }
    constructor(props){
       super(props) 
       this.state={
           isloged: this.props.isloged,
           usuario : "",
           pass : ""
       }
       this.handleNameChange = this.handleNameChange.bind(this);
       this.handlepasswordChange = this.handlepasswordChange.bind(this);
    
    }
    handleNameChange(event) { 
        this.setState({usuario: event.target.value});
      }
      handlepasswordChange(event) {  
        this.setState({pass: event.target.value});
      }
      _login(data) {
        return fetch('https://transcar.appspot.com/usuarios/login', {
            method: 'POST',
             
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
           console.log("Reponse" + JSON.stringify(res))
            return res;
        }).catch(err => err);
    }
      handlelogin(){
        //var HttpStatus = require('http-status-codes');
        var _userdata = {user_passwd:this.state.usuario+"_"+this.state.pass}
        this._login(_userdata).then(res =>{
         console.log(res)
         if(res.status == 201){
            const action = { type: "DO_LOGIN", value:true}

            this.props.dispatch(action);
        

             console.log("Usuario logeado ok")
         }
         if(res.status == FORBIDDEN){
             console.log("Error pasword")
             const action = { type: "DO_LOGIN", value:false}

            this.props.dispatch(action);
        
         }
         if(res.status == INTERNAL_SERVER_ERROR){
          const action = { type: "DO_LOGIN", value:false}

          this.props.dispatch(action);
      
             console.log("usuario no existe")
         }
         return res

        }
        ).catch(err => err);
    }
   
    render() {
        return (
            <PlantillaG>
            <h2>Inicio de sesion para el acceso a la BD </h2>
            <table>
           <tbody>
             <tr>
               <th>
                Usuario
               </th>
               <th>
           <input type="text" value={this.state.usuario} onChange={this.handleNameChange} />
               
               </th>
             </tr>
         
            
        
             <tr>
               <th>
                Contraseña 
               </th>
               <th>
               <input type="password" value={this.state.pass} onChange={this.handlepasswordChange} />
               </th>
             </tr>
             <tr >
               <th><Button variant="contained"  style={stylebutton} onClick={this.handlelogin.bind(this)}>iniciar sesion</Button>
               </th>
             </tr>
           </tbody>
         </table>
          </PlantillaG>
   
          
        );
    }
}

export default connect(
    (state) => state,
  )(LoginFormulario);