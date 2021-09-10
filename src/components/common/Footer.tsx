import * as React from "react";
import Logo from "./LogoFooter";

function Footer(){
    


    const Authors =  <div  className="authors">
            
            <p>
                <h2>Authors:</h2>
                <div>Hasan Khadra</div>
                <div>Mahmood Darwish</div>
                <div>Mohamad Dwik</div>
                <div>Mohammad Shahin</div>
            </p>
        </div>

    const aboutUs = <div className="aboutUs">
        <h2>Goalify</h2>
            Goalify is a web application used by {"\n"}
            users to set their goals, {"\n"}
            track their progress and achievements, view statistics on their{"\n"} progress, and share that with other users who {"\n"}would also be posting their progress creating{"\n"} some kind of a motivational feedback loop.
    </div>

    return <footer className="footer">{Authors}{aboutUs}<Logo /></footer>

}

export default Footer;