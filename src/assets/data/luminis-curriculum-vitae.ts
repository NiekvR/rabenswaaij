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
  }
};
