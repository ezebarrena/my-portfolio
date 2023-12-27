import Prueba from "../assets/pictures/prueba.png"
import "../layout/cssCompStyles.css"
import LogoGit from "../assets/logos/gitLogo.png"
import LogoPy from "../assets/logos/pythonLogo.png"
import LogoJava from "../assets/logos/javaLogo.png"
import LogoSN from "../assets/logos/sn.png"
import LogoReact from "../assets/logos/reactLogo.png"
import LogoSql from "../assets/logos/sqlLogo.png"
import LogoWEB from "../assets/logos/web.png"
import LogoMongo from "../assets/logos/mongo.png"
import LogoUML from "../assets/logos/uml.png"
import LogoDev from "../assets/logos/dev.png"
import LogoVisual from "../assets/logos/visual.png"
import LogoNode from "../assets/logos/nodejs.png"

import LogoOffice from "../assets/logos/office.png"
import LogoNative from "../assets/logos/reactNative.png"

function skills () {
    return (
        
        <div className="boxSkills" id="skills">
          <div className="container">
            <div className="SeparadorSupDP"></div>
            <h2 class="Titulo2">Herramientas</h2>
            <div class="row">


                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">
                            <img class="logo" src={LogoPy}></img>
                                Python
                            </h5>
                            <p class="card-text"> Conocimientos medios</p>
                        
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                        <img class="logo" src={LogoJava}></img>
                            Java
                        
                        </h5>
                        <p class="card-text">Conocimientos medios, POO</p>
                        
                    </div>
                    </div>
                </div>
                <div class="col-md-4">
                        <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">
                                <img class="logo" src={LogoReact}></img>
                                ReactJS
                            </h5>
                            <p class="card-text">Conocimientos básicos para frontend</p>
                            
                        </div>
                        </div>
                </div>
                
            

                
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <img class="logo" src={LogoNative}></img>
                            React Native
                        </h5>
                        <p class="card-text">Conocimientos básicos trabajando con Expo</p>
                        
                    </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <img class="logo" src={LogoSql}></img>
                            SQL
                        </h5>
                        <p class="card-text">SQL Server - Conocimienos basicos</p>
                        
                    </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <img class="logo" src={LogoMongo}></img>
                            MongoDB                        
                        </h5>
                        <p class="card-text">Mongo Compass - Conocimientos basicos</p>
                        
                    </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <img class="logo" src={LogoNode}></img>
                            NodeJS                         
                        </h5>
                        <p class="card-text">Conocimientos basicos para backend</p>
                        
                    </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <img class="logo" src={LogoGit}></img>
                            Git                        
                        </h5>
                        <p class="card-text">HTML - JS - CSS Conocimientos basicos</p>
                        
                    </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <img class="logo" src={LogoOffice}></img>
                            Office                        
                        </h5>
                        <p class="card-text">HTML - JS - CSS Conocimientos basicos</p>
                        
                    </div>
                    </div>
                </div>

                

            </div>

            <div class="SeparadorSup"></div>

        </div>  
        </div>
    )
}

export default skills;