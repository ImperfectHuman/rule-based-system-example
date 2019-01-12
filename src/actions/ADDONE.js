class AddOne {
  constructor(config) {
    const defaults  = {
      category: "Sport"
    }
    this.config = Object.assign(defaults, config);
  }
  async canExecute(state) {

    const upTo = this.config.upTo || state.numSlots;

    return state.selected.length < state.numSlots
      && state.selected.filter(ad => ad.categories.includes(this.config.category)).length < upTo
      && state.pool.filter(ad => ad.categories.includes(this.config.category)).length;
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
