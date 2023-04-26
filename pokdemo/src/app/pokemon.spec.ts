import {Pokemon, Stat} from './pokemon';

describe('Pokemon', () => {
  it('should create an instance', () => {
    const id = 1;
    const name = 'Pikachu';
    const stats: Stat[] = [
      { name: 'hp', value: 100 },
      { name: 'attack', value: 50 },
      { name: 'defense', value: 75 }
    ];
    expect(new Pokemon(id, name, stats)).toBeTruthy();
  });
});
