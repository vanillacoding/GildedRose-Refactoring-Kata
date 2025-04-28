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

  processNormalItem(item) {
    if (item.quality > 0) {
      item.quality--;
    }

    item.sellIn--;

    if (item.sellIn < 0 && item.quality > 0) {
      item.quality--;
    }
  }

  processBrieItem(item) {
    if (item.quality < 50) {
      item.quality++;
    }

    item.sellIn--;

    if (item.sellIn < 0 && item.quality < 50) {
      item.quality++;
    }
  }

  processBackstageItem(item) {
    if (item.quality < 50) {
      item.quality++;
    }
    if (item.sellIn < 11 && item.quality < 50) {
      item.quality++;
    }
    if (item.sellIn < 6 && item.quality < 50) {
      item.quality++;
    }

    item.sellIn--;

    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name === 'Sulfuras, Hand of Ragnaros') {
        return item.name;
      } else if (item.name === 'Aged Brie') {
        return this.processBrieItem(item);
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        return this.processBrieItem(item);
      } else {
        return this.processNormalItem(item);
      }
    });
  }
}
module.exports = {
  Item,
  Shop,
};

/**
 * (1) 첫번째 Refactoring
 *  1. 처음 코드를 봤을 때는 "긴 함수"가 떠올랐습니다.
 *  2. 엄청난 중첩을 이룬 if문
 *  문제 파악:
 *    1) Sulfuras를 제외한 두 가지 물품 포함 모든 제품들은 매일 sellIn이 1씩 감소.
 *    2) Sulfuras를 제외한 Aged Brie 물품은 매일 quality 1씩 증가.
 *      2-1) Sulfuras는 아무것도 변하지 않는다.
 *    3) Backstage는 sellIn 10일 이하면 quality +1.
 *      3-1) 추가적으로, sellIn이 5일 이하면 +1.
 *    3) 위에 언급된 세 가지의 아이템을 제외하고는 하루가 지날수록 quality는 1씩 감소.
 *    4) 유통기한이 지난 경우, 기본 아이템의 quality는 -1을 더 해줘서 하루에 -2가 된다.
 *       backstage의 qualtiy는 0 그리고 Brie는 추가로 +1 된다.
 *  해결 방법: 각 물건 별로 따로 계산하는 함수 만들기
 *          1) 위 3개의 제품을 제외한 모든 제품
 *          2) Sulfuras
 *          3) Backstage
 *          4) Brie
 *
 * (2) 두번째 Refactoring
 *  재윤님과 이야기를 통해서 서로가 얻은 아이디어!
 *    1. item.name 등 너무 반복되서 지저분해 보이는데 어떻게 할까?
 *      Ans: 객체이기 때문에, 구조 분해 할당을 해보자!
 *    2. 반복된 if문 어떻게 처리할까?
 *      Ans: && 연산자를 통해서 줄여보자!
 */

// for (var i = 0; i < this.items.length; i++) {
//   if (
//     this.items[i].name != 'Aged Brie' &&
//     this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
//   ) {
//     if (this.items[i].quality > 0) {
//       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//         this.items[i].quality = this.items[i].quality - 1;
//       }
//     }
//   } else {
//     if (this.items[i].quality < 50) {
//       this.items[i].quality = this.items[i].quality + 1;
//       if (
//         this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'
//       ) {
//         if (this.items[i].sellIn < 11) {
//           if (this.items[i].quality < 50) {
//             this.items[i].quality = this.items[i].quality + 1;
//           }
//         }
//         if (this.items[i].sellIn < 6) {
//           if (this.items[i].quality < 50) {
//             this.items[i].quality = this.items[i].quality + 1;
//           }
//         }
//       }
//     }
//   }
//   if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//     this.items[i].sellIn = this.items[i].sellIn - 1;
//   }
//   if (this.items[i].sellIn < 0) {
//     if (this.items[i].name != 'Aged Brie') {
//       if (
//         this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
//       ) {
//         if (this.items[i].quality > 0) {
//           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//             this.items[i].quality = this.items[i].quality - 1;
//           }
//         }
//       } else {
//         this.items[i].quality =
//           this.items[i].quality - this.items[i].quality;
//       }
//     } else {
//       if (this.items[i].quality < 50) {
//         this.items[i].quality = this.items[i].quality + 1;
//       }
//     }
//   }
// }

// return this.items;
