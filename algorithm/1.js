// 1
var check_list = [true, false, false, true, false];
console.log("1. before --> " + check_list);
for(let i = 0; i < check_list.length; i++){
  check_list[i] = !check_list[i]
}
console.log("after --> " + check_list);

// 2
var grade = [75, 82 ,91];
var sum = 0, avg = 0;
/* for(let i = 0; i < grade.length; i++){
  sum += grade[i];
} */
for(const p of grade){
  sum += p;
}
avg = sum / grade.length;
avg = avg.toFixed(2);
console.log(`2. 총점 : ${sum}점, 평균점수 : ${avg}점`);

// 3
var time = [7, 5, 5, 5, 5, 10, 7];
var money = 0;
for(let i = 0; i < time.length; i++){
  money += time[i] * ((i < 4) ? 4500 : 5200);
}
console.log(`3. 1주일간의 전체 급여: ${money}원`);

//4,5,6
const price = [38000, 20000, 17900, 17900];
const qty = [6, 4, 3, 5];
let money2 = 0;
//var ex = [];
let money3 = price[0] * qty[0];
let count = 0;

for(let i = 0; i < price.length; i++){
  money2 += price[i] * qty[i];
  //ex[i] = price[i] * qty[i];
  const sum = price[i] * qty[i];
  if(money3 < sum){
    money3 = sum;
  }
  if(sum >= 80000){
    count++;
  }
}
//ex.sort((a, b) => b - a)
console.log(`4. 전체 결제 금액: ${money2}원`);
console.log(`5. 가장 높은 상품금액: ${money3}원`);
console.log(`6. 무료배송 항목: ${count}건`);

//7
const price2 = [209000, 109000, 119000, 109000, 94000];
console.log(`상품가격 --> ${price2}`);

for(let i = 0; i < price2.length -1; i++){
  for(let j = i+1; j < price2.length; j++){
    if(price2[i] > price2[j]){
      var tmp = price2[i];
      price2[i] = price2[j];
      price2[j] = tmp;
    }
  }
}
console.log(`7. 낮은가격순 --> ${price2}`)

//8
var arr = [5, 3, 2, 8, 9];
console.log(`8. before --> ${arr}`);
for(let i = 0; i < parseInt(arr.length/2); i++){
  var tmp = arr[i];
  arr[i] = arr[arr.length-1-i];
  arr[arr.length-1-i] = tmp;
}
console.log(`after --> ${arr}`);


//9, 10
var student = ['둘리', '도우너', '또치', '희동'];
var grade = [
  [78, 89, 96],
  [62, 77, 67],
  [54, 90, 80],
  [100, 99, 98]
]
var sum = 0, avg = 0;
var class_sum = 0;
var class_avg = 0;

for(let i = 0; i < grade.length; i++){
  sum = 0;
  for(let j = 0; j < grade[i].length; j++){
    sum += grade[i][j];
  }
  avg = sum/grade[i].length;
  class_sum += avg;
  avg = avg.toFixed(2);
  console.log(`9. ${student[i]} 총점 : ${sum}점, 평균: ${avg}점`);
}
class_avg = class_sum / student.length;
class_avg.toFixed(2);
console.log(`10. 반평균= ${class_avg}점`);

//11
let inven = [
  [500, 291], [320, 586], [100, 460], [120, 558], [92, 18], [30, 72]
];
let total_price = 0;
for(let i = 0; i < inven.length; i++){
  const item_price = (inven[i][0]*0.9) * inven[i][1];
  total_price += item_price;
}
console.log(`11-1. 아이템 총 판매가격: ${total_price}G`);

//11-2
const inven2 = [
  [500, 320, 100, 120, 92, 30],
  [291, 586, 460, 558, 18, 72]
];
let total_price2 = 0;
for(let i = 0; i < inven2[0].length; i++){
  total_price2 += (inven2[0][i] * 0.9) * inven2[1][i];
}
console.log(`11-2. 아이템 총 판매가격: ${total_price2}G`);