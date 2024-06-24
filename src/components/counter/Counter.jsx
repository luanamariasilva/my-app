
import React from "react";

 export class Counter extends React.Component{
    constructor(){
        super()
        this.state ={contador: 0};
    }
    render(){
        return(
                <div style={{padding:"10rem"}}>
                    <h1>{this.state.contador}</h1>

                    <div>
                        <button onClick={()=> {this.setState({contador: this.state.contador -1})
                        console.log(this.state.contador)
                    
                         }}>Diminuir</button>
                        
                        <button onClick={()=>{this.setState({contador: this.state.contador +1})
                         console.log(this.state.contador)

                       }}>Aumentar</button>

                    </div>
                </div>

      

            );
    }


}