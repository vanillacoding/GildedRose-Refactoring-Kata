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

  updateAgedBrie(item) {
    if (item.sellIn < 0) {
      item.quality = item.quality - 1;
    } else if (item.sellIn > 0 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  updateBackStagePasses(item) {
    if (item.sellIn < 0) {
      item.quality = item.quality - item.quality;
    } else if (item.quality > 0 && item.quality < 50) {
      item.quality = item.quality + 1;

      if (item.sellIn < 11) {
        item.quality = item.quality + 1;
      }

      if (item.sellIn < 6) {
        item.quality = item.quality + 1;
      }
    }
  }

  updateNormalItem(item) {
    item.quality = item.quality - 1;
    if (item.sellIn < 0) {
      item.quality = item.quality - 1;
    }
  }

  updateQuality() {
    return this.items.map((item) => {
      if (item.name === 'Aged Brie') {
        this.updateAgedBrie(item);
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.updateBackStagePasses(item);
      } else if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        this.updateNomalItem(item);
      }
    });
  }

}
module.exports = {
  Item,
  Shop
}
