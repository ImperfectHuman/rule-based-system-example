export default class ConfigDrivenAction {
  constructor(config) {
    this.conditions = config.conditions;
    this.steps = config.steps;
  }
  async canExecute(state) {
    var debug = () => {};
    if (false) {
      debug = console.log;
    }
    // for loop rather than map/reduce so we can bail immediately on false
    for (let i = 0; i < this.conditions.length; i++) {
      if (!this.conditions[i].satisfied(state)) {
        debug(`FAILED: ${this.conditions[i].label}`);
        return false;
      }
      debug(`PASSED: ${this.conditions[i].label}`);
    }
    return true;
  }
  async execute(state) {
    return this.steps.reduce((currentState, step) => step.execute(currentState), state);
  }
}
