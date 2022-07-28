import { NavLink } from 'react-router-dom';
import CvPdf from './Yevgeniy-Shavlay-CV.pdf';

function Cv() {
    return (
        <div className="work">
            <div className="works-title">CURRICULUM VITAE</div>
            <div className="action-buttons" style={{ flexDirection: "row", columnGap: "1.5vw" }}>
                <NavLink to="/"><button style={{ width: "20.75vw" }}>RETURN TO HOME</button></NavLink>
                <NavLink to="/work"><button style={{ width: "20.75vw" }}>CHECK MY WORK</button></NavLink>
            </div>
            <iframe src={CvPdf + "#view=Fit"} style={{marginTop: "3.25vh", width: "73%", height: "100vh"}}></iframe>
        </div>
    );
}

export default Cv;