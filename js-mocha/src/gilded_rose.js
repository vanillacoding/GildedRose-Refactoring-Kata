const type = {
  backstage: 'Backstage passes to a TAFKAL80ETC concert',
  aged: 'Aged Brie',
  sulfuras: 'Sulfuras, Hand of Ragnaros'
}

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
  pulsQuality(item) {
    return item.quality = item.quality + 1;
  }
  minusQuality(item) {
    return item.quality = item.quality - 1;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != type.aged && this.items[i].name != type.backstage) {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != type.sulfuras) {
            this.pulsQuality(this.items[i]);
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.pulsQuality(this.items[i]);
          if (this.items[i].name == type.backstage) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.pulsQuality(this.items[i]);
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.pulsQuality(this.items[i]);
              }
            }
          }
        }
      }
      if (this.items[i].name != type.sulfuras) {
        this.minusQuality(this.items[i]);
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != type.sulfuras) {
          if (this.items[i].name != type.backstage) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.minusQuality(this.items[i]);
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.pulsQuality(this.items[i]);
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