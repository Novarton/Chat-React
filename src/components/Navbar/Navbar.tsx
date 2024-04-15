import React from "react";
import './Navbar.css';
import Button from "../Button/Button";

function Navbar(){
    return(
        <nav>
            <div className="tittle">
                <a>
                    Titulo
                </a>
            </div>
            <section className="display-menu">
            </section>
        </nav>
    );
}
export default Navbar;