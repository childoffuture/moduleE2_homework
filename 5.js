let list = [1,2,3,4,5,6,7];

console.log(list.length);

list.map(function(item, index, array) {
  console.log(item)
  return item;
});
