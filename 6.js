let list1 = [1,1,1,1,1,1,1];
let list2 = [1,2,3,4,5,6,7];

function checkItems(item, index, array) {
  return item == array[0];
}

// Проверка что все элементы массива равны друг другу
console.log(list1.every(checkItems));
console.log(list2.every(checkItems));

console.log("-------------")


function checkItems2(array)
{
  let result = false;
  for (let i = 0; i < array.length - 1; ++i)
  {
    if(array.includes(array[i], i + 1))
     {
       result = true;
       break;
     }
  }
  return result;
}

// Проверка, что хотя бы один элемент массива равен другому
console.log(checkItems2(list1))
console.log(checkItems2(list2))
