import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';


export default function Footer() 
{
  return <div>
  <div>{/* Jumbotron element */}
  <Jumbotron className='page-footer'>
  <h1>Order Food Online</h1>
  <p>
    Millions of people around the world have already made Catersmart the place where their dream happens.
  </p>
  <p>
    <Button variant="primary">Enquire Now</Button>
  </p>
  </Jumbotron></div>
  
  <div>
<footer className="page-footer font-small pt-4 container">

  <div className="container-fluid text-center text-md-left">

    <div className="row">

      <div className="ml-sm-4">
        <p><a href="#!">About us</a></p>
      </div>

      <div className="ml-sm-4">
      <p><a href="#!">Privacy and Terms</a></p>

      </div>
      <div className="ml-sm-4">
      <p><a href="#!">Contact Us</a></p>

      </div>
      

          <div className="fb-ic"><a href='#!' >
            <i className="fab fa-facebook-f white-text mr-4"> </i>
          </a></div>
          <a href='#!' className="tw-ic">
            <i className="fab fa-twitter white-text mr-4"> </i>
          </a>
          <a href='#!' className="gplus-ic">
            <i className="fab fa-google-plus-g white-text mr-4"> </i>
          </a>
          <a href='#!' className="li-ic">
            <i className="fab fa-linkedin-in white-text mr-4"> </i>
          </a>
          <a href='#!' className="ins-ic">
            <i className="fab fa-instagram white-text"> </i>
          </a>


      

    </div>

  </div>

</footer>
  </div>
  
  </div>;


}
