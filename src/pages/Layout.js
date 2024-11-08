import { Outlet, Link } from "react-router-dom";
import '../css/Layout.css';
import { FaFileMedical } from "react-icons/fa6";
import { BiPlusMedical } from "react-icons/bi";
import { FaClinicMedical } from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";
import { FaHandHoldingMedical } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import caresync from '../resources/caresync.png'


const Layout = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className="home-container">
            <header></header>
            <img src={caresync} alt="caresync" className="logo" onClick={() => navigate('/Home')}/>
            <Outlet />
            <div className="button-container">
                <button className="nav-button" onClick={() => navigate('/Medical_History')}>
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
    </>
  )
};

export default Layout;