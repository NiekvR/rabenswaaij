import { Project } from '../../app/home/project';

export const PROJECTS: Project[] = [
  {
    stack: 'frontend',
    headerImage: 'assets/img/header_voetreflex_nicole.jpg',
    title: 'Voetreflextherapie Nicole',
    excerpt: 'Website voor de voetreflextherapie praktijk van Nicole Nuijten',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    stack: 'full-stack',
    headerImage: 'assets/img/into_the_garden.png',
    title: 'Into The Garden',
    excerpt: '',
    text: '',
    frameworks: {
      html: true,
      css: true,
      java: true,
    },
    size: 'sm',
    color: '#BED63A'
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
    headerImage: 'assets/img/veldweekend.jpg',
    title: 'Veldweekend',
    excerpt: '',
    text: '',
    frameworks: {
      html: true,
      css: true,
      js: true,
    },
    size: 'sm',
    color: '#76B542'
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
