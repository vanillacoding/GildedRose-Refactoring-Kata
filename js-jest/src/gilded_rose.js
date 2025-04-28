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

  checkIsNormalItem(name) {
    return (
      name !== 'Aged Brie' &&
      name !== 'Backstage passes to a TAFKAL80ETC concert' &&
      name !== 'Sulfuras, Hand of Ragnaros'
    );
  }

  updateQuality() {
    this.items.map(({ name, quality, sellIn }) => {
      const isNormalItem = this.checkIsNormalItem(name);

      if (isNormalItem) {
        if (quality > 0) {
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
        if (isNormalItem) {
          if (quality > 0) {
            quality -= 1;
          }
        }
        if (name === 'Backstage passes to a TAFKAL80ETC concert') {
          quality = 0;
        }
        if (name === 'Aged Brie') {
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
