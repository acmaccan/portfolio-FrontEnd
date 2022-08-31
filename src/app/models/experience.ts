export class Experience {
  id?: number;
  thumb: string;
  company: string;
  from_date: string;
  to_date: string;
  title: string;
  details: string;
  type_id: number;
  user_id: number;

  constructor(
    thumb: string,
    company: string,
    from_date: string,
    to_date: string,
    title: string,
    details: string,
    type_id: number,
    user_id: number,
  ) {
    this.thumb = thumb;
    this.company = company;
    this.from_date = from_date;
    this.to_date = to_date;
    this.title = title;
    this.details = details;
    this.type_id = type_id;
    this.user_id = user_id;
  }
}
