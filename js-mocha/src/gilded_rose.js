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

  itemNotBelongToSulfuras(itemName) {
    if (itemName != 'Sulfuras, Hand of Ragnaros') {
      return true;
    } else {
      return false;
    }
  }
  itemNotBelongToAgedBrie(itemName) {
    if (itemName != 'Aged Brie') {
      return true;
    } else {
      return false;
    }
  }

  increaseItemQuality(item) {
    item.quality += 1;
  }
  decreaseItemQuality(item) {
    item.quality -= 1;
  }

  itemQualityAvailable(item) {
    if (
      item.quality > 0
      && this.itemNotBelongToSulfuras(item.name)
    ) {
      this.decreaseItemQuality(item);
    }
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const itemName = this.items[i].name;

      if (itemNotBelongToAgedBrie(itemName) && itemName != 'Backstage passes to a TAFKAL80ETC concert') {
        this.itemQualityAvailable(items[i]);
      } else {
        if (this.items[i].quality < 50) {
          this.increaseItemQuality(this.items[i]);
          if (itemName == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.increaseItemQuality(this.items[i]);
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.increaseItemQuality(this.items[i]);
              }
            }
          }
        }
      }
      if (this.itemNotBelongToSulfuras(itemName)) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.itemNotBelongToAgedBrie(itemName)) {
          if (itemName != 'Backstage passes to a TAFKAL80ETC concert') {
            this.itemQualityAvailable(items[i]);
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.increaseItemQuality(this.items[i]);
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
