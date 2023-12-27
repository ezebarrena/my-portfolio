import "../layout/cssCompStyles.css"


function estudios() {

    return(

        <div class="degradado" >

            <div className="container" id="est">

                <div class="SeparadorSupDP"></div>

                <div>
                    <h1 class="Titulo"> Estudios </h1>
                </div>  

                <div class="SeparadorSup"></div>

                <div class="BoxEstudios">
                    <div class="row">
                        <div class="col-md-6">
                            <h2 class="ContenidoEstudio">Colegio Riverside School</h2>
                            <h5>Educacion secundaria - Bachillerato Bilingüe</h5>
                            <p>2013 - 2018</p>
                        </div>
                        <div class="col-md-6">
                            <h2 class="ContenidoEstudio">Universidad Argentina de la Empresa</h2>
                            <h5>Ingeniera Informatica - Carrera de Grado</h5>
                            <p>2019 - actualidad</p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="SeparadorSupDP"></div>

        </div>

        
            
  );

}

export default estudios;