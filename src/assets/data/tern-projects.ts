import { Project } from '../../app/home/project';

export const PROJECTS: Project[] = [
  {
    stack: 'frontend',
    headerImage: 'assets/img/header_voetreflex_nicole.jpg',
    title: 'Voetreflextherapie Nicole',
    excerpt: 'Website voor de voetreflextherapie praktijk van Nicole Nuijten',
    text: '<p>De responsive website van Nicole bestaat uit een aantal statische pagina\'s ' + 
    ', een simpel contact formulier wat resulteerd in een mail naar Nicole en een google maps ' +
    'implementatie voor een routebeschrijving.</p> <p>De website is een angular 5 app, gehost ' +
    ' in firebase en maakt gebruikt van firebase functions.</p>',
    frameworks: {
      html: true,
      css: true,
      angular: true,
      js: true,
    },
    size: 'lg',
    color: '#55B6D7',
    detailImage: 'assets/img/website_nicole.png',
    url: 'https://voetreflexzonetherapienicole.firebaseapp.com/'
  },
  {
    stack: 'frontend',
    headerImage: 'assets/img/veldweekend.jpg',
    title: 'Veldweekend',
    excerpt: 'Een digitaal program- maboek voor een lang weekend weg',
    text: '<p>De responsive website van Nicole bestaat uit een aantal statische pagina\'s ' + 
    ', een simpel contact formulier wat resulteerd in een mail naar Nicole en een google maps ' +
    'implementatie voor een routebeschrijving.</p> <p>De website is een angular 5 app, gehost ' +
    ' in firebase en maakt gebruikt van firebase functions.</p>',
    frameworks: {
      html: true,
      css: true,
      js: true,
    },
    size: 'sm',
    color: '#76B542',

    url: 'http://www.ternwebdesign.nl/veldweekend/'
  },
  {
    stack: 'frontend / mobile app',
    headerImage: 'assets/img/kuiken_teller.jpeg',
    headerPosition: '-496px',
    title: 'Kuiken Teller',
    excerpt: '',
    text: '',
    frameworks: {
      html: true,
      sass: true,
      angular: true,
      js: true,
      node: true,
      ios: true,
      android: true,
    },
    size: 'lg',
    color: '#55B6D7'
  },
  {
    stack: 'frontend',
    headerImage: 'assets/img/biologie_in_het_werkveld.jpg',
    title: 'Biologie in het Werkveld',
    excerpt: '',
    text: '',
    frameworks: {
      html: true,
      css: true,
      js: true,
      php: true,
      wordpress: true
    },
    size: 'md',
    color: '#BED63A'
  },
  {
    stack: 'frontend',
    headerImage: 'assets/img/natuurfotografie.jpg',
    title: 'TERN Natuurfotografie',
    excerpt: '',
    text: '',
    frameworks: {
      html: true,
      css: true,
      js: true,
      angular: true
    },
    size: 'md',
    color: '#76B542'
  }
];
