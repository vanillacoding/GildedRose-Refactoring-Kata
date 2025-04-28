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
    this.items.map(({ name, quality, sellIn }) => {
      if (
        name !== 'Aged Brie' &&
        name !== 'Backstage passes to a TAFKAL80ETC concert'
      ) {
        if (quality > 0 && name !== 'Sulfuras, Hand of Ragnaros') {
          quality -= 1;
        }
      } else {
        if (quality < 50) {
          quality += 1;
          if (name === 'Backstage passes to a TAFKAL80ETC concert') {
            if (sellIn < 11 && quality < 50) {
              quality += 1;
            }
            if (sellIn < 6 && quality < 50) {
              quality += 1;
            }
          }
        }
      }
      if (name !== 'Sulfuras, Hand of Ragnaros') {
        sellIn -= 1;
      }
      if (sellIn < 0) {
        if (name !== 'Aged Brie') {
          if (name !== 'Backstage passes to a TAFKAL80ETC concert') {
            if (quality > 0 && name !== 'Sulfuras, Hand of Ragnaros') {
              quality -= 1;
            }
          } else {
            quality = quality - quality;
          }
        } else {
          if (quality < 50) {
            quality += 1;
          }
        }
      }
    });

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
