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
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{paddingTop:"7rem"}}>
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">ola</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          ...
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