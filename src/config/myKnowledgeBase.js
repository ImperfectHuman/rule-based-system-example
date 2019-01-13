import {
  SlotsAvailable,
  OneOfCategoryAvailable,
  BelowCategoryLimit,
  WithinDailyTimeRange,
  ImpulseBuyAvailable,
  NonImpulseBuyAvailable,
  BelowImpulseBuyLimit,
  AboveImpulseBuyLimit,
  ExcessOfAdsAvailable,
  IsChild,
  UserLocationKnown,
  UserLocationUnknown,
  GeographicallyCloseAdAvailable,
  GeographicallyDistantAdAvailable,
  GeographicallySpecifiedAdAvailable,
  AboveGeographicallySpecifiedLimit,
  UserHatesCategory,
  UserLovesCategory
 } from './conditions';
import {
  AddRandomFromCategory,
  SuppressRandomFromCategory,
  SuppressRandomImpulseBuy,
  AddRandomImpulseBuy,
  SuppressRandomNonImpulseBuy,
  AddRandomGeographicallyCloseAd,
  SuppressRandomGeographicallyDistantAd,
  SuppressRandomGeographicallSpecifiedAd
} from './steps';
import Categories from './categories';

var rules = [ ];
let priority = 1;

rules.push({
        priority,
        purpose: "Suppress Adult adverts for children",
        action: "ConfigDrivenAction",
        actionConfig: {
          conditions: [
              new SlotsAvailable(),
              new IsChild(),
              new ExcessOfAdsAvailable(),
              new OneOfCategoryAvailable("Adult")
          ],
          steps: [
            new SuppressRandomFromCategory("Adult")
          ]
        }
      });

priority++;

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
        purpose: "Avoid over-saturating of geographically close ads",
        action: "ConfigDrivenAction",
        actionConfig: {
          conditions: [
              new SlotsAvailable(),
              new AboveGeographicallySpecifiedLimit(2),
              new GeographicallySpecifiedAdAvailable(),
              new ExcessOfAdsAvailable()
          ],
          steps: [
            new SuppressRandomGeographicallSpecifiedAd()
          ]
        }
      });

rules.push({
        priority,
        purpose: "Avoid over-saturation of impulse buy adverts",
        action: "ConfigDrivenAction",
        actionConfig: {
          conditions: [
              new SlotsAvailable(),
              new ImpulseBuyAvailable(),
              new AboveImpulseBuyLimit(3),
              new ExcessOfAdsAvailable()
          ],
          steps: [
            new SuppressRandomImpulseBuy()
          ]
        }
      });

priority++;

rules.push({
        priority,
        purpose: "Provide geographically close ads",
        action: "ConfigDrivenAction",
        actionConfig: {
          conditions: [
              new SlotsAvailable(),
              new UserLocationKnown(),
              new GeographicallyCloseAdAvailable()
          ],
          steps: [
            new AddRandomGeographicallyCloseAd()
          ]
        }
      });

rules.push({
        priority,
        purpose: "Suppress geographically distant ads",
        action: "ConfigDrivenAction",
        actionConfig: {
          conditions: [
              new SlotsAvailable(),
              new UserLocationKnown(),
              new ExcessOfAdsAvailable(),
              new GeographicallyDistantAdAvailable()
          ],
          steps: [
            new SuppressRandomGeographicallyDistantAd()
          ]
        }
      });

rules.push({
        priority,
        purpose: "Suppress geographically-tied ads when location is unknown",
        action: "ConfigDrivenAction",
        actionConfig: {
          conditions: [
              new SlotsAvailable(),
              new UserLocationUnknown(),
              new ExcessOfAdsAvailable(),
              new GeographicallySpecifiedAdAvailable()
          ],
          steps: [
            new SuppressRandomGeographicallSpecifiedAd()
          ]
        }
      });

priority++;

rules.push({
      priority,
      purpose: "Promote DIY if the user loves it",
      action: "ConfigDrivenAction",
      actionConfig: {
        conditions: [
            new SlotsAvailable(),
            new UserLovesCategory("DIY"),
            new OneOfCategoryAvailable("DIY"),
            new BelowCategoryLimit("DIY", 3)
        ],
        steps: [
          new AddRandomFromCategory("DIY")
        ]
      }
    });


rules.push({
      priority,
      purpose: "Suppress DIY if the user hates it",
      action: "ConfigDrivenAction",
      actionConfig: {
        conditions: [
            new SlotsAvailable(),
            new UserHatesCategory("DIY"),
            new ExcessOfAdsAvailable(),
            new OneOfCategoryAvailable("DIY"),
        ],
        steps: [
          new SuppressRandomFromCategory("DIY")
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

["Film", "Books"].forEach(category => {
  rules.push({
        priority,
        purpose: "Promote ideas (films, books) to morning commuters",
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

const nonPromoCategories = Categories.filter(c => c !== "SitePromo");

rules = rules.concat(nonPromoCategories.map(category => {
  return {
          priority,
          purpose: "Fill with a spread of content, with a bias towards the profitable sport category",
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

priority++;

rules = rules.concat(nonPromoCategories.map(category => {
  return {
          priority,
          purpose: "Fill randomly with any remaining ads, with a bias towards the profitable sport category",
          action: "ConfigDrivenAction",
          actionConfig: {
            conditions: [
                new SlotsAvailable(),
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
