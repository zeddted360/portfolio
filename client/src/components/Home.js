import './css-files/home.css';
import './css-files/animation.css';
import profilePics from '../public/profile.jpg';
import { useState, useContext } from 'react';
import { MyContext } from '../context/myContext';
const Home = () => {


    // const contextData = useContext(MyContext);
    // const { age, name } = contextData;


    return (
        <div className="home">
            <div className="my-name">
                <h1>Azubuike </h1>
                <h1>Nwibo.</h1>
            <div className="profession">Civil Engineer and Web developer.</div>
            </div>
            <div className="my-image">
                <img src={profilePics} alt="" />
            </div>
            <div id='my-name' className="my-namee">
                <h2>My Name</h2>
                <p>
                   <mark> Nwibo Azubuike Andrew</mark> aka Zedd, Zedd is a nickname given to me 
                    by my course mates during our undergraduate studies , which meant 
                    First wizard.
                </p>
                <p>
                    This name was actually given because of my academics excellence
                    and my skills and passion in Engineering mathematics and calculus
                    well thats for them, for me zedd is a model,zedd is a common wealth.
                </p>
                <p>
                    Do well to check the about me page to see more about zedd
                    especially my skills,education and work experience.
                </p>
            </div>
            <div className="wrapper">
                <div className="static-txt">I'm a</div>
                <ul className="dynamic-txt">
                    <li><span>YouTuber</span></li>
                    <li><span>Designer</span></li>
                    <li><span>Developer</span></li>
                    <li><span>Freelancer</span></li>
                </ul>
            </div>
        </div>
      );
}
 
export default Home;