export class Pokemon {
  id: number;
  name: string;
  stats: Stat[];

  constructor(id: number, name: string, stats: Stat[]) {
    this.id = id;
    this.name = name;
    this.stats = stats;
  }
}

export interface Stat {
  name: string;
  value: number;
}
