class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}



function updateQuality(){
  // 하루가 지났음을 의미
  item.sellIn -= 1;

  switch(item) {
    case "Aged Brie":
    // valueAppreciation();

    case "Backstage passes":
    // valueAppreciation();

    case "Sulfuras":
    // valueIsStable();
    default :
    // valueDepreciation();
  }

}

function valueAppreciation(item){

  // q=50 까지 시간이 지나면 가격이 올라간다
  if (item.name === "Backstage passes") {
    if (sellIn > 10) {
      item.quality += 1;

    } else if (sellIn > 5 && sellIn <= 10) {
      item.quality += 2;

    } else if (sellIn >= 0 && sellIn <= 5) {
      item.quality += 3;

    } else {
      item.quality = 0;
    }
  }

  if (item.name === "Aged Brie" && quality < 50) {
      item.quality += 1;
  }

  return item;
}

function valueIsStable(item){
  // sulfras 면
  // Quality 값이 떨어지지 않는다
}
function valueDepreciation(item){
  item.quality -= 1;
  if(item.sellIn === 0){
    item.quality = item.quality / 2
  }

}




class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {

      var iName = this.items[i].name;
      var iQuality = this.items[i].quality;
      var iSellIn = this.items[i].sellIn;

      switch(x) {
        case 'Aged Brie':  // if (x === 'value1')
        function valueAppreciation(){}

        case 'Sulfuras':  // if (x === 'value2')
        function valueIsStable(){}

        case 'Backstage passes':  // if (x === 'value2')
        function valueAppreciation(){}

        default :
        function valueDepreciation(){}
        //noraml 한 경우




      if (iName != 'Aged Brie' && iName != 'Backstage passes to a TAFKAL80ETC concert') {
        if (iQuality > 0) {
          if (iName != 'Sulfuras, Hand of Ragnaros') {
            iQuality -= 1;
          }
        }
      } else {
        if (iQuality < 50) {
          iQuality += 1;
          if (iName == 'Backstage passes to a TAFKAL80ETC concert') {
            if (iSellIn < 11) {
              if (iQuality < 50) {
                iQuality += 1;
              }
            }
            if (iSellIn < 6) {
              if (iQuality < 50) {
                iQuality += 1;
              }
            }
          }
        }
      }
      if (iName != 'Sulfuras, Hand of Ragnaros') {
        iSellIn = iSellIn - 1;
      }
      if (iSellIn < 0) {
        if (iName != 'Aged Brie') {
          if (iName != 'Backstage passes to a TAFKAL80ETC concert') {
            if (iQuality > 0) {
              if (iName != 'Sulfuras, Hand of Ragnaros') {
                iQuality = iQuality - 1;
              }
            }
          } else {
            iQuality = iQuality - iQuality;
          }
        } else {
          if (iQuality < 50) {
            iQuality += 1;
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
