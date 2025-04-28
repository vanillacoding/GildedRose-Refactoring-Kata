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
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const AGED_BRIE = 'AgedBrie ';
      const BACKSTAGE_TICKET = 'Backstage passes to a TAFKAL80ETC concert';
      const SULFURAS = 'Sulfuras, Hand of Ragnaros';

      if (item.name != AGED_BRIE && item.name != BACKSTAGE_TICKET) {
        if (item.quality > 0) {
          if (item.name != SULFURAS) {
            decreaseQuality(item);
          }
        }
      } else {
        increaseQuality(item);
        if (item.name == BACKSTAGE_TICKET) {
          if (item.sellIn < 11) {
            increaseQuality(item);
          }
          if (item.sellIn < 6) {
            increaseQuality(item);
          }
        }
      }

      if (item.name != SULFURAS) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name === AGED_BRIE) {
          increaseQuality(item);
        } else if (item.name === BACKSTAGE_TICKET) {
          item.quality = 0;
        } else if (item.name !== SULFURAS && item.quality > 0) {
          decreaseQuality(item);
        }
      }
    }
    return this.items;
  }
}

function increaseQuality(item) {
  if (item.quality < 50) {
    item.quality += 1;
  }
}

function decreaseQuality(item) {
  if (item.quality > 0) {
    item.quality -= 1;
  }
}

module.exports = {
  Item,
  Shop
}
