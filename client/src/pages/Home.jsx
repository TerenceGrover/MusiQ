import './styles/Home.css'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer';
import { useAuth0 } from "@auth0/auth0-react";


const Home = () => {

  const {user, isAuthenticated} = useAuth0();

  return (
    <div id="home-wrapper">
      <div id="top-wrapper">
        <h1 id='top-header'>Welcome to <span className="musiq">MusiQ</span></h1>
        {!isAuthenticated 
        ?
        <Link to="/login" class='login'>Get Started</Link> 
        : <div id='logged'>
            <span id='hey-user'>Hey, {user.given_name}</span>
            <Link to='/owner' className="nologin">Create a Party?</Link>
          </div>
        }
      </div>
        <svg id='svg-top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#52B69A" fill-opacity="1" d="M0,128L40,128C80,128,160,128,240,112C320,96,400,64,480,48C560,32,640,32,720,58.7C800,85,880,139,960,154.7C1040,171,1120,149,1200,128C1280,107,1360,85,1400,74.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      <div id="section-1">
         <div id="section-1-left">
        <h2 id='section-1-header'>Create the <span className="perfect">perfect</span> queue for your party</h2>
        <span id='section-1-subheader'>With only a few clicks, set up a collective Spotify queue for your party where everyone can participate!</span>
         </div>
        <img src="" alt="User-view queue" />
      </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#52B69A" fill-opacity="1" d="M0,128L40,128C80,128,160,128,240,112C320,96,400,64,480,48C560,32,640,32,720,58.7C800,85,880,139,960,154.7C1040,171,1120,149,1200,128C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <div id="section-2">
        <div id="wrapper-section-2">
          <span className='points-section-2'>Connect through Spotify</span>
          <span className='down-arrow'>&#8595;</span>
          <span className='points-section-2'>Create your party</span>
          <span className='down-arrow'>&#8595;</span>
          <span className='points-section-2'>Set some ground rules</span>
          <span className='down-arrow'>&#8595;</span>
          <span className='points-section-2'>Enjoy great MusiQ</span>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default Home;