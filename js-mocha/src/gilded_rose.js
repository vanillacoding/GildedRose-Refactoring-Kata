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
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let timeLeft = this.items[i].sellIn;
      let itemQuality = this.items[i].quality;
      let itemName = this.items[i].name;
      const sulfuras = "Sulfuras, Hand of Ragnaros";
      const agedBrie = "Aged Brie";
      const backstagePass = "Backstage passes to a TAFKAL80ETC concert";

      if (itemName != sulfuras) {
        timeLeft -= 1;

        if (itemName != agedBrie && itemName != backstagePass) {
          if (itemQuality > 0) {
            itemQuality -= 1;
            if (timeLeft < 0) {
              if (itemQuality > 0) {
                itemQuality -= 1;
              } else {
                itemQuality == 0;
              }
            }
          }
        } else {
          if (itemQuality < 50) {
            itemQuality += 1;
            if (itemName == backstagePass) {
              if (timeLeft < 11) {
                itemQuality += 1;
              } else if (timeLeft < 6) {
                itemQuality += 1;
              } else if (timeLeft == 0) {
                itemQuality == 0;
              }
            }
          }
        }
      }

      this.items[i].sellIn = timeLeft;
      this.items[i].quality = itemQuality;
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop,
};
