export class SlotsAvailable {
  constructor() {
    this.label = "there are slots available"
  }
  satisfied(state) {
    return state.selected.length < state.numSlots
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
