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
      const item = items[i];
      const itemName = item.name;

      if (itemNotBelongToAgedBrie(itemName) && itemName != 'Backstage passes to a TAFKAL80ETC concert') {
        this.itemQualityAvailable(item);
      } else {
        if (item.quality < 50) {
          this.increaseItemQuality(item);
          if (itemName == 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                this.increaseItemQuality(item);
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                this.increaseItemQuality(item);
              }
            }
          }
        }
      }
      if (this.itemNotBelongToSulfuras(itemName)) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (this.itemNotBelongToAgedBrie(itemName)) {
          if (itemName != 'Backstage passes to a TAFKAL80ETC concert') {
            this.itemQualityAvailable(item);
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            this.increaseItemQuality(item);
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
