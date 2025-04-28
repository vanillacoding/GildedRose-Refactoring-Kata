class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    // TODO Sulfuras, Hand of Ragnaros 예외처리 필요

    this.items.map((item) => {
      item.sellIn -= 1;

      if (item.name === "Aged Brie") {
        this.updateAgedBrie(item);
      } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        this.updateBackstagePass(item);
      } else {
        this.updateGeneralItem(item);
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
  }

  updateBackstagePass(item) {
    if (item.sellIn < 0) {
      item.quality = 0;
    }

    if (item.quality < 50) {
      item.quality += 1;

      if (item.sellIn < 11 && item.quality < 50) {
        item.quality += 1;
      }

      if (item.sellIn < 6 && item.quality < 50) {
        item.quality += 1;
      }
    }
  }

  updateGeneralItem(item) {
    if (item.quality > 0) {
      item.quality -= 1;
    }

    if (item.sellIn < 0 && item.quality > 0) {
      item.quality -= 1;
    }
  }
}

module.exports = {
  Item,
  Shop
};
