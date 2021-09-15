import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';
import './App.css';
import imagenes from './images/img';

function App() {
  return (
    <div class ="fondo">
      <section id="header">
      <nav class="navbar navbar-expand-lg">
       <div class="container-fluid margin-top">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href=""><b>Maestros</b></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href=""><b>Clases</b></a>
          </li>
            <a className="btn-contacto" href="#" target="_blank">Contacto</a>
        </ul>
      </div>
    </div>
    </nav>
   </section>
      <section id="home">
      <div class="container">
        <h1><b>Stradivarius</b></h1>
           <h2>Escuela de Musica</h2>
           </div>
      </section>
      
    
      <section id="clases">
      <h2><b>CLASES</b></h2>
      <table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col"><img src={imagenes.img1} alt="" width="100%" ></img></th>
      <th scope="col"><img src={imagenes.img2} alt="" width="100%" ></img></th>
      <th scope="col"><img src={imagenes.img3} alt="" width="100%" ></img></th>
      <th scope="col"><img src={imagenes.img4} alt="" width="100%" ></img></th>
      <th scope="col"><img src={imagenes.img5} alt="" width="100%" ></img></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row1">Guitarra</th>
      <td><b>Bateria</b></td>
      <td><b>Piano</b></td>
      <td><b>Violin</b></td>
      <td><b>Saxofon</b></td>
    </tr>
    <tr>
      <th><b>$1500</b></th>
      <td><b>$1000</b></td>
      <td><b>$2000</b></td>
      <td><b>$2000</b> </td>
      <td><b>$1500</b></td>
    </tr>
    <tr>
      <td><b>8 Clases individuales</b></td>
      <td><b>8 Clases individuales</b></td>
      <td><b>8 Clases individuales</b></td>
      <td><b>8 Clases individuales</b></td>
      <td><b>8 Clases individuales</b></td>
</tr>
<tr>
      <td><b>Horarios Flexibles</b></td>
      <td><b>Horarios Flexibles</b></td>
      <td><b>Horarios Flexibles</b></td>
      <td><b>Horarios Flexibles</b></td>
      <td><b>Horarios Flexibles</b></td>
      
    </tr>
  </tbody>
</table>
      </section>
      <section id="registro">
      
 <z><b>INSCRIBETE AHORA</b></z>
 <a><b>RECIBE UNA LECCION GRATIS</b></a>
<body>

<form action="#" target="" method="get" name="formDatosPersonales">

	<input type="text" name="texto" placeholder="Nombre" readonly></input>

	<input type="text" name="apellidos" id="apellidos" placeholder="Apellido"></input>

	<input type="email" name="email" id="email" placeholder="Email" required ></input>

	<input type ="text" name="asunto" id="asunto" placeholder="Telefono" maxlength="300"></input>

	<input type="submit" name="enviar" value="Registrate ahora"></input>
  
</form>
  
</body>
      </section>
    </div>
  );
}

export default App;
