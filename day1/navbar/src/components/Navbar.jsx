import React from 'react'
import Styles from "../components/Navbar.module.css"
import { Link } from "react-router-dom";

 const Navbar = () => {
    return (
        <div className={Styles.Navbar}>
            <div className={Styles.innerdiv}>
                <div className={Styles.left}>
                    <h2 style={{
                        color: "white",
                        marginTop: "10px",  
                    }}>LOGOBAKERY</h2>
                </div> 

                <div className={Styles.right}>
                    <div className={Styles.components}>
                        <div className={Styles.service}>
                            <a href="" style={{
                                textDecoration: "none",
                                color: "white",
                        }}>Services</a>
                        </div>
                        <div className={Styles.project}>
                        <a  href=""  style={{
                                textDecoration: "none",
                                color: "white",
                        }}>Project</a>
                        </div>
                        <div className={Styles.about}>
                        <a  href=""  style={{
                                textDecoration: "none",
                                color: "white",
                        }}>About</a>
                        </div>
                    </div>
                    <div className={Styles.connect}>
                        <button style={{
                            backgroundColor: "rgb(0,135,167)",
                            borderRadius: "15px",
                            width: "100px",
                            height: "30px",
                            color : "white"
                    }} >Connect</button>
                      </div>
                
                </div>
            </div>
     
        </div>
    );
}
export default Navbar