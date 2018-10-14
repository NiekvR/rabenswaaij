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
    text: '<p>Een website gebouwd om op een mobile device te gebruiken.</p>' + 
    '<p>In dit project vervangt de website het papiere programmaboekje van het evenement.' +
    'Het maakt gebruik van alle mogelijkheden die dit bied. De wandelingen kunnen in detail bekeken worden' +
    'in google maps, een overzicht van mogenlijk vogelsoorten is natuurlijk niet compleet zonder geluid en ' +
    'de sudoku hoeft niet met de pen worden ingevuld!</p>' +
    'Deze website is nog oldskool: html, css en javascript.',
    frameworks: {
      html: true,
      css: true,
      js: true,
    },
    size: 'sm',
    color: '#76B542',
    detailImage: 'assets/img/website-veldweekend.png',
    url: 'http://www.ternwebdesign.nl/veldweekend/'
  },
  {
    stack: 'frontend / mobile app',
    headerImage: 'assets/img/kuiken_teller.jpeg',
    headerPosition: '-496px',
    title: 'Kuiken Teller',
    excerpt: 'Een website en mobiele applicatie voor een citizens-science project om zoveel mogelijk waarnemingen van eendenkuikens te vergaren.',
    text: '<p>Om te onderzoeken wat eendenkuikensverleving hiermee te maken heeft' +
    'is dit project bedacht. Dit is begonnen met een formulier waarmee je je eendenkuiken waarneming kon versturen: je locatie geef ' +
    'je in via google maps en in geval van twijfel kun je zelfs een foto uploaden.</p>' +
    '<p>Na het succes van het formulier is dit uitgebreid met een app voor Android en iOS om het de gebruiker nog makkelijker te ' +
    'maken een waarneming in te sturen.',
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
    color: '#55B6D7',
    detailImage: 'assets/img/app-store-kuiken-teller.png',
    url: 'http://www.erikkleyheeg.nl/eendenkuikens'
  },
  {
    stack: 'frontend',
    headerImage: 'assets/img/biologie_in_het_werkveld.jpg',
    title: 'Biologie in het Werkveld',
    excerpt: 'Tool voor docenten van de biologie in het werkveld cursessen om lescontent bij studenten te krijgen.',
    text: '<p>Deze website maakt gebruik van wordpress om docenten de mogelijkheid te bieden mededelingen te ' +
    ' versturen, presntaties te delen of extra lescontent te verschaffen.</p>' +
    'De basis van deze website zijn een aantal html, css en javascript templates die doormiddel van php in wordpress worden geladen.</p>',
    frameworks: {
      html: true,
      css: true,
      js: true,
      php: true,
      wordpress: true
    },
    size: 'md',
    color: '#BED63A',
    detailImage: 'assets/img/website-biologie-in-het-werkveld.png',
    url: 'http://biologieinhetwerkveld.org'
  },
  {
    stack: 'frontend',
    headerImage: 'assets/img/natuurfotografie.jpg',
    title: 'TERN Natuurfotografie',
    excerpt: 'Persoonlijk foto-archief',
    text: '<p>Ik en mijn vrouw maken zelf graag foto\'s en dit is ons digitale archief</p>' +
    '<p>Dit is een angularjs applicatie</p>',
    frameworks: {
      html: true,
      css: true,
      js: true,
      angular: true
    },
    size: 'sm',
    color: '#76B542',
    detailImage: 'assets/img/website-nr-fotografie.png',
    url: 'http://www.ternwebdesign.nl/#/nrnatuurfotografie/'
  }
];
