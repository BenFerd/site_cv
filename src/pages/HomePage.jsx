import React from 'react';
import Img from "../assets/star.svg";

const HomePage = (props) => {
    return ( <>
        <div id="stars">
  <div id="stars1"></div>
  <div id="stars2"></div>
  <div id="stars3"></div>

  <div class="title-wrapper">
    <h1>Bienvenue !</h1>
    <h5><img src="assets/images/benCV.jpg" alt="" />Benjamin Ferdinand</h5>
    
  </div>
</div>
<div class="pdf">
  <div class="hexagon-wrapper">
    <div class="hexagon">
      <a
        class="btn__pdf"
        href="/ressources/CurriculumVitae_Ferdinand.pdf"
        title="CV.pdf"
        ><i class="far fa-file-pdf"></i
      ></a>
    </div>
  </div>
</div>
<div class="page-content">
  <div class="card" id="card1">
    <div class="content">
      <h2 class="title">
        Développeur <br /><br /><img
          src="/images/marker.svg"
          id="positionSvg"
        />
        Charleroi, BE
      </h2>
      <p class="copy">
        Développeur web front-end et <br />
        back-end
      </p>
    </div>
  </div>
  <div class="card" id="card2">
    <div class="content">
      <h2 class="title">Compétences</h2>
      <div class="copy">
        <table>
          <td>
            <tr>
              Html
            </tr>
            <tr>
              CSS
            </tr>
            <tr>
              Sass
            </tr>
            <tr>
              Javascript
            </tr>
            <tr>
              Angular
            </tr>
            <tr>
              React
            </tr>
          </td>
          <td>
            <tr>
              PHP
            </tr>
            <tr>
              Symfony
            </tr>
            <tr>
              Drupal
            </tr>
            <tr>
              Api Rest
            </tr>
            <tr>
              XML
            </tr>
            <tr>
              ...
            </tr>
          </td>
        </table>
      </div>
    </div>
  </div>
  <div class="card" id="card3">
    <div class="content">
      <h2 class="title">Formation</h2>
      <p class="copy">
        - Développement web @ TechnofuturTIC <br />
        <br />
        - Bachelier en gestion
      </p>
    </div>
  </div>
</div>
<div class="scene">
  <div class="card">
    <div class="card__face card__face--front"></div>
    <div class="card__face card__face--back"></div>
  </div>
</div>
</>
     );
}
 
export default HomePage;