export class CurrciculumVitae {
  name: string;
  personalia: Personalia;
  education: Education[];
  roles: Skill[];
  programmingLanguages: Skill[];
  methods: Skill[];
  frameworks: Framework;
}


export class Personalia {
  function: string;
  city: string;
  birthDate: string;
  nationality: string;
  languages: string[];
}


export class Education {
  name: string;
  startYear: string;
  endYear: string;
}

export class Skill {
  name: string;
  skill: number;
}

export class Framework {
  backend: Skill[];
  frontend: Skill[];
  continuousIntegration: Skill[];
  versionControl: Skill[];
}
