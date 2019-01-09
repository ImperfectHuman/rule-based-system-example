import Categories from './categories';

var Rules = [ ];

let priority = 1;

Rules = Rules.concat(Categories.map(category => {
  return {
          priority,
          action: "ADDONE",
          actionConfig: {
            category,
            upTo: 2
          },
          tiebreakweight: category === "Sport" ? 2 : 1
        };
}));

export default Rules;
