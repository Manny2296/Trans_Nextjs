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
import { connect } from 'react-redux'
import LoginFormulario from '../componentes/LoginFormulario';


import fetch from 'isomorphic-unfetch';
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
class transacciones extends Component {
    constructor(props){
    
        super(props)
  
         this.state = { 
           columns:[{title:"Id Transaccion", field:"id_transaccion"},
               {title:"Tipo de Transaccion", field:"tipo_transaccion"},
               {title:"Valor Transaccion", field:"valor_transaccion"},
               {title:"Valor Recarga", field:"valor_recarga"},
               {title:"Fecha", field:"fecha"},
               {title:"Hora", field:"hora"},
               {title:"No. Tarjeta", field:"idtarjeta"},
               {title:"Nombre Maquina", field:"nobremaquina"},
               {title:"IP Maquina", field:"ipmaquina"},
               
                      


  
          ],
          transacciones :[],
          isloged : this.props.isloged
          
        
    }
    this._loadTransacciones()
  
      }
    async _loadTransacciones(){
        const res = await fetch('https://transcar.appspot.com/transaccion/');
        const data = await res.json();
        
        //console.log(`Show data fetched. Count: ${data.length}`  );
        
     
        this.setState(
          { 
            transacciones: [...this.state.transacciones, ...data],  // une autre sintaxys  films: this.state.films.concat(data.results)
           // films: data.results,  // une autre sintaxys  films: this.state.films.concat(data.results)
         
           
          }
        )
      //  console.log("Rowsusu"+this.state.numRows)
      }
    render() {
      if(!this.props.isloged){
        return(
       <LoginFormulario/> )
      }
      else{
        
        return (
            <PlantillaG>
                          <MaterialTable
       icons={tableIcons}
      title="Kioscos Transcaribe"
      columns={this.state.columns}
      data={this.state.transacciones}
      actions={[
        {
          icon: AccountCircleIcon,
          tooltip: 'Ver Detalle',
          onClick: (event, rowData) => //alert("You saved " + rowData.name)window.location.href
          window.location.href = `/user/${rowData.ndoc}`
           
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
}

export default  connect(
  (state) => state,
 
)(transacciones);