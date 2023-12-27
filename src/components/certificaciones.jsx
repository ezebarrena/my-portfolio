function certificaciones(){
    return (
        <div className="container">
            <h2 class="ContenidoE"> Certificaciones </h2>

            <div class="SeparadorSup"></div>

            <div className="row">
                <div className="col-md-4">
                    <div class="card">
                        <img id="fotoCert" alt="dasd"/>
                        <div class="card-body">
                            <h3>4 Examenes IGCSE</h3>
                            <p>English language, ICT, Spanish language & Maths.</p>
                            <h5>Cambridge</h5>
                            <h6>2016</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <img id="fotoCert"/>
                        <div class="card-body">
                            <h3>Curso de Python "Exactas Programa"</h3>
                            <p>Curso de introduccion al lenguaje de programacion python.</p>
                            <h5>UBA</h5>
                            <h6>2019</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">  
                        <img id="fotoCert"/>   
                        <div class="card-body">
                            <h3>Curso Word y Excel del programa ABC</h3>
                            <p>Curso orientado al uso avanzado de las herramientas Word y Excel</p>
                            <h5>Accenture</h5>
                            <h6>2019</h6>
                        </div>
                    </div>
                </div>
                
            </div>

            <div class="SeparadorSupDP"></div>
        </div>
    )
}

export default certificaciones;