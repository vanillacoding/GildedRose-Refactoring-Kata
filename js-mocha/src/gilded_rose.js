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
        if (itemQuality > 0) {
          if (itemName != 'Sulfuras, Hand of Ragnaros') {
            itemQuality = itemQuality - 1;
          }
        }
      } else {
        if (itemQuality < 50) {
          itemQuality = itemQuality + 1;
          if (itemName == 'Backstage passes to a TAFKAL80ETC concert') {
            if (itemSellIn < 11) {
              if (itemQuality < 50) {
                itemQuality = itemQuality + 1;
              }
            }
            if (itemSellIn < 6) {
              if (itemQuality < 50) {
                itemQuality = itemQuality + 1;
              }
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
            if (itemQuality > 0) {
              if (itemName != 'Sulfuras, Hand of Ragnaros') {
                itemQuality = itemQuality - 1;
              }
            }
          } else {
            itemQuality = itemQuality - itemQuality;
          }
        } else {
          if (itemQuality < 50) {
            itemQuality = itemQuality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
