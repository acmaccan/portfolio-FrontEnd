enum RoleEnums {
  ROLE_ADMIN,
  ROLE_USER,
}

export class Role {
  id?: number;
  name!: RoleEnums;

  cosntructor(name: RoleEnums) {
    this.name = name;
  }
}
