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
  checkIsSameName(name, exName) {
    return name == exName;
  }
  checkIsUnderSellIn(sellIn, day) {
    return sellIn < day;
  }

  updateQuality() {
    const itemLength = this.items.length;
    for (var i = 0; i < itemLength; i++) {
      const item = this.items[i];
      if (!this.checkIsSameName(item.name, `Aged Brie`) && !this.checkIsSameName(item.name, 'Backstage passes to a TAFKAL80ETC concert')) {
        if (item.quality > 0) {
          if (!this.checkIsSameName(item.name, 'Sulfuras, Hand of Ragnaros')) {
            item.quality = item.quality - 1;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (this.checkIsSameName(item.name, 'Backstage passes to a TAFKAL80ETC concert')) {
            if (this.checkIsUnderSellIn(item.sellIn, 11)) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
            if (this.checkIsUnderSellIn(item.sellIn, 6)) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
      if (!this.checkIsSameName(item.name, 'Sulfuras, Hand of Ragnaros')) {
        item.sellIn = item.sellIn - 1;
      }
      if (this.checkIsUnderSellIn(item.sellIn, 0)) {
        if (!this.checkIsSameName(item.name, `Aged Brie`)) {
          if (!this.checkIsSameName(item.name, 'Backstage passes to a TAFKAL80ETC concert')) {
            if (item.quality > 0) {
              if (!this.checkIsSameName(item.name, 'Sulfuras, Hand of Ragnaros')) {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
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
