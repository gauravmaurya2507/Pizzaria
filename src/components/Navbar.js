import React, { useState } from 'react'
import '../styles/Navbar.css'
import ReorderIcon from "@mui/icons-material/Reorder";
import Logo from '../assets/pizzaLogo.png';
import {Link} from 'react-router-dom'
function Navbar() {

  const [openLinks,setOpenLinks] = useState(false)

  const toogleNavbar = () => {
    setOpenLinks(!openLinks)
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toogleNavbar}><ReorderIcon /></button>
      </div>
    </div>
  );
}

export default Navbar

