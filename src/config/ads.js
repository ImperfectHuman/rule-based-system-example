import Categories from './categories';

const nonPromoCategories = Categories.filter(c => c !== "SitePromo");

var currentId = 0;
function nextId() {
  currentId += 1;
  return currentId;
}

function getOneCategoryAd(category, i) {
  let result = {
    label: `${category} Ad #${i}`,
    id: nextId(),
    categories: [ category ],
    impulseBuy: i === 1
  };
  if (i === 4) {
    result.location = "London";
  } else if (i === 5) {
    result.location = "New York";
  }
  return result;
}


export default function adsFactory(includePromo) {
  let ads = nonPromoCategories.flatMap(category => Array.of(1,2,3,4,5).map(i => getOneCategoryAd(category,i)));
  if (includePromo) {
    ads.push({
      label: `SitePromo Ad #1`,
      id: nextId(),
      categories: [ "SitePromo" ],
      impulseBuy: true
    });
    ads.push({
      label: `SitePromo Adult Ad #1`,
      id: nextId(),
      categories: [ "SitePromo", "Adult" ],
      impulseBuy: false
    });
  }
  return ads;
}
