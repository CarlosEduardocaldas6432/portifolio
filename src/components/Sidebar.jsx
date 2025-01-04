import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";
import curriculo from "../Profile.pdf";

import Avatar from "../img/foto_de_perfil.png";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="eduardo caldas" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href={curriculo}  target="_blank" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
