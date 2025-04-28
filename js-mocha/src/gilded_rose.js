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

  updateAgedBrie(items) {
    if (items.sellIn < 0) {
      items.quality = items.quality - 1;
    } else if (items.sellIn > 0 && items.quality < 50) {
      items.quality = items.quality + 1;
    }
  }

  updateBackStagePasses(items) {
    if (items.sellIn < 0) {
      items.quality = items.quality - items.quality;
    } else if (items.quality > 0 && items.quality < 50) {
      items.quality = items.quality + 1;

      if (items.sellIn < 11) {
        items.quality = items.quality + 1;
      }

      if (items.sellIn < 6) {
        items.quality = items.quality + 1;
      }
    }
  }

  updateNomalItem(items) {
    items.quality = items.quality - 1;
    if (items.sellIn < 0) {
      items.quality = items.quality - 1;
    }
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Aged Brie') {
        this.updateAgedBrie(this.items[i]);
      } else if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.updateBackStagePasses(this.items[i]);
      } else if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
        this.updateNomalItem(this.items[i]);
      }
    }

    return this.items;
  }

}
module.exports = {
  Item,
  Shop
}
