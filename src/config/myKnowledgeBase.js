import { SlotsAvailable, OneOfCategoryAvailable, BelowCategoryLimit } from './conditions';
import { AddRandomFromCategory } from './steps';
import Categories from './categories';

var rules = [ ];

let priority = 1;

rules = rules.concat(Categories.map(category => {
  return {
          priority,
          action: "ConfigDrivenAction",
          actionConfig: {
            conditions: [
                new SlotsAvailable(),
                new OneOfCategoryAvailable(category),
                new BelowCategoryLimit(category, 2)
            ],
            steps: [
              new AddRandomFromCategory(category)
            ]
          },
          tiebreakweight: category === "Sport" ? 3 : 1
        };
}));

const KnowledgeBase = { rules };

export default KnowledgeBase;
