class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
class Shop {
  constructor(items=[]) {
    this.items = items;
  }

  sulfurasItemCheck(itemName) {
    if (itemName != 'Sulfuras, Hand of Ragnaros') {
      return true;
    } else {
      return false;
    }
  }
  increaseItemQuality(itemQuality) {
    itemQuality += 1;
  }
  decreaseItemQuality(itemQuality) {
    itemQuality -= 1;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.sulfurasItemCheck(this.items[i].name)) {
            this.decreaseItemQuality(this.items[i].quality);
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.increaseItemQuality(this.items[i].quality);
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.increaseItemQuality(this.items[i].quality);
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.increaseItemQuality(this.items[i].quality);
              }
            }
          }
        }
      }
      if (this.sulfurasItemCheck(this.items[i].name)) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.sulfurasItemCheck(this.items[i].name)) {
                this.decreaseItemQuality(this.items[i].quality);
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.increaseItemQuality(this.items[i].quality);
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
