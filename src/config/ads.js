import Categories from './categories';

const nonPromoCategories = Categories.filter(c => c !== "SitePromo");

var currentId = 0;
function nextId() {
  currentId += 1;
  return currentId;
}

function getOneCategoryAd(category, i) {
  return {
    label: `${category} Ad #${i}`,
    id: nextId(),
    categories: [ category ]
  };
}


export default function adsFactory(includePromo) {
  let ads = nonPromoCategories.flatMap(category => Array.of(1,2,3).map(i => getOneCategoryAd(category,i)));
  if (includePromo) {
    ads.push(getOneCategoryAd("SitePromo", 1));
  }
  return ads;
}
