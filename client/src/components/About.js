import { Link } from 'react-router-dom';
import './css-files/about.css'
import providence from '../public/prepute.jpg';
import kanny from '../public/kanny.jpg';
const About = () => {
    return ( 
        <div style={{
            backgroundColor:"#21222a"
        }} className="about">
            <div className="my-skills">
                <h2>My Skills</h2>
                <div className="Structural-design">
                    <h4>Structural Design</h4>
                    <div className="st-bar"></div>
                </div>
                <div className="web-development">
                <h4>Web Development</h4>
                    <div className="wd-bar"></div>
                </div>
                <div className="communication-skill">
                <h4>Communication Skills</h4>
                    <div className="cm-bar"></div>
                </div>

            </div>
            <div className="projects">
                <strong>3+</strong>
                <p>Partners</p>
                <strong>4+</strong>
                <p>Projects Done</p>
                <strong>4+</strong>
                <p>Happy Clients</p>
            </div>
            <Link to="/download/resume" className="download-cv">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
                Download Resume
                </Link>
                
        <div className="pricing">
        <h2>My Price</h2>
            <div className="my-price">
                <div className="basic-header">Basic</div>
                <ul>
                    <li>Structural Design</li>
                    <li>Web Development</li>
                    <li>Mail Support</li>
                    <li>Site Supervision</li>
                </ul>
                <span>$ 350</span>
            </div>
        </div>
        <div className="pricing pro">
            <div  style={{
            marginTop: window.innerWidth > 768 ? "1.8rem" :"1.7rem",
            
        }} className="my-price">
                <div className="basic-header">Pro</div>
                <ul>
                    <li>Structural Design</li>
                    <li>Web Development</li>
                    <li>Mail Support</li>
                    <li>Site Supervision</li>
                </ul>
                <span>$ 800</span>
            </div>
        </div>
            <div className="my-reputation">
                <h2 style={{
                    display:"inline-block",
                    width:"fit-content",
                    padding:".5rem"
            }}>My Reputation</h2>
                <div className="p">
                    <div className="pwrite-up">
                   <img src={providence} alt="provi imag"/>
                       <p>
                        Osuji Providence. CEO at Providence Stores<br/>
                        Zedd Saved us from Structural Design
                       </p> 

                        </div>
                </div>
                <div className="p">
                <div  className="pwrite-up">
                <img src={kanny} alt="provi imag"/>
                       <p>
                       Azubuike Nwibo, I have known him for more than three years,
                       and I've been able to work with him on some projects, during
                       this period.
                       I can attest that he's nothing short of deligent, competent
                       and coordinated in his work.
                       He's a peace setter and a goal getter as well, entrusting him 
                       with your job/project will not leave you in regret.
                       </p>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;