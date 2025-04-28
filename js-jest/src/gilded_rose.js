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
      if (this.items[i].name === "Aged Brie") {
        AgedBrie(this.items[i]);
      }
      else if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
        Backstagepasses(this.items[i]);
      }
      else if (this.items[i].name == "Sulfuras, Hand of Ragnaros") {
        Sulfuras(this.items[i]);
      }
      else {
        defaultItem(this.items[i]);
      }
    }
    return this.items;
  }
}

function AgedBrie(item) {
  item.sellIn -= 1;
  if(item.quality <= 50) {
    item.quality += 1;
  }
  return item;
}

function Backstagepasses(item) {
  item.sellIn -= 1;
  if (item.quality <= 50) {
    if (item.sellIn <= 5) {
      item.quality += 3;
      if (item.quality >= 50){
        item.quality = 50;
      }
    }

    else if (item.sellIn <= 10) {
      item.quality += 2;
      if (item.quality >= 50){
        item.quality = 50;
      }
    }

    else if (item.sellIn <= 0) {
      item.quality = 0;
    }
    else {
      if (item.quality <= 50){
        item.quality += 1;
      }
    }
  }

}

function defaultItem(item) {
  item.quality -= 1;
  item.sellIn -= 1;
}

function Sulfuras(item) {
  if(item.sellIn > 0) {
    item.sellIn -= 1;
  }
  item.quality = item.quality;
}

module.exports = {
  Item,
  Shop
}
