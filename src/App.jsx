
import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import ImagArt1 from "./assets/images/cao-robo-ar-toxico.jpg";
/* import ImagArt2 from "./assets/images/article2.jpg";
import ImagArt3 from "./assets/images/article3.avif"; */
import { Counter } from "./components/counter/Counter";


class App extends React.Component{
   render(){
      return (
        <>
          <Navbar /> 

           <section id="article">
            <Article title="Cão-robô que coleta ar tóxico em lugares perigosos é criado por pesquisadores" 
                      provide="CNN"
                      descript= "Pesquisadores desenvolveram um cão-robô que coleta partículas de ar para permitir a análise da composição da atmosfera em situações potencialmente perigosas. Equipada com um braço articulado, a ferramenta em desenvolvimento consegue chegar a locais inacessíveis aos seres humanos." 
                      imags ={ImagArt1}
                      />
            {/* <Article title="Vibrant Portraits of 2020" 
                     provide="SpaceNews"
                     descript="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates facere cumque quis tenetur quo molestias consectetur ab, sapiente deleniti excepturi quae sunt expedita, possimus aut hic fuga magni in!"
                     imags ={ImagArt2}
            />
            <Article title="36 Days of Malayalam type" 
                     provide="Spaceflight Now"
                     descript="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates facere cumque quis tenetur quo molestias consectetur ab, sapiente deleniti excepturi quae sunt expedita, possimus aut hic fuga magni in!"
                     imags ={ImagArt3}
            />
            <Article title="Designing Dashboards" 
                      provide="NASA"
                      descript="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates facere cumque quis tenetur quo molestias consectetur ab, sapiente deleniti excepturi quae sunt expedita, possimus aut hic fuga magni in!" 
                      imags ={ImagArt1}
            /> */}
          </section> 
          
         </>
     ); 
   }
}

export default App; 

