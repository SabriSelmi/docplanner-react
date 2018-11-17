import React from "react";


const Carte=({carteElement})=>{
    return(
<div className="col" href="/">
<div className="imag1">
                    
<img src={carteElement.picture} alt='/'/>
    <div class="lien row">
        <p className="text-label col-6">{carteElement.title}</p>
        <p className="label col-6">SEE OPENINGS</p>
    </div>
    </div>
    </div>
                
    )
}
export default Carte;