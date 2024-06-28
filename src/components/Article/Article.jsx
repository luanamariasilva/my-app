import React from "react";
//import ArticleIMG from "../../assets/images/artiscle1.png";
import"./Style.css";


export class Article extends React.Component{
    render(){
        return (

           <article id="article">
              <img src={this.props.imags} alt=""width={220} />
            
              <div className="article-infos">
                <h2>{this.props.title}</h2>
                <h3>{this.props.provide}</h3>
                <p>{this.props.descript}</p>
                <button type="button" className="btn btn-outline-success" id="botto_modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                 Ler mais...
                </button>
              </div>
                
                {/* Modal */}

            
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"          
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{paddingTop:"2rem"}}>
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5>Cão-robô que coleta ar tóxico</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                     
                        <div className="modal-body">
                          <p>
                          Pesquisadores desenvolveram um cão-robô que coleta partículas de ar para permitir a análise da composição da atmosfera em situações potencialmente perigosas. Equipada com um braço articulado, a ferramenta em desenvolvimento consegue chegar a locais inacessíveis aos seres humanos.
                          </p>

                          <p>
                          Nos testes, o dispositivo foi enviado para aterros sanitários, sistemas de esgoto, locais de incêndio e armazéns de produtos químicos. O protótipo capturou o ar desses ambientes e permitiu a busca por compostos orgânicos voláteis (VOCs) perigosos.
                          </p>

                          <p>
                          Publicado na revista Analytical Chemistry, da ACS, o estudo apresenta a descrição dos testes feitos com o cão-robô.
                          </p>

                          <p>
                          Realizando uma tarefa que seria muito perigosa para técnicos humanos, o robô acessa os ambientes com um ar potencialmente tóxico e retorna o material para um espectrômetro de massa portátil — instrumento que permite a análise da composição da amostra.
                          </p>

                          <p>
                          O estudo comprovou que o dispositivo faz esse trajeto em menos tempo do que uma pessoa levaria para transferir as amostras para um laboratório externo.
                          </p>

                          <p>
                          A equipe planeja, no futuro, desenvolver sistemas móveis de detecção de gases perigosos e compostos orgânicos voláteis para inseri-los em dispositivos que possam, assim como o cão-robô, ser controlados remotamente, como drones aéreos e pequenos navios.
                          </p>

                        </div>
                        <div className="modal-footer">
                          <button id="bottom_closer" type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
               
           </article>         
        );
    }
}