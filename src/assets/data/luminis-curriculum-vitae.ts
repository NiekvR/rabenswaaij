import { CurrciculumVitae } from '../../app/luminis/curriculum-vitae';

export const CURRICULUMVITAE: CurrciculumVitae = {
  name: 'Niek van Rabenswaaij',
  personalia: {
    function: 'Software engineer',
    city: 'Doorwerth',
    birthDate: '12 november 1986',
    nationality: 'Nederlands',
    languages: [
      'Nederlands',
      'Engels'
    ]
  },
  education: [
    {
      name: 'Master Environmental Biology, Utrecht Universiteit',
      startYear: '2010',
      endYear: '2012'
    },
    {
      name: 'Bachelor Biologie, Utrecht Universiteit',
      startYear: '2005',
      endYear: '2010'
    }
  ],
  roles: [
    {
      name: 'Software engineer',
      skill: 4
    }
  ],
  programmingLanguages: [
    {
      name: 'Java',
      skill: 2
    },
    {
      name: 'HTML',
      skill: 4
    },
    {
      name: 'CSS',
      skill: 4
    },
    {
      name: 'Javascript',
      skill: 4
    }
  ],
  methods: [
    {
      name: 'Scrum',
      skill: 4
    },
    {
      name: 'DevOps',
      skill: 1
    },
    {
      name: 'Object Oriented Design',
      skill: 2
    }
  ],
  frameworks: {
    backend: [
      {
        name: 'Groovy',
        skill: 2
      },
      {
        name: 'Grails',
        skill: 4
      },
      {
        name: 'SQL',
        skill: 4
      }
    ],
    frontend: [
      {
        name: 'Angular',
        skill: 4
      },
      {
        name: 'Angularjs',
        skill: 3
      },
      {
        name: 'NodeJS',
        skill: 3
      }
    ],
    continuousIntegration: [
      {
        name: 'Jenkins',
        skill: 2
      },
      {
        name: 'Tomcat',
        skill: 4
      }
    ],
    versionControl: [
      {
        name: 'Git',
        skill: 4
      },
      {
        name: 'NPM',
        skill: 4
      }
    ]
  },
  profielschets: [
    'Niek is een proactieve Software Engineer die graag wordt uitgedaagd door zijn werk. Hij is een doorzetter, ook onder stressvolle situaties. Hij werkt graag in teamverband en is niet bang daarbij de leiding te nemen. Niek is creatief en denkt “out-of-the-box”. Dit helpt hem bij het vinden van passende oplossingen.',
    'De afgelopen jaren heeft Niek veel ervaring opgedaan op het gebied van zowel front-end als back-end ontwikkelen van webapplicaties. Als Java Developer heeft hij gewerkt aan verschillende projecten: bij het CIZ heeft hij in grotere scrum-teams geleerd om samen zorg te dragen voor verschillende applicaties, terwijl hij bij Huuskes zelfstandig applicaties verbeterd en uitgebreid heeft. Ook heeft Niek veel ervaring met het ontwikkelen van front-end applicaties door het meewerken aan verschillende angular applicaties.',
    'Naast het ontwikkelen van software is Niek ook als tester betrokken geweest bij het waarborgen van de kwaliteit van de applicaties. Hij heeft hier veel ervaring mee opgedaan, met name op het gebied van geautomatiseerd testen. Het volgen van de masteropleiding Biologie heeft ervoor gezorgd dat Niek over een uitstekend analytisch denkvermogen beschikt en dat hij communicatief erg sterk is ontwikkeld.'
  ],
  projects: [
    {
      periode: 'April 2018 - heden',
      opdrachtgever: 'Alfa-Beta-Solutions',
      rol: 'Front-end Developer',
      vaardigheden: 'Angularjs, HTML, SCSS, Typescript',
      situatie: 'Alfa-Beta-Solutions is een partij die software schrijft om het ERP-systemen van INFOR aan te passen aan elke klant. In dit geval gaat het om het creëren van een Angular applicatie om het INFOR-M3 systeem voor een aardappelveredelaar.',
      werkzaamheden: 'Niek werkt bij Alfa-Beta-Solutions in een klein team dat werkt aan meerdere Angular applicaties. Hij werkt met een vooraf vastgestelde set aan frameworks, zoals bootstrap, ui-grid en een door INFOR geschreven bibliotheek genaamd ODIN om data vanuit het M3-systeem zichtbaar en aanpasbaar te maken voor de klant.'
    },
    {
      periode: 'November 2017 – heden',
      opdrachtgever: 'Advitrae – Xedule',
      rol: 'Front-end Developer',
      vaardigheden: 'Angular 5, HTML, SCSS, Typescript',
      situatie: 'Het hoofdproduct van Advitrae is de Xedule applicatie. Dit is een bestaande applicatie die verantwoordelijk is voor de roosters van verschillende middelbare scholen, HBO\'s en universiteiten.',
      werkzaamheden: 'De bestaande applicatie is grotendeels geschreven met behulp van Microsoft Silverlight. Deze applicatie wordt in bijna geen enkele browser meer ondersteund. Aan Luminis is gevraagd om de applicatie volledig om te bouwen in een Angular 5 applicatie. Niek werkt als front-end developer in een team om dit te realiseren.'
    },
    {
      periode: 'Augustus 2016 – februari 2017; Augustus 2017 – april 2018',
      opdrachtgever: 'Huuskes – Eten & Zo en Eten & Zo Thuis',
      rol: 'Software Engineer',
      vaardigheden: 'Java, Groovy, Grails, Javascript, HTML, CSS, SQL',
      situatie: 'Luminis is verantwoordelijk voor het beheren en uitbreiden van de verschillende Huuskes applicaties die ervoor zorgen dat zorgbehoevenden en zorginstellingen hun eten kunnen bestellen. De applicatie Eten & Zo Thuis is voor de individuele klant die het bestelde eten thuis bezorgd kan krijgen of ergens in de buurt kan ophalen. Ten behoeve hiervan draaien een front-end en een administrator-applicatie in Grails. Voor de Eten & Zo Thuis applicatie is een app op Android of iOS die wordt beheerd door middel van een Grails-applicatie',
      werkzaamheden: 'Beheer, maken van bugs en creëren van nieuwe functionaliteiten in de Grails-applicaties'
    }
  ]
};
