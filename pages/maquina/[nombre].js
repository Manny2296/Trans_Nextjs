import React, { Component } from 'react';
import { connect } from 'react-redux'
import Router from 'next/router'
import PlantillaG from '../../componentes/PlantillaG';
import fetch from 'isomorphic-unfetch';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../../componentes/styles/nombre.scss'

const textinputdisabled = {
    background: '#e0e0e0',
    borderRadius: 3,
    fontSize: 18,
    fontFamily: 'Garamond',
    color: 'black',
    height: 35,
   // alignText: 'center', 
    //padding: '0 20px',
    textAlign: 'center'
   
   
  }
  const paper = {
      textAlign: 'center',

  }
class maquinaprofile extends Component {
    constructor(props){
        super(props)
        let datamaquina = this.props.maquina
        this.state = {
         
            queryval : this.props.queryval,
            maquina : datamaquina,
            saldomaquina : "0"
        }
        this._loadSaldo()
    }

   async _loadSaldo(){
   
        const res = await fetch('http://localhost:8081/transaccion/suma/');
        const data = await res.json();
        console.log("data" + data)
        //console.log(`Show data fetched. Count: ${data.length}`  );
        var numeral = require('numeral');
     
        this.setState(
          { 
            saldomaquina: numeral(data).format('0,0'),  // une autre sintaxys  films: this.state.films.concat(data.results)
           // films: data.results,  // une autre sintaxys  films: this.state.films.concat(data.results)
         
           
          }
        )

    }
   
    render() {
        console.log(this.state.maquina[0].nombre)
        console.log("Saldo" + this.state.saldomaquina)
        return (
           
            <PlantillaG>
   
      <Grid container spacing={3}
  
  alignItems="center"
  justify="center">
      <Grid item xs={12}>
      <Paper style={paper}>
        <table>
            <tbody>           
                <tr>
               <th>
                   Nombre Maquina : 
               </th>
               <th>
               <input readOnly  type="text" style={textinputdisabled}  value={this.state.maquina[0].nombre}  />
                
               </th>
           </tr>
           <tr>
               <th>
                   Ip Maquina : 
               </th>
               <th>
               <input readOnly  type="text" style={textinputdisabled} value={this.state.maquina[0].ip_maquina}  />
                
               </th>
           </tr>
           <tr>
               <th>
                   N° Tarjetas disponibles : 
               </th>
               <th>
               <input readOnly  type="text" style={textinputdisabled} value={this.state.maquina[0].n_tarjetas}  />
                
               </th>
           </tr>
           </tbody>

        </table>
      </Paper>
      </Grid>



      <Grid item xs={6}>
        <Paper style={paper}>
          <h2>  $ {this.state.saldomaquina} COP   </h2>
       
         <h4>El saldo actual de la maquina es :</h4>
      </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={paper} className="paper">xs=6</Paper>

        </Grid>
      </Grid>
    
            </PlantillaG>
        
        
        );
    }

   
}
maquinaprofile.getInitialProps = async({ query,store}) => {
  
    //const res = await fetch('http://localhost:8080/users/'+ query.id);
    //const data = await res.json();
   // console.log('https://winged-pen-261210.appspot.com/users/'+ query.id)
      console.log(query.nombre);
      const res = await fetch('https://transcar.appspot.com/maquinas/' + query.nombre);
      const data = await res.json();
      
      //console.log(`Show data fetched. Count: ${data.length}`  );
      
   
     
      return{
        queryval:query.id,
        maquina :data
      }
      
  }
  
export default connect(
    (state) => state) (maquinaprofile)