import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { grey } from '@mui/material/colors';

function IconBox() {
  return (
    <div className='icon-box'>
      <a href="https://www.facebook.com/chang.jie.79/">
        <FacebookIcon sx={{fontSize: 50, color: grey[500], cursor: 'pointer'}}/>
      </a>
      <a href="https://www.instagram.com/tansohchang/">
        <InstagramIcon sx={{fontSize: 50, color: grey[500], cursor: 'pointer'}}/>
      </a>
      <a href="https://www.linkedin.com/in/chang-jie-tan/">
        <LinkedInIcon sx={{fontSize: 50, color: grey[500], cursor: 'pointer'}}/>
      </a>
      <a href="https://github.com/Changjie96">
        <GitHubIcon sx={{fontSize: 50, color: grey[500], cursor: 'pointer'}}/>
      </a>
    </div>
)
}

export default IconBox
