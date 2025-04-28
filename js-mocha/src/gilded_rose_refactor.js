class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  defaultNames = ["Aged Brie", "Backstage passes to a TAFKAL80ETC concert", "Sulfuras, Hand of Ragnaros"]

  itemMap = {
    "Aged Brie": (item) => this.updateBrie(item),
    "Backstage passes to a TAFKAL80ETC concert": (item) => this.updateBackstage(item),
    "Sulfuras, Hand of Ragnaros": () => {},
    "default": (item) => this.updateDefault(item),
  }

  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      const updater = this.defaultNames.includes(item.name)
        ? this.itemMap[item.name]
        : this.itemMap["default"];

      updater(item);
    })
  }

  updateBrie(item) {
    item.sellIn--;

    if (item.sellIn > 0 && item.quality < 50) item.quality++;
  }

  updateBackstage(item) {
    item.sellIn--;

    if (item.sellIn <= 0) return item.quality = 0;
    if (item.sellIn > 0 && item.quality < 50) item.quality++;
    if (item.sellIn < 11 && item.quality < 50) item.quality++;
    if (item.sellIn < 6  && item.quality < 50) item.quality++;
  }

  updateDefault(item) {
    item.sellIn--;

    if (item.sellIn <= 0) item.quality -= 2;
    if (item.quality > 0 && item.quality < 50) item.quality--;
  }
}
module.exports = {
  Item,
  Shop
}
