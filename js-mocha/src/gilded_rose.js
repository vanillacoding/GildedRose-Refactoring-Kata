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
        // 전설 아이템 제외 전부 남은 기간 -1일
        timeLeft -= 1;

        if (
          itemName != agedBrie &&
          itemName != backstagePass // 브리치즈와 패스 제외 아이템
        ) {
          if (itemQuality > 0) {
            // 0원 되기 전까지 1원 내리기
            itemQuality -= 1;
            if (timeLeft < 0) {
              // 남은 기간 음수일 시
              if (itemQuality > 0) {
                // 추가로 1원 내리기, 총 2원 내리기
                itemQuality -= 1;
              } else {
                itemQuality == 0; // 0원일 시 그대로 값은 0원
              }
            }
          }
        } else {
          if (itemQuality < 50) {
            // 1. 브리치즈의 경우
            itemQuality += 1; // 1원만 올리기
            if (itemName == backstagePass) {
              // 2. 패스인 경우
              if (timeLeft < 11) {
                // 남은 기간 11일 미만일 시, 추가 1원 올리기, 총 2원 올리기
                itemQuality += 1;
              } else if (timeLeft < 6) {
                // 남은 기간 6일 미만일 시, 추가 1원 올리기, 총 3원 올리기
                itemQuality += 1;
              } else if (timeLeft == 0) {
                // 남은 기간 0일일 시, 값은 0원
                itemQuality == 0;
              }
            }
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop,
};
