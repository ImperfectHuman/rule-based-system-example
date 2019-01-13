import Categories from './categories';

const nonPromoCategories = Categories.filter(c => c !== "SitePromo");

var currentId = 0;
function nextId() {
  currentId += 1;
  return currentId;
}

function getOneCategoryAd(category, i, impulseBuy) {
  return {
    label: `${category} Ad #${i}`,
    id: nextId(),
    categories: [ category ],
    impulseBuy
  };
}


export default function adsFactory(includePromo) {
  let ads = nonPromoCategories.flatMap(category => Array.of(1,2,3).map(i => getOneCategoryAd(category,i, i === 1)));
  if (includePromo) {
    ads.push(getOneCategoryAd("SitePromo", 1));
  }
  return ads;
}
