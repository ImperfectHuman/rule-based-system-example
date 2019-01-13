import {
  SlotsAvailable,
  OneOfCategoryAvailable,
  BelowCategoryLimit,
  WithinDailyTimeRange,
  ImpulseBuyAvailable,
  NonImpulseBuyAvailable,
  BelowImpulseBuyLimit,
  AboveImpulseBuyLimit,
  ExcessOfAdsAvailable
 } from './conditions';
import {
  AddRandomFromCategory,
  SuppressRandomImpulseBuy,
  AddRandomImpulseBuy,
  SuppressRandomNonImpulseBuy
} from './steps';
import Categories from './categories';

var rules = [ ];
let priority = 1;

rules.push({
        priority,
        purpose: "Provide site-wide promotions",
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

rules.push({
        priority,
        purpose: "Promote impulse buys to evening commuters",
        action: "ConfigDrivenAction",
        actionConfig: {
          conditions: [
              new SlotsAvailable(),
              new WithinDailyTimeRange("evening commute"),
              new ImpulseBuyAvailable(),
              new BelowImpulseBuyLimit(3),
          ],
          steps: [
            new AddRandomImpulseBuy()
          ]
        }
      });

priority++;

["Film", "Books"].forEach(category => {
  rules.push({
        priority,
        purpose: "Promote ideas (films, books) to morning commuters while they're impressionable",
        action: "ConfigDrivenAction",
        actionConfig: {
          conditions: [
              new SlotsAvailable(),
              new OneOfCategoryAvailable(category),
              new BelowCategoryLimit(category, 1),
              new WithinDailyTimeRange("morning commute")
          ],
          steps: [
            new AddRandomFromCategory(category)
          ]
        }
      });
});

priority++;

rules.push({
        priority,
        purpose: "Suppress impulse buy adverts while people are too aware to impulse buys",
        action: "ConfigDrivenAction",
        actionConfig: {
          conditions: [
              new SlotsAvailable(),
              new WithinDailyTimeRange("morning commute"),
              new ImpulseBuyAvailable(),
              new AboveImpulseBuyLimit(1),
              new ExcessOfAdsAvailable()
          ],
          steps: [
            new SuppressRandomImpulseBuy()
          ]
        }
      });

priority++;

const nonPromoCategories = Categories.filter(c => c !== "SitePromo");

rules = rules.concat(nonPromoCategories.map(category => {
  return {
          priority,
          purpose: "Fill randomly, with a bias towards the profitable sport category",
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
