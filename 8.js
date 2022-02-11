let map = {
  1: 'value',
  2: 42
};

for (let [key, value] of Object.entries(map))
{
  console.log(`Ключ - ${key}, значение - ${value}`);
}
