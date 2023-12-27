import React from 'react'
import "../layout/cssCompStyles.css"
import ZOO from "../assets/logos/zoo.png"

function experiencia(){
  return (
    <div className="degradado">
        <div className="container" id="exp">
            <div class="SeparadorSupDP"></div>

            <div>
                <h1 class="Titulo"> Experiencia Laboral </h1>
            </div>  

            <div class="SeparadorInt"></div>

            <div class="BoxExperiencia">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title2">
                                <img class="logo" src={ZOO}></img>
                                    Técnico de Mesa de Ayuda
                                </h6>
                                <a className="linkEmpresa" href="https://www.zoologic.com.ar/" target="_blank">Zoologic</a>
                                <h6 className="yearLaburo">2022</h6>
                                <p class="card-text">Tecnico de Mesa de ayuda en Zoologic. Se trabaja resolviendo los diferentes problemas que tienen los clientes de la empresa que usan el sistema Lince.</p>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                    
                </div>
            </div>

            <div class="SeparadorSup"></div>

        </div>
    
  )
}
export default experiencia
