
import React from 'react';

import Navbar from './components/NavBar';
import NameComp from './components/NameComp';
import SocialLinks from './components/SocialLinks';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SideLinks from './components/SideLinks';
import PhotoDisplay from './components/PhotoDisplay.js';
import WhyMeSection from './components/WhyMeSection';
import LatestWork from './components/LatestWork';
import styles from './App.css';




function App() {
  const navLinks = [
    { label: 'Portfolio', url: '#' },
    { label: 'About Me', url: 'https://www.linkedin.com/in/johannes-mokibelo-mante-b74949124/edit/forms/summary/new/?profileFormEntryPoint=PROFILE_SECTION' },
    { label: 'My Blog', url: 'https://www.facebook.com/profile.php?id=100064057537194' },
    { label: 'Reviews', url: 'https://www.facebook.com/SFK-Graphics-115473156826129/photos/pcb.157674709272640/157674625939315/' },
    { label: 'Contact Me', url: 'https://www.linkedin.com/in/johannes-mokibelo-mante-b74949124/overlay/contact-info/' },
  ];

  

  const socialIcons = [
  
    { icon: faFacebook, url: 'https://www.facebook.com/johannessefoka.mante/' },
    { icon: faGithub, url: 'https://github.com/mantejohannes' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/johannes-mokibelo-mante-b74949124/' },
  ];

  const sideLinks = [
    { label: 'my process', url: 'https://github.com/mantejohannes' },
    { label: 'client reviews', url: '' },
    { label: 'download cv', url: 'https://drive.google.com/file/d/1EAOu6CwtBc3P0wb8BGk3-TCD9iOsz3cW/view?usp=sharing' },


  ];
  const images = [

    './computer.jpg',
    './code.jpg',
    './work.jpg'
  ];

  const photoUrl = './mypic.jpg';
  const caption = '';
 
  



  return (
    <div class="container-app">
      <div class="container-header">
        <NameComp />
        <Navbar links={navLinks} />
        <SocialLinks socialIcons={socialIcons} />
      </div>
      <div class="container-body">
        <SideLinks links={sideLinks} />
        <h1 class="name-head" className={styles.title}>Johannes.M</h1>
        <PhotoDisplay photoUrl={photoUrl} caption={caption} />
        <div>
          <WhyMeSection />
          <LatestWork images={images} />
        </div>
      </div>
    

    </div>

  

  );
}

export default App;
