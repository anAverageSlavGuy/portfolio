import { NavLink } from 'react-router-dom';
import CvPdf from './Yevgeniy-Shavlay-CV.pdf';
import './Cv.css';

function Cv() {
    return (
        <div className="curriculum">
            <div className="curriculum-title">CURRICULUM VITAE</div>
            <div className="action-buttons" style={{ width: "100%", justifyContent: "center", flexDirection: "row", columnGap: "2.15vw"}}>
                <NavLink to="/"><button style={{ width: "18vw" }}>RETURN TO HOME</button></NavLink>
                <NavLink to="/work"><button style={{ width: "18vw" }}>CHECK MY WORK</button></NavLink>
            </div>
            <iframe src={CvPdf + "#view=Fit"} style={{margin: "3.25vh 0 0 0", width: "100%", height: "100vh"}}></iframe>
        </div>
    );
}

export default Cv;