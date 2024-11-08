import '../css/Home.css';
import { FaFileMedical } from "react-icons/fa6";
import vroLogo from '../resources/vro.png';
import { BiPlusMedical } from "react-icons/bi";
import { FaClinicMedical } from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";
import { FaHandHoldingMedical } from "react-icons/fa";


const Home = () => {
    return(
        <div className="home-container">
            <header className="header">
                <img src={vroLogo} alt="vro" className="logo" />
            </header>
            <div className="button-container">
                <button className="nav-button">
                <FaFileMedical />
                </button>
                <button className="nav-button">
                <FaHandHoldingMedical />
                </button>
                <button className="nav-button">
                    <BiPlusMedical />
                </button>
                <button className="nav-button">
                <FaClinicMedical />
                </button>
                <button className="nav-button">
                <RiProfileFill />
                </button>
            </div>
        </div>
    );
};

export default Home;
