
import "./styles/Header.scss";
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { scaleRotate as Menu } from 'react-burger-menu'
import { connect } from 'react-redux'


class Header extends Component {
    constructor(props){
        super(props)

     
    }

    handleLogOut(){
      console.log("entrei aqui ")
      if(this.props.isloged){
        const action = { type: "DO_LOGIN", value:false}

        this.props.dispatch(action);
      }

    }

    headersingOut(){
    if(this.props.isloged != null || this.props.isloged != false){
    return(
      <div>
      <input  className="inputLogout" id="icon-button-file" type="button" onClick={this.handleLogOut.bind(this)} />
        <label htmlFor="icon-button-file">
        <IconButton className="exit" color="primary" aria-label="upload picture" component="span">
          <ExitToAppIcon  style={{ color: "#8f8f8f" }}/>
        </IconButton>
      </label>
      </div>
    
    )
    }
    }
    render() {
        console.log("Header props " + JSON.stringify(this.props))
        return (
        <div className="Header">
              
              
              <Menu  pageWrapId={"page-wrap"} outerContainerId={"outer-container"} customBurgerIcon={ <img  src={require('./image/menu.png')}/>} >
              

               <a id="home" className="menu-item" href="/">  Home</a>
               <a id="maquinas" className="menu-item" href="/maquinas">  Maquinas</a>
               <a id="transacciones" className="menu-item" href="/transacciones">  Transacciones</a>
               
              </Menu> 

       <h3 className="title">APP de control Kioscos </h3>
    {
   this.headersingOut()
    }
     
          </div>
        );
    }
}

export default   connect(
  (state) => state,
 
)(Header) ;