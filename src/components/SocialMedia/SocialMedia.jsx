import React from 'react';
import './SocialMedia.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Tooltip } from '@mui/material';

const SocialMedia = () => {
  const redirectToLinkedIn = () => {
    const url = 'https://www.linkedin.com/in/aditya017/';
    window.open(url, '_blank');
  };

  /*  const redirectToInstagram = () => {
    const url = '';
    window.open(url, '_blank');
  };

  const redirectToTwitter = () => {
    const url = '';
    window.open(url, '_blank');
  };*/

  const redirectToGitHub = () => {
    const url = 'https://github.com/aditya017';
    window.open(url, '_blank');
  };

  return (
    <div className="socialMedia" id="socialLife">
      <Tooltip title="Linkedin" arrow>
        <LinkedInIcon
          onClick={redirectToLinkedIn}
          sx={{
            mr: 1,
            ml: 3,
            mt: 3,
            fontSize: '40px',
            color: 'white',
            cursor: 'pointer',
          }}
        />
      </Tooltip>
      {/*<Tooltip title="Instagram" arrow>
        <InstagramIcon
          onClick={redirectToInstagram}
          sx={{
            mr: 1,
            ml: 3,
            mt: 3,
            fontSize: '40px',
            color: 'white',
            cursor: 'pointer',
          }}
        />
      </Tooltip>
      <Tooltip title="Twitter" arrow>
        <TwitterIcon
          onClick={redirectToTwitter}
          sx={{
            mr: 1,
            ml: 3,
            mt: 3,
            fontSize: '40px',
            color: 'white',
            cursor: 'pointer',
          }}
        />
      </Tooltip>*/}
      <Tooltip title="GitHub" arrow>
        <GitHubIcon
          onClick={redirectToGitHub}
          sx={{
            mr: 1,
            ml: 3,
            mt: 3,
            fontSize: '40px',
            color: 'white',
            cursor: 'pointer',
          }}
        />
      </Tooltip>
    </div>
  );
};

export default SocialMedia;
