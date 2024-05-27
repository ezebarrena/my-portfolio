import nutri from '../assets/pictures/nutrifive.png'
import home from '../assets/pictures/mihome.png'

import "../layout/cssCompStyles.css"



function projects() {
    return (
        
        <div class="container" id="prj">
            <div className="row">
                <h1 class="Titulo"> Proyectos realizados </h1>
            </div>
            <div className="row">
                <div className="col-1"></div>    
                <div className="col-10" >
                    <div class="carousel">        
                        <div id="carouselExampleCaptions" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={nutri} class="d-block w-100" alt="..."/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h3>
                                            Aplicacion Mobile Nutrifive
                                        </h3>
                                        <p>Proyecto Universitario para Seminario de Integracion Profesional 1</p>
                                        <a href='https://github.com/Facundo-Marianelli/nutrifive-frontEnd' target="blank">Repositorio en GitHub</a>
                                        <p></p>
                                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7098365984746422273/" target="blank">Post linkedin con demo</a>
                                    
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={home} class="d-block w-100" alt="..."/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h3>
                                            Aplicacion Mobile Mi-Home
                                        </h3>
                                        <p>Proyecto Universitario para la materia Aplicaciones Distribuidas</p>
                                        <a href='https://github.com/ezebarrena/MiHome-AppMobile' target="blank">Repositorio en GitHub para el frontEnd</a>
                                        <p></p>
                                        <a href='https://github.com/ezebarrena/MiHome-Backend' target="blank">Repositorio en GitHub para el backend</a>
                                    </div>
                                </div>
                                
                            
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>  
                <div class="SeparadorInf"></div>
            </div>
            
              
        </div>
    )
}

export default projects;