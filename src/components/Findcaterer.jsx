import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';


export default function FindCaterer() {
    return <div>
            <Jumbotron className='bgcolor'>
  <h1>Find the best caterers around you here</h1>
  <form className='justify-content-md-center'>
            <div className="form-row align-items-center">
                <div className="col-sm-3 my-1">
                    <label className="sr-only" for="inlineFormInputName">HeadCount</label>
                    <input type="text" className="form-control" id="inlineFormInputName" placeholder="Head Count"></input>
                </div>
                <div className="col-sm-3 my-1">
                    <label className="sr-only" for="inlineFormInputGroupUsername">DateTime</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Date and time"></input>
                        <div className="input-group-prepend">
                            <div className="input-group-text">icon</div>
                        </div>                    
                    </div>
                </div>
                
                <div class="col-auto my-1">
                    <button type="submit" class="btn btn-dark">Find Out More</button>
                </div>
            </div>
        </form>
  
  </Jumbotron></div>


        
    
} 