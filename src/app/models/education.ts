export class Education {
  id?: number;
  thumb: string;
  institution: string;
  title: string;
  details: string;
  from_date: string;
  to_date: string;
  user_id: number;

  constructor(
    thumb: string,
    institution: string,
    title: string,
    details: string,
    from_date: string,
    to_date: string,
    user_id: number
  ) {
    this.thumb = thumb;
    this.institution = institution;
    this.title = title;
    this.details = details;
    this.from_date = from_date;
    this.to_date = to_date;
    this.user_id = user_id;
  }
}
