//2
const numbers =[1,2,3,4,5,6,7,8,9,10];
const filteredNumbers = numbers.filter(num => num >= 5);

console.log(filteredNumbers); 
//3
const furniture = [`Стол`, `Стул`, `Диван`, `Шкаф`, `Кровать`,];
const hasSofa = furniture.includes(`Диван`)

console.log( `есть ли Диван в списке?`, hasSofa);

const hasFridge = furniture.includes(`Холодильник`);
console.log(` есть ли холодильник в списке?`, hasFridge);

//4
function reverseMyArray(anyArray) {
  anyArray.reverse();
  return anyArray;
}
// numbers
reverseMyArray(numbers);
console.log('перевернутые числа', numbers)
//furnirure
reverseMyArray(furniture);
console.log('перевернутая мебель', furniture);
//5,6
import { socialComments } from "./comments.js";

console.log(socialComments);
//7
const comEmails = socialComments.filter(Comment => Comment.email.includes(".com"));

console.log('комментарии с почтой .com:', comEmails);
//8
const updateComments = socialComments.map(Comment => {
  if (Comment.id <= 5) {
    return { ...Comment, postId: 2 };
  }else{ return { ...Comment, postId: 1 };}
});

console.log('обновление комментарии:', updateComments);
//9
const simplFailedCommets = socialComments.map(Comment => {
  return {
    id: Comment.id,
    name: Comment.name
  };
});

console.log('упрощенные комментарии:', simplFailedCommets);
//10
const validatedCommets = socialComments.map(Comment => {
  const isInvalid = Comment.body.length > 180;
  return { ...Comment, isInvalid: isInvalid};
});

console.log('Комментарии с валидацией:', validatedCommets);
//11
const emailsMap = socialComments.map(Comment => Comment.email);

console.log('почта через map:', emailsMap);

//11: Вариант через reduce
const emailsReduce = socialComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []); 

console.log('Почты через reduce:', emailsReduce);
//12/1
const emailsStr1 = emailsMap.toString();
console.log('через toString:', emailsStr1);
//12/2
const emailsStr2 = emailsMap.join(", ");
console.log('через join с пробелом:', emailsStr2);
//12/3
const emailsStr3 = emailsMap.join(" или ");
console.log('Список почт через "или":', emailsStr3);
