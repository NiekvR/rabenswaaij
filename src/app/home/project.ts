export class Project {
  stack: string;
  headerImage: string;
  headerPosition ? = 'center';
  title: string;
  excerpt: string;
  text: string;
  frameworks: Frameworks;
  size: string;
  color: string;
  detailImage?: string;
  url?: string;
}

export class Frameworks {
  html ? = false;
  css ? = false;
  sass ? = false;
  angular ? = false;
  js ? = false;
  node ? = false;
  java ? = false;
  ios ? = false;
  android ? = false;
  php ? = false;
  wordpress ? = false;
}
