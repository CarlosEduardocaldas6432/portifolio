import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, url:"https://www.linkedin.com/in/carlos-eduardo-caldas-martins-a3175130a/" },
  { name: "github", icon: <FaGithub />, url:"https://github.com/CarlosEduardocaldas6432" },
  { name: "instagram", icon: <FaInstagram /> ,url:"https://www.instagram.com/mataporco_design/"},
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.url} className="social-btn"  target="_blank" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
