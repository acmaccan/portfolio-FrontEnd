export class Project {
  id?: number;
  image: string;
  title: string;
  details: string;
  link: string;
  project_year: string;
  user_id: number;

  constructor(
    image: string,
    title: string,
    details: string,
    link: string,
    project_year: string,
    user_id: number
  ) {
    this.image = image;
    this.title = title;
    this.details = details;
    this.link = link;
    this.project_year = project_year;
    this.user_id = user_id;
  }
}
