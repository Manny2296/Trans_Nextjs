import "./styles/PlantillaG.scss";

import Header from "./Header";
import Head from "next/head";
import PiedePagina from "./PiedePagina"


const PlantillaG = props =>{
    const tituloWebApp = "TransCaribe Admin";
return(
<div className="plantillaG">
<Head>
<title>TransCaribe</title>
 <meta name="viewport" content="width=device-width, initial-scale=1" />
 <meta charSet="utf-8" />
</Head>
<Header/>

<div id="outer-container" className="Content">

    
<img className="imgLogo"  src={require('./image/logotras.png')} ></img>
    
<main id="page-wrap">
{props.children}

</main>
</div>
<PiedePagina/>  


</div>
);
}

export default PlantillaG;