import { NavLink } from 'react-router-dom';
import './Work.css';
import Netflix from './img/netflix.png';
import WeddingInvitation from './img/wedding-invitation.png';
import Fomo from './img/fomo.png';
import Jasmin from './img/jasmin.png';
import Spotify from './img/spotify.png';


function Work() {
  return (
    <div className="work">
      <div className="works-title">WORK</div>
      <div className="action-buttons" style={{ width: "100%", justifyContent: "center", flexDirection: "row", columnGap: "2.15vw"}}>
        <NavLink to="/"><button style={{ width: "18vw" }}>RETURN TO HOME</button></NavLink>
        <NavLink to="/cv"><button style={{ width: "18vw" }}>CHECK MY CV</button></NavLink>
      </div>
      <div className="works">
        <div className="work-container">
          <div className="work-header">NETFLIX REACT CLONE</div>
          <div className="work-body">
            <img src={Netflix} />
            <div className="details">
              Netflix clone made with create-react-app.
              Backend login is built with JWT and MongoDB to store users
            </div>
            <div className="details-actions">
              <a href="https://github.com/anAverageSlavGuy/netflix-react-clone" target="_blank"><button>SOURCE</button></a>
            </div>
          </div>
        </div>
        <div className="work-container">
          <div className="work-header">WEDDING INVITATION</div>
          <div className="work-body">
            <img src={WeddingInvitation} />
            <div className="details">
              An alternative way to send invitations to your wedding (or any other celebration) without killing the trees.
              In this case it was for my wedding ;)
            </div>
            <div className="details-actions">
              <a href="https://github.com/anAverageSlavGuy/wedding-invitation" target="_blank"><button>SOURCE</button></a>
              <a href="https://yev-wedding-invitation.netlify.app/" target="_blank"><button>DEMO</button></a>
            </div>
          </div>
        </div>
        <div className="work-container">
          <div className="work-header">F.O.M.O ( GRADUATION THESIS )</div>
          <div className="work-body">
            <img src={Fomo} />
            <div className="details">
              Interactive website (made with HTML, CSS, JS) developed in collaboration with a graphic design student (UI)
              for her degree thesis.
            </div>
            <div className="details-actions">
              <a href="https://github.com/anAverageSlavGuy/fomo" target="_blank"><button>SOURCE</button></a>
              <a href="https://anaverageslavguy.github.io/fomo/" target="_blank"><button>DEMO</button></a>
            </div>
          </div>
        </div>
        <div className="work-container">
          <div className="work-header">JASMIN ( BY NAGIOS )</div>
          <div className="work-body">
            <img src={Jasmin} />
            <div className="details">
              Collaborated in development of webapp built with PHP, JS, HTML, CSS for monitoring hosts and services
              of multiple Nagios Core servers in real time.
            </div>
            <div className="details-actions">
              <a href="https://github.com/CodingPeaks/jasmin" target="_blank"><button>SOURCE</button></a>
            </div>
          </div>
        </div>
        <div className="work-container">
          <div className="work-header">SPOTIFY REACT CLONE</div>
          <div className="work-body">
            <img src={Spotify} />
            <div className="details">
              Spotify clone made with create-react-app and Tailwind css framework
            </div>
            <div className="details-actions">
              <a href="https://github.com/anAverageSlavGuy/spotify-react-clone" target="_blank"><button>SOURCE</button></a>
              <a href="https://mellifluous-custard-316738.netlify.app" target="_blank"><button>DEMO</button></a>       
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Work;