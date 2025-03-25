import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import exn from "../assets/exn.jpg";
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="about-section flex flex-col md:flex-row items-center gap-10 w-full max-w-7xl">
        {/* Image Section */}
        <div className="image-wrapper">
          <img
            src={exn}
            alt="Avatar"
            className="w-40 md:w-52 rounded-full border-4 border-purple-600 shadow-lg"
          />
        </div>
        {/* Content Section */}
        <div className="content text-left space-y-4">
          {/* Social Icons */}
          <div className="flex gap-4 text-purple-400">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <GitHubIcon className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <LinkedInIcon className="w-7 h-7" />
            </a>
          </div>

          {/* Personal Information */}
          <h1 className="text-1xl  font-bold ">Omran Abdo </h1>
          <p className="text-xl">Full Stack Developer</p>

          {/* Mobile Social Icons */}
          <div className="mobile_social_icons flex gap-4 mt-4 md:hidden">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <GitHubIcon className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <LinkedInIcon className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
