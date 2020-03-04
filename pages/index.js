import React, { Component } from 'react';
import PlantillaG from '../componentes/PlantillaG';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { forwardRef } from 'react';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import LoginFormulario from '../componentes/LoginFormulario';
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    
  };
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
class Index extends Component {
 
    constructor(props){
    
        super(props)
  
         this.state = { 
           columns:[{title:"Id Maquina", field:"id_maquina"},
               {title:"Nombre Maquina", field:"nombre"},
               {title:"Ip Maquina", field:"ip_maquina"},
               {title:"No Tarjetas", field:"n_tarjetas"}
  
          ],
          maquinas :[],
          isloged : this.props.isloged
          
         
    }
    this._loadMaquinas()
  
      }


      async _loadMaquinas(){
        const res = await fetch('https://transcar.appspot.com/maquinas/');
        const data = await res.json();
        
        //console.log(`Show data fetched. Count: ${data.length}`  );
        
     
        this.setState(
          { 
            maquinas: [...this.state.maquinas, ...data],  // une autre sintaxys  films: this.state.films.concat(data.results)
           // films: data.results,  // une autre sintaxys  films: this.state.films.concat(data.results)
         
           
          }
        )
      //  console.log("Rowsusu"+this.state.numRows)
      }
      renderbassedonLoginState(){
        console.log("HOla soy las propps" + this.props.isloged)
        if(!this.props.isloged){
          return(
        <LoginFormulario/>
            )
        }
  
        else{
  
          return (
            <PlantillaG>
                 <MaterialTable
         icons={tableIcons}
        title="Kioscos Transcaribe"
        columns={this.state.columns}
        data={this.state.maquinas}
        actions={[
          {
            icon: AccountCircleIcon,
            tooltip: 'Ver Detalle',
            onClick: (event, rowData) => //alert("You saved " + rowData.name)window.location.href
            window.location.href = `/maquina/${rowData.nombre}`
             
          }
         ]}
        editable={{
         /* onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  this.setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),*/
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />  
            </PlantillaG>
          );
  
  
        }
         
      }
    render() {  
      console.log("Islog : " + this.props.isloged);
     console.log("REndericze el index")
      return(
        this.renderbassedonLoginState()
      )
    }
}


export default connect(
  (state) => state,
)(Index);