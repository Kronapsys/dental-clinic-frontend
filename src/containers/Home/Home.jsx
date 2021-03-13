import React from "react";
import "./Home.css";
import Header from '../../components/Header/Header';
import NavBar from '../../components/Navbar/NavBar';

const Home = () => {
  return (
    <div>
    <Header></Header>
    <NavBar></NavBar>
    <div className="home">
      <div className="homeHorario">
        <label className="lblHorario">HORARIO:</label> <br />
        <label className="lblDias">L: 09:00 a 18:00</label>
        <label className="lblDias">M: 09:00 a 18:00</label>
        <label className="lblDias">X: 09:00 a 18:00</label>
        <label className="lblDias">J: 09:00 a 18:00</label>
        <label className="lblDias">V: 09:00 a 14:00</label>
        <label className="lblDias">S: 10:00 a 13:00</label>
      </div>

      <div className="homeServicios">
        <div className="homeServicios1">
          <div className="homeServicios1Izq">· Implantología</div>
          <div className="homeServicios1Der">
            Implantes de carga inmediata <br/>
            Puente dental sobre implantes <br/>
            Implante dental unitario <br/>

          </div>
        </div>

        <div className="homeServicios2">
          <div className="homeServicios2Izq">· Prótesis dentales</div>
          <div className="homeServicios2Der">
            Prótesis dental fija sobre implantes <br/>
            Limpieza de prótesis dental <br/>
            Prótesis dental fija <br/>
            
          </div>
        </div>

        <div className="homeServicios3">
          <div className="homeServicios3Izq">· Ortodoncia</div>
          <div className="homeServicios3Der">
            Ortodoncia invisible <br/>
            Ortodoncia infantil <br/>
            Brackets <br/>
          </div>
        </div>

        <div className="homeServicios4">
          <div className="homeServicios4Izq">· Odontología</div>
          <div className="homeServicios4Der">
            Test genético bacteriológico periodontal <br/>
            Periodoncia y Endodoncia <br/>
            Antirronquidos <br/>
            Halitosis <br/>
            Caries <br/>
            
            
            
          </div>
        </div>

        <div className="homeServicios5">
          <div className="homeServicios5Izq">· Estética dental</div>
          <div className="homeServicios5Der">
            Limpieza dental avanzada <br/>
            Blanqueamiento dental <br/>
            Carillas dentales <br/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
