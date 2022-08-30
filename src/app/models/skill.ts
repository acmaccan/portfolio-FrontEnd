export class Skill {
  id?: number;
  skill: string;
  percentage: number;
  user_id: number;

  constructor(skill: string, percentage: number, user_id: number) {
    this.skill = skill;
    this.percentage = percentage;
    this.user_id = user_id;
  }
}
