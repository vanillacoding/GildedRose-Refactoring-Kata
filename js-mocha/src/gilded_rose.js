class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

// 아이템 유형 판별
class ItemRule {
  static isAgedBrie (item) {
    return item.name === 'Aged Brie';
  }

  static isBackstagePass(item) {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
  }

  static isSulfuras(item) {
    return item.name === 'Sulfuras, Hand of Ragnaros';
  }

  static minusSellin(item) {
    return item.sellIn -= 1;
  }
}

// Quility 계산
class QuilityRule {
  static plusQuality(item) {
    item.quality += 1;
  }

  static minusQuality(item) {
    item.quality -= 1;
  }

  static IsOverZero(item) {
    return item.quality > 0
  }

  static IsUnderfifty(item) {
    return item.quality < 50
  }
}

// Shop
class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (ItemRule.isAgedBrie(this.items[i]) && ItemRule.isBackstagePass(this.items[i])) {
        if (QuilityRule.IsOverZero(this.items[i]) && ItemRule.isSulfuras(this.items[i])) {
          QuilityRule.plusQuality(this.items[i]);
        }
      } else {
        if (QuilityRule.IsUnderfifty(this.items[i])) {
          QuilityRule.plusQuality(this.items[i]);
          if (ItemRule.isBackstagePass(this.items[i])) {
            if (this.items[i].sellIn < 11) {
              if (QuilityRule.IsUnderfifty(this.items[i])) {
                QuilityRule.plusQuality(this.items[i])
              }
            }
            if (this.items[i].sellIn < 6) {
              if (QuilityRule.IsUnderfifty(this.items[i])) {
                QuilityRule.plusQuality(this.items[i]);
              }
            }
          }
        }
      }

      if (ItemRule.isSulfuras(this.items[i])) {
        ItemRule.minusSellin(this.items[i]);
      }

      if (this.items[i].sellIn < 0) {
        if (ItemRule.isAgedBrie(this.items[i])) {
          if (ItemRule.isBackstagePass(this.items[i])) {
            if (QuilityRule.IsOverZero(this.items[i])) {
              if (ItemRule.isSulfuras(this.items[i])) {
                QuilityRule.minusQuality(this.items[i]);
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (QuilityRule.IsUnderfifty(this.items[i])) {
            QuilityRule.plusQuality(this.items[i]);
          }
        }
      }
    }

    return this.items;
  }
}

const items = [new Item("", 123, 10), new Item("", 789, 11)];
const shops = new Shop(items);

module.exports = {
  Item,
  Shop
}
