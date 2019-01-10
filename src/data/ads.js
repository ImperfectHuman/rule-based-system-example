import Categories from './categories';

var currentId = 0;
function nextId() {
  currentId += 1;
  return currentId;
}

var Ads = Categories.flatMap(category => Array.of(1,2,3).map(i => {
    return {
      label: `${category} Ad #${i}`,
      id: nextId(),
      categories: [ category ]
    };
  }));




export default Ads;
