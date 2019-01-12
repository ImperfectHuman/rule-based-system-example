import { SlotsAvailable, OneOfCategoryAvailable, BelowCategoryLimit } from './conditions';
import { AddRandomFromCategory } from './steps';

export default class AddOne {
  constructor(config) {
    this.conditions = [
      new SlotsAvailable(),
      new OneOfCategoryAvailable(config.category),
    ];

    if (config.upTo) {
      this.conditions.push(new BelowCategoryLimit(config.category, config.upTo));
    }

    this.steps = [
      new AddRandomFromCategory(config.category)
    ]
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
    return this.steps.reduce((currentState, step) => step.execute(currentState), state);
  }
}
