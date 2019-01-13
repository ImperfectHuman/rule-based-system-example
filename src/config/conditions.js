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

export class IsChild {
  constructor(period) {
    this.label = `User identified as a child`;
  }
  satisfied(state) {
    return state.isChild;
  }
}

export class UserLocationKnown {
  constructor() {
    this.label = `the user location is known`;
  }
  satisfied(state) {
    return state.location;
  }
}

export class UserLocationUnknown {
  constructor() {
    this.label = `the user location is not known`;
  }
  satisfied(state) {
    return !state.location;
  }
}

export class GeographicallyCloseAdAvailable {
  constructor() {
    this.label = `there are geographically close ads`;
  }
  satisfied(state) {
    return state.pool.filter(ad => ad.location && state.location === ad.location).length;
  }
}

export class GeographicallyDistantAdAvailable {
  constructor() {
    this.label = `there are geographically distant ads`;
  }
  satisfied(state) {
    return state.pool.filter(ad => ad.location && state.location !== ad.location).length;
  }
}

export class GeographicallySpecifiedAdAvailable {
  constructor() {
    this.label = `there are geographically specified ads`;
  }
  satisfied(state) {
    return state.pool.filter(ad => ad.location).length;
  }
}

export class AboveGeographicallySpecifiedLimit {
  constructor(limit) {
    this.limit = limit;
    this.label = `there are more than ${limit} geographcially-linked ads selected`;
  }
  satisfied(state) {
    return state.selected.filter(ad => ad.location).length > this.limit;
  }
}
