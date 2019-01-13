function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export class AddRandomFromCategory {
  constructor(category) {
    this.label = `add a random ${category} ad`;
    this.category = category;
  }
  execute(state) {
    const valid = state.pool.filter(ad => ad.categories.includes(this.category));
    const ad = randomElement(valid);
    state.pool.splice(state.pool.indexOf(ad),1);
    state.selected.push(ad);
    return state;
  }
}

export class SuppressRandomImpulseBuy {
  constructor() {
    this.label = `suppress a random impulse buy ad`;
  }
  execute(state) {
    const valid = state.pool.filter(ad => ad.impulseBuy);
    const ad = randomElement(valid);
    state.pool.splice(state.pool.indexOf(ad),1);
    return state;
  }
}
