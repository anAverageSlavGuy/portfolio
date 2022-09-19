import { NavLink } from 'react-router-dom';
import CvPdf from './Yevgeniy-Shavlay-CV.pdf';

function Cv() {
    return (
        <div className="work">
            <div className="works-title" style={{ textAlign: "center", lineHeight: "12vw" }}>CURRICULUM VITAE</div>
            <div className="action-buttons" style={{ width: "100%"}}>
                <NavLink to="/"><button style={{ }}>RETURN TO HOME</button></NavLink>
                <NavLink to="/work"><button style={{ }}>CHECK MY WORK</button></NavLink>
            </div>
            <iframe src={CvPdf + "#view=Fit"} style={{marginTop: "7.5vw", width: "100%", height: "100vh"}}></iframe>
        </div>
    );
}

export default Cv;