import React from "react";
import {Link} from "react-router-dom";
function Boutique() {
      return (
        <div className="boutique">
          <pre>{"  "}DRESS TO EXPRESS{"\n"}{"       "}NOT TO IMPRESS...!{"\n"}{"    "}</pre>
          <section className="bo">
            <h1 style={{marginTop: '500px', textAlign: 'center', width: '30%', fontSize: '100px'}}>       </h1>
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <div className="abbb" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '100px', width: '100%'}}>
              
              <button className="b"><Link to="/Get" className="li">GET THE MATERIAL ITEMS </Link> </button><br></br>
             
              <br /><br />
              
              <button className="c"><Link to="/Post" className="li">THE MATERIAL ITEMS </Link> </button><br></br>
             
              <br /><br />
             
              <button className="d"> <Link to="/Put" className="li"> UPDATE THE MATERIAL ITEMS  </Link> </button><br></br>
            
              <br /><br />
              <button className="e"><Link to="/Delete" classname="li">TRASH</Link></button>
            </div>
          </section>
        </div>
      );
    }
export default Boutique;