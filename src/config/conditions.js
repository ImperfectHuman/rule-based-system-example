export class SlotsAvailable {
  constructor(atLeast = 1) {
    if (atLeast > 1) {
      this.label = `there are at least ${atLeast} slots available`;
    } else {
      this.label = `there are slots available`;
    }
    this.atLeast = atLeast;
  }
  satisfied(state) {
    return (state.selected.length + this.atLeast) <= state.numSlots
  }
}

export class OneOfCategoryAvailable {
  constructor(category) {
    this.category = category;
    this.label = `there is a ${category} ad available`;
  }
  satisfied(state) {
    return state.pool.filter(ad => ad.categories.includes(this.category)).length;
  }
}

export class ImpulseBuyAvailable {
  constructor() {
    this.label = `there is an impulse buy ad available`;
  }
  satisfied(state) {
    return state.pool.filter(ad => ad.impulseBuy).length;
  }
}

export class NonImpulseBuyAvailable {
  constructor() {
    this.label = `there is a non-impulse-buy ad available`;
  }
  satisfied(state) {
    return state.pool.filter(ad => ad.impulseBuy).length;
  }
}

export class ExcessOfAdsAvailable {
  constructor() {
    this.label = `there are more ads available than are needed`;
  }
  satisfied(state) {
    return (state.selected.length + state.pool.length) > state.numSlots;
  }
}

export class BelowImpulseBuyLimit {
  constructor(limit) {
    this.limit = limit;
    this.label = `there are fewer than ${limit} impulse buy ads selected`;
  }
  satisfied(state) {
    return state.selected.filter(ad => ad.impulseBuy).length < this.limit;
  }
}

export class AboveImpulseBuyLimit {
  constructor(limit) {
    this.limit = limit;
    this.label = `there are more than ${limit} impulse buy ads selected`;
  }
  satisfied(state) {
    return state.selected.filter(ad => ad.impulseBuy).length > this.limit;
  }
}

export class BelowCategoryLimit {
  constructor(category, limit) {
    this.category = category;
    this.limit = limit;
    this.label = `there are fewer than ${limit} ${category} ads selected`;
  }
  satisfied(state) {
    return state.selected.filter(ad => ad.categories.includes(this.category)).length < this.limit;
  }
}

export class WithinDailyTimeRange {
  constructor(period) {
    this.label = `In the ${period} period`;
    this.period = period;
  }
  satisfied(state) {
    return state.period && state.period === this.period;
  }
}
