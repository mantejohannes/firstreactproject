import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialLinks() {
  return (
    <div className="social-links">

      <a href="https://web.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="https://github.com"><FontAwesomeIcon icon={faGithub} /></a>
      <a href="https://www.linkedin.com/in/johannes-mokibelo-mante-b74949124/"><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
  );
}

export default SocialLinks;
