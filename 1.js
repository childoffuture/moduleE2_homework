let result = Number(prompt("enter value"));

// Прибавляем к результату 1, тк в задании написано:
// с помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число
result++;

if (typeof(result) == "number")
{
  console.log(result);
  if (!isNaN(result))
  {
    console.log(result);
    if (result % 2 == 0)
      alert ("число четное");
    else
      alert ("число нечетное");
  }
  else
    alert("Упс, кажется, вы ошиблись");
}

