import React from 'react';
import { useState } from "react";
import '../Button/Button.css';

//TSX
interface Datos{
    texto:string;
    color:string;
}
//const [gatoState, setGatostate] = useState();

function Button({texto,color}:Datos){
    const [contador, setContador] = useState(1);
    const claseColor = `mi-boton ${color}`;
    const [gatoState, setGatostate] =  useState('-');

    const gato = () =>{
        setGatostate(variable =>{
            if(variable == '-')return 'X';
            if(variable == 'X')return 'O';
            return '-';
        });
    };

    const sumar = ()=>{
        setContador(variable =>{
            return (variable + 1);
        });
    };

    const nombre = `mi-boton ${color}`;
    
    return (
        <div onClick={gato} className={nombre}>
        {gatoState}
        </div>
    );
}
export default Button;