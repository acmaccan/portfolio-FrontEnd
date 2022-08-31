export class User {
  id?: number;
  firstname: string;
  lastname: string;
  birthday: string;
  nationality: string;
  email: string;
  password: string;
  about: string;
  title: string;
  avatar: string;
  banner: string;
  location: string;

  constructor(
    firstname: string,
    lastname: string,
    birthday: string,
    nationality: string,
    email: string,
    password: string,
    about: string,
    title: string,
    avatar: string,
    banner: string,
    location: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
    this.nationality = nationality;
    this.email = email;
    this.password = password;
    this.about = about;
    this.title = title;
    this.avatar = avatar;
    this.banner = banner;
    this.location = location;
  }
}
