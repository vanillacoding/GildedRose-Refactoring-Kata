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
    for (var i = 0; i < this.items.length; i++) {
      const itemName = this.items[i].name;
      let itemSellIn = this.items[i].sellIn;
      let itemQuality = this.items[i].quality;

      if (itemName != 'Aged Brie' && itemName != 'Backstage passes to a TAFKAL80ETC concert') {
        itemQuality = this.compareQuality(itemQuality, itemName);
      } else {
        const tmpItemQuality = this.compareQuality(itemQuality, itemName);
        if (itemQuality + 1 === tmpItemQuality) {
          itemQuality = tmpItemQuality;
          if (itemName == 'Backstage passes to a TAFKAL80ETC concert') {
            if (itemSellIn < 11) {
              itemQuality = this.compareQuality(itemQuality, itemName);
            }
            if (itemSellIn < 6) {
              itemQuality = this.compareQuality(itemQuality, itemName);
            }
          }
        }
      }
      if (itemName != 'Sulfuras, Hand of Ragnaros') {
        itemSellIn = itemSellIn - 1;
      }
      if (itemSellIn < 0) {
        if (itemName != 'Aged Brie') {
          if (itemName != 'Backstage passes to a TAFKAL80ETC concert') {
            itemQuality = this.compareQuality(itemQuality, itemName);
          } else {
            itemQuality = itemQuality - itemQuality;
          }
        } else {
          itemQuality = this.compareQuality(itemQuality, itemName);
        }
      }
    }

    return this.items;
  }
  compareQuality(itemQuality, itemName) {
    if (itemQuality > 0) {
      if (itemName != 'Sulfuras, Hand of Ragnaros') {
        itemQuality = itemQuality - 1;
      }
    } else if (itemQuality < 50) {
      itemQuality = itemQuality + 1;
    }
    return itemQuality;
  }
}
module.exports = {
  Item,
  Shop
}
