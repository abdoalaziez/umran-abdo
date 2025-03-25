import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer className="text-center py-12 bg-gray-900 text-white">
      <div className="flex justify-center space-x-4 mb-4">
        <a 
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-purple-500 transition-colors"
        >
          <GitHubIcon className="w-5 h-5" />
         
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-purple-500 transition-colors"
        >
          <LinkedInIcon className="w-5 h-5" />
        </a>
      </div>
      <p className="text-sm">
        A portfolio designed & built by{" "}
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-purple-400 hover:underline"
        >
           
          
          Omran Abdo Al Aziez
        </a>{" "}
        with 💜
      </p>
    </footer>
  );
}

export default Footer;
