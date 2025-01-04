
import img_site_de_icones from "../img/site_icones.png"
import dashboard from "../img/dashboard_em_vue.png"
import jogo_de_poker from "../img/poker.png"
import adivinhacao from "../img/image_jogo.png"


const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>

      <h3>Site de icones</h3>
      <p>
      este site é um banco de imagens focado em fornecer ícones gratuitos
       para websites no formato SVG, um dos melhores formatos para ícones
        devido à sua escalabilidade e qualidade. O projeto tem como objetivo
         facilitar o acesso a ícones de alta qualidade para desenvolvedores
          e designers, permitindo o download gratuito dos arquivos em SVG
      </p>
      <a href="https://icones-em-svg-gratis.onrender.com/" target="_blank"  >link para o website</a>

      <img src={img_site_de_icones} alt="site_de_icones" />


      <h3>Dashboard</h3>
      <p>
      Uma interface gráfica que exibe informações importantes
       de maneira visual e organizada, permitindo o monitoramento,
        a análise e a tomada de decisões rápidas, desenvolvida utilizando
         a tecnologia Vue.js. 
      </p>
      <a href="https://github.com/CarlosEduardocaldas6432/dashboard_em_vuejs" target="_blank"  >link para o GitHub</a>

      <img src={dashboard} alt="dashboard_em_vue" />


      <h3>Jogo de Poker</h3>
      <p>
      Este projeto é um site de jogo de poker online desenvolvido com HTML,
       CSS e React.js. Ele combina uma interface elegante e responsiva com 
       funcionalidades dinâmicas, proporcionando uma experiência envolvente para os jogadores. 
      </p>
      <a href="https://github.com/CarlosEduardocaldas6432/jogo_de_poker" target="_blank"  >link para o GitHub</a>

      <img src={jogo_de_poker} alt="jogo_de_poker" />




      <h3>Adivinhação Natalina</h3>
      <p>
      Um encantador mini-game de adivinhação com o tema natalino, 
      onde o jogador é desafiado a descobrir a palavra secreta. 
      Uma experiência divertida e imersiva para celebrar o espírito do Natal!
      </p>
      <a href="https://adivinhacao-natalina.onrender.com/" target="_blank"  >link para o website</a>

      <img src={adivinhacao} alt="adivinhacao_natalina" />

    </section>
  );
};

export default ProjectsContainer;
