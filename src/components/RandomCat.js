import React from 'react';
import PropsPart from './ParteProps';

//Constantes para sacar un número aleatorio que se pasará a la dirección de solicitud de la imagen para que las tres solicitudes sean diferentes y, por tanto, las fotos también
const getRandormInteger = maxNumber => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component{
  render(props){
    // Probando a trabajar con componentes y props
    const componentToRender =  <PropsPart name="Mario Casas" />;

    //constante para la dirección de los gatos, para las imágenes diferentes
    const randomCat = getRandormInteger(NUMBER_OF_CATS);

    //Estableciendo un ancho y altura predeterminados
    const widthHere = () => {
      if (this.props.width !== undefined){
       return this.props.width;
      }else{
        return 400;
      }
    }
    
    const heightHere = () => {
      if (this.props.height !== undefined){
       return this.props.height;
      }else{
        return 200;
      }
    }

    //Pintar a los gatos
    return (
      <>
      <a href="https://lorempixel.com"> 
        <img src={`https://lorempixel.com/${widthHere()}/${heightHere()}/cats/${randomCat}`} alt="Random cat"/>
      </a>
      
      <PropsPart name="Mercedes" />
      {componentToRender}
    </>
    )
  }
  
}


export default RandomCat;