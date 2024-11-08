import '../css/Home.css';
import vroLogo from '../resources/vro.png';

const Home = () => {
    return(
    <body>
          <div className="home-container">
      <header className="header">
      <img src={vroLogo} alt="vro" className="logo" />
      </header>
      <div className="button-container">
        <button className="hist">Medical History</button>
        <button className="appt">Appointments</button>
        <button className="symp">Log Symptoms</button>
        <button className="medics">Medics</button>
        <button className="Profile">Profile</button>
      </div>
    </div>
    </body>
      
    )
  };
  
  export default Home;