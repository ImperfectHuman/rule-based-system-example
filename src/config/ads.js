import Categories from './categories';

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

const nonPromoCategories = Categories.filter(c => c !== "SitePromo");

var Ads = nonPromoCategories.flatMap(category => Array.of(1,2,3).map(i => getOneCategoryAd(category,i)));

Ads.push(getOneCategoryAd("SitePromo", 1));

export default Ads;
