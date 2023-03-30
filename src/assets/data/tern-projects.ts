import { Project } from '../../app/home/project';

export const PROJECTS: Project[] = [
  {
    stack: 'full-stack',
    headerImage: 'assets/img/limnotrons.png',
    title: 'Aquacosm Data Platform',
    excerpt: 'Aquacosms generen de hele dag data. Op dit platform word de data beschikbaar gemaakt.',
    text: '<p>Een aquacosm is een grote bak met water waarin gecontroleerd onderzoek naar het waterleven kan worden gedaan. Elke minuut word er een meeting gedaan van, bijvoorbeeld, de temperatuur, zuurstofgehalte of lichthoeveelheid in het water, dit zorgt voor een heleboel data.</p><p>Deze applicatie haalt de data near-real-time op (elk half uur) en visualiseert de data op het dashboard. Zo heb je altijd een overzicht van je experiment en je data. Ook kun je hier alle data die door de aangesloten aquacosms is gegenereerd inzien en downloaden.</p>',
    frameworks: {
      html: true,
      sass: true,
      angular: true,
      firebase: true
    },
    size: 'md',
    color: '#55B6D7',
    detailImage: 'assets/img/aquacosm-data_detail.png',
    url: 'https://aquacosm-data.web.app',
  },
  {
    stack: 'full-stack',
    headerImage: 'assets/img/future_for_nature.png',
    title: 'Future For Nature',
    excerpt: 'Een tool ter behoeve van het beoordelen van alle FFN award kandidaten.',
    text: '<p>Elk jaar worden er tussen de 150 en 250 kandidaten voorgedragen voor de FFN award. Deze applicatie is een tool voor zowel het FFN als het selectie commitee om het beoordelen van al deze kandidaten te vereenvoudigen,</p><p>Het bekijken en beoordelen van de kandidaten kan nu volledig digitaal en gaat met een druk op de knop naar het FFN.</p><p>Vanwege privacy gevoelige gegevens kan er geen screenshot van de applicatie zelf worden getoond.</p>',
    frameworks: {
      html: true,
      sass: true,
      angular: true,
      firebase: true
    },
    size: 'md',
    color: '#55B6D7',
    detailImage: 'assets/img/future_for_nature_detail.png'
  },

  {
    stack: 'full-stack',
    headerImage: 'assets/img/intoMyGarden.png',
    title: 'Into My Garden',
    excerpt: 'Digitaal tuinarchief, welke planten staan waar in je tuin en wat voor onderhoud hebben ze nodig?',
    text: '<p>Upload de plattegrond van je tuin en start met het \"planten\" van je tuin planten.</p>' +
      '<p>Naast het overzicht waar welke plant in je tuin staat kun je ook alle informatie over je planten kwijt en het onderhoud dat moet gebeuren (en wanneer).</p>' +
      '<p>Dit is een angular.io applicatie die gebruik maakt van firebase voor authenticatie, database, storage and hosting.</p>',
    frameworks: {
      html: true,
      sass: true,
      java: true,
      angular: true,
      firebase: true
    },
    size: 'md',
    color: '#55B6D7',
    detailImage: 'assets/img/intoMyGarden_detail.png',
    url: 'https://intomygarden.nl/',
  },
  {
    stack: 'full-stack',
    headerImage: 'assets/img/kuikenteller.jpg',
    title: 'Kuiken Teller',
    excerpt: 'Een PWA voor een citizens-science project om zoveel mogelijk waarnemingen van eendenkuikens te vergaren.',
    text: '<p>Deze applicatie is gemaakt om te onderzoeken of de achteruitgang van de wilde eend iets te maken heeft met de overleving van hun kuikens. Het project is begonnen in 2015 als een simpel webformulier en is in 2020 helemaal vernieuwd als Progressive Web Applicatie welke ook op de mobiele telefoon geïnstalleerd kan worden.</p><p>In totaal zijn er, via de applicatie, al meer dan 25000 waarnemingen ingevoerd.</p>',
    frameworks: {
      html: true,
      sass: true,
      angular: true,
      js: true,
      node: true,
    },
    size: 'lg',
    color: '#55B6D7',
    detailImage: 'assets/img/kuikenteller_detail.png',
    url: 'https://kuikenteller.org',
  },
  {
    stack: 'frontend',
    headerImage: 'assets/img/veldweekend.jpg',
    title: 'Veldweekend',
    excerpt: 'Een digitaal programmaboek voor een weekendje weg',
    text: '<p>Een oldskool website (html, css en js) om een digitaal programmaboekje te maken. Het maakt gebruik van alle mogelijkheden die het web bied. De wandelingen kunnen in detail bekeken worden in google maps. Het overzicht van de vogelsoorten in het gebied is natuurlijk niet compleet zonder geluid en de sudoku hoeft niet met de pen worden ingevuld.</p>',
    frameworks: {
      html: true,
      css: true,
      js: true,
    },
    size: 'sm',
    color: '#BED63A',
    detailLink: 'https://vanrabenswaaij.nl/veldweekend/',
    url: 'https://vanrabenswaaij.nl/veldweekend/',
    height: 500
  },
  {
    stack: 'frontend',
    headerImage: 'assets/img/header_voetreflex_nicole.jpg',
    title: 'Voetreflextherapie Nicole',
    excerpt: 'Website voor de voetreflextherapie praktijk van Nicole Nuijten',
    text: '<p>De responsive website van Nicole is volledige ontworpen en gebouwd door TernWebdesign en is een angular.io app, gehost in firebase en maakt gebruikt van firebase functions.</p>',
    frameworks: {
      html: true,
      css: true,
      angular: true,
      js: true,
    },
    size: 'md',
    color: '#BED63A',
    detailImage: 'assets/img/website_nicole.png',
    url: 'https://voetreflexzonetherapienicole.nl/'
  },
  {
    stack: 'frontend',
    headerImage: 'assets/img/biologie_in_het_werkveld.jpg',
    title: 'Biologie in het Werkveld',
    excerpt: 'Tool voor docenten van de biologie in het werkveld cursussen om les-content bij studenten te krijgen.',
    text: '<p>Deze website maakt gebruik van wordpress om docenten de mogelijkheid te bieden mededelingen te versturen, presentaties te delen of extra lescontent te verschaffen.</p><p>De basis van deze website zijn een aantal html, css en javascript templates die doormiddel van php in wordpress worden geladen.</p>',
    frameworks: {
      html: true,
      css: true,
      js: true,
      php: true,
      wordpress: true
    },
    size: 'md',
    color: '#BED63A',
    detailImage: 'assets/img/biologieInHetWerkveld_detail.png',
    url: 'http://biologieinhetwerkveld.nl/'
  },
  {
    stack: 'full-stack',
    headerImage: 'assets/img/tern.jpg',
    title: 'Tern Support Systeem',
    excerpt: 'Applicatie om mogelijke vragen of issues vanuit applicaties overzichtelijk te kunnen managen.',
    text: '<p>Om ondersteuning van applicaties makkelijker te maken is de support app ontwikkeld. De applicatie bestaat uit twee onderdelen.</p>' +
      '<p>Een library die elke angular applicatie kan gebruiken om het support systeem aan de kant van de klant te instaleren. Dit bevat een ticket-formulier om nieuwe vragen te stellen en, zodra het ticket is ingediend een basic chat systeem zodat er direct gecommuncieerd kan worden met de developers van Tern.</p>' +
      '<p>Deze library is direct aangesloten met het admin systeem waar alle tickets binnen komen en de developer bij Tern direct laat communiceren met de klant.</p>',
    frameworks: {
      html: true,
      css: true,
      firebase: true
    },
    size: 'md',
    color: '#55B6D7',
    detailImage: 'assets/img/ternSupportSystem_detail.png',
    height: 350
  },
  {
    stack: 'backend',
    headerImage: 'assets/img/brandganzen.jpg',
    title: 'Database API',
    excerpt: 'REST api om excel-sheets in een sql-database te laden',
    text: '<p>Het maken van REST api\'s om verschillende type excell sheets (25 jaar aan data van onderzoek aan brandganzen) te archiveren in een sql-database.</p>' +
      '<p>De gebruikers kunnen doormiddel van de verschillende api\'s verschillende soorten excell-bestanden uploaden. Er word tegelijkertijd gekeken of alle data voldoet aan de regels en eventuele schendingen worden gelogd.</p>' +
      '<p>Tevens is er een ui gemaakt om al deze informatie en handelingen te visualiseren.</p>',
    frameworks: {
      java: true,
      css: true,
      html: true
    },
    size: 'sm',
    color: '#76B542'
  }
];
