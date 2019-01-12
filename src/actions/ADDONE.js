import { SlotsAvailable, OneOfCategoryAvailable, BelowCategoryLimit } from './conditions';

class AddOne {
  constructor(config) {
    this.conditions = [
      new SlotsAvailable(),
      new OneOfCategoryAvailable(config.category),
    ];

    if (config.upTo) {
      this.conditions.push(new BelowCategoryLimit(config.category, config.upTo));
    }
    this.config = config;
  }
  async canExecute(state) {
    // for loop rather than map/reduce so we can bail immediately on false
    for (let i = 0; i < this.conditions.length; i++) {
      if (!this.conditions[i].satisfied(state)) {
        return false;
      }
    }
    return true;
  }
  async execute(state) {
    const valid = state.pool.filter(ad => ad.categories.includes(this.config.category));
    const ad = valid[Math.floor(Math.random() * valid.length)];

    state.pool.splice(state.pool.indexOf(ad),1);
    state.selected.push(ad);
    return state;
  }
}

export default AddOne;
