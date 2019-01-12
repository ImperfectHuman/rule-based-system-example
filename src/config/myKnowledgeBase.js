import Categories from './categories';

var rules = [ ];

let priority = 1;

rules = rules.concat(Categories.map(category => {
  return {
          priority,
          action: "ADDONE",
          actionConfig: {
            category,
            upTo: 2
          },
          tiebreakweight: category === "Sport" ? 3 : 1
        };
}));

const KnowledgeBase = { rules };

export default KnowledgeBase;
