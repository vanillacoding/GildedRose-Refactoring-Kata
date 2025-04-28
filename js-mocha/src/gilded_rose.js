class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
  
class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.map((item) => {
      switch (item.name) {
        case 'Aged Brie':
          return this.updateAgedBrie(item);
        case 'Backstage passes to a TAFKAL80ETC concert':
          return this.updateBackstagePasses(item);
        case 'Sulfuras, Hand of Ragnaros':
          return item; 
        default:
          return this.updateGeneral(item);
      }
    });

    return this.items;
  }

  updateAgedBrie(item) {
    if (item.quality < 50) {
      item.quality += 1;
    }
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality += 1;
    }
    item.sellIn -= 1;
  }

  updateBackstagePasses(item) {
    if (item.sellIn > 0 && item.quality < 50) {
      item.quality += 1;
      if (item.sellIn < 11 && item.quality < 50) {
        item.quality += 1;
      }
      if (item.sellIn < 6 && item.quality < 50) {
        item.quality += 1;
      }
    } 
    if (item.sellIn < 0) {
      item.quality = 0;
    }
    item.sellIn -= 1;
  }

  updateGeneral(item) {
    if (item.quality > 0) {
      item.quality -= 1;
    }
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality -= 1;
    }
    item.sellIn -= 1;
  }
}
module.exports = {
  Item,
  Shop
}
