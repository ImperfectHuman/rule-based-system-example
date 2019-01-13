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
