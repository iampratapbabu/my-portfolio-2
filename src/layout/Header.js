import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import img from '../images/img2.jpg';


//styles

const Header = () =>{
  return(
    <Fragment>
<div>
    <img alt="admin-img" class="block-img" src={img} width="170" height="180"/>
      <h4><Link to='/'>TULIKA GAIROLA</Link></h4>
      <a href="https://www.linkedin.com/in/tulika-gairola-829725192/"><i class="fab fa-linkedin fa-2x icon-1"></i></a>
      <a href="mailto:kumarpratap.1447@gmail.com"><i class="fas fa-envelope fa-2x icon-2"></i></a>

      <hr/>
      <ul>
        <li><Link className="btn btn-light"  to="/projects">Projects</Link></li>
        <li><Link className="btn btn-light"  to="/education">Education</Link></li>

        <li><Link className="btn btn-light"  to="/skills">Skills</Link></li>


      </ul>
  </div>


    </Fragment>
  );
}

export default Header;
