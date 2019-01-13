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
    impulseBuy: i === 1,
  };
  if (i === 3) {
    result.location = "London";
  } else if (i === 4) {
    result.location = "New York";
  }
  return result;
}


export default function adsFactory(includePromo) {
  let ads = nonPromoCategories.flatMap(category => Array.of(1,2,3,4).map(i => getOneCategoryAd(category,i)));
  if (includePromo) {
    ads.push(getOneCategoryAd("SitePromo", 1));
    ads.push({
      label: `SitePromo Adult Ad #1`,
      id: nextId(),
      categories: [ "SitePromo", "Adult" ],
      impulseBuy: true,
    });
  }
  return ads;
}
