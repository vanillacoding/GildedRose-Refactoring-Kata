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
    for (let item of this.items) {
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0) {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.quality = item.quality - 1;
          }
        }
      } else {
        this.increaseQuality(item);
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {
              this.increaseQuality(item);
            }
            if (item.sellIn < 6) {
              this.increaseQuality(item);
            }
          }
        }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = 0;
          }
        } else {
          this.increaseQuality(item);
        }
      }
    }

    return this.items;
  }
  increaseQuality(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }
}
module.exports = {
  Item,
  Shop
}
