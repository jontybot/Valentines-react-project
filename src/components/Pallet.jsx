import React from "react"
import "./Pallet.css"
import  no from './no.svg'
import yes from './yes.svg'
export default function Pallet(){
    const [count, setCount] = React.useState(1);
    const [yes, setYes] = React.useState(true);
    const [e, setE] = React.useState("e");
  
    //function ifyes ()
    const yesstyle = {
        height: 100+count*5,
        width: 100+count*5
      };
      const nostyle = {
        height: 100-count*5,
        width: 100-count*5
      };

    return(
        <div className="div">
            {yes?<div>{
                    (()=>
                    {
                        switch(count) {
  
                            case 1:   return <h1>pratishtha, oh sorry prashasti, i know you are mad with me, but can you please forgive this nasamajh insaan?????(Pakka dobara nai hoga)</h1>;
                            case 2:   return <h1>Tum sachme merese baat nai karogi???(try again)</h1>;
                            case 3:   return <h1>Kabtak no dabaogi?</h1>;
                            case 4:   return <h1>Dabati raho,i have plenty of time</h1>;
                            case 5:   return <h1>Yaar?</h1>;
                            case 16:    return <h1>No button hi hata dia! LOL!,  Abb to sorry deni padhegi hihihihihi</h1>
                    
                            default:      return <h1>Pretty Pleas{e}?</h1>
                          }
                    })()
                }</div>:<h1>Thank You Buggeeeeeeee!! mujhe pata tha tum mujhe maaf kie bagair nai reh sakti :)</h1>}
            {yes?<div>
                <button className="btn" style={yesstyle} onClick={()=>{setYes(false)}}></button>
                {count<16?<button className="nobutton" style={nostyle} onClick={()=>{setCount(count+1); if(count>5)setE(e+"e")}}></button>:null}
            </div>:null}
            
        </div>
    )
        
}
