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

  increaseQuality(item) {
    item.quality += 1;
  }

  decreaseQulity(item, value) {
    item.quality -= value;
  }

  updateAgedBrie(item) {
    this.increaseQuality(item);
  }

  updateBackStagePasses(item) {
    if (item.sellIn < 0) {
      item.quality = item.quality - item.quality;
    } else {
      this.increaseQuality(item);

      if (item.sellIn < 11) {
        this.increaseQuality(item);
      }

      if (item.sellIn < 6) {
        this.increaseQuality(item);
      }
    }
  }

  updateNormalItem(item) {
    item.quality = item.sellIn < 0
      ? this.decreaseQulity(item, 2)
      : this.decreaseQulity(item, 1);
  }

  updateQuality() {
    return this.items.map((item) => {
      if (item.quality < 50) {
        if (item.name === 'Aged Brie') {
          this.updateAgedBrie(item);
        } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
          this.updateBackStagePasses(item);
        } else if (item.name !== 'Sulfuras, Hand of Ragnaros') {
          this.updateNormalItem(item);
        }
      }
    });
  }

}
module.exports = {
  Item,
  Shop
}
