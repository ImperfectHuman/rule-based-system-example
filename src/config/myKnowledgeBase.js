import { SlotsAvailable, OneOfCategoryAvailable, BelowCategoryLimit } from './conditions';
import { AddRandomFromCategory } from './steps';
import Categories from './categories';

var rules = [ ];
let priority = 1;

rules.push({
        priority,
        action: "ConfigDrivenAction",
        actionConfig: {
          conditions: [
              new SlotsAvailable(),
              new OneOfCategoryAvailable("SitePromo")
          ],
          steps: [
            new AddRandomFromCategory("SitePromo")
          ]
        }
      });

priority++;

const nonPromoCategories = Categories.filter(c => c !== "SitePromo");

rules = rules.concat(nonPromoCategories.map(category => {
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
