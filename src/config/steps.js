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

export class SuppressRandomFromCategory {
  constructor(category) {
    this.label = `suppress a random ${category} ad`;
    this.category = category;
  }
  execute(state) {
    const valid = state.pool.filter(ad => ad.categories.includes(this.category));
    const ad = randomElement(valid);
    state.pool.splice(state.pool.indexOf(ad),1);
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

export class AddRandomImpulseBuy {
  constructor(category) {
    this.label = `add a random impulse buy ad`;
    this.category = category;
  }
  execute(state) {
    const valid = state.pool.filter(ad => ad.impulseBuy);
    const ad = randomElement(valid);
    state.pool.splice(state.pool.indexOf(ad),1);
    state.selected.push(ad);
    return state;
  }
}
export class SuppressRandomNonImpulseBuy {
  constructor() {
    this.label = `suppress a random non-impulse-buy ad`;
  }
  execute(state) {
    const valid = state.pool.filter(ad => !ad.impulseBuy);
    const ad = randomElement(valid);
    state.pool.splice(state.pool.indexOf(ad),1);
    return state;
  }
}

export class AddRandomGeographicallyCloseAd {
  constructor() {
    this.label = `add a random geographically close ad`;
  }
  execute(state) {
    const valid = state.pool.filter(ad => ad.location && state.location === ad.location);
    const ad = randomElement(valid);
    state.pool.splice(state.pool.indexOf(ad),1);
    state.selected.push(ad);
    return state;
  }
}

export class SuppressRandomGeographicallyDistantAd {
  constructor() {
    this.label = `Suppress a random geographically distant ad`;
  }
  execute(state) {
    const valid = state.pool.filter(ad => ad.location && state.location !== ad.location);
    const ad = randomElement(valid);
    state.pool.splice(state.pool.indexOf(ad),1);
    return state;
  }
}

export class SuppressRandomGeographicallSpecifiedAd {
  constructor() {
    this.label = `Suppress a random geographically specified ad`;
  }
  execute(state) {
    const valid = state.pool.filter(ad => ad.location);
    const ad = randomElement(valid);
    state.pool.splice(state.pool.indexOf(ad),1);
    return state;
  }
}
