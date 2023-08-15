let users = {};

for (let i = 1; i <= 10; i++) {
  let name = prompt(`Введите имя пользователя ${i}`);
  let age = prompt(`Введите возраст пользователя ${i}`);

  const user = {
    id: i,
    name: name,
    age: age
  };

  users[i] = user;
}

for (let userId in users) {
    let user = users[userId];
  console.log(`Пользователь ${user.id}`);
  console.log(`Имя - ${user.name}`);
  console.log(`Возраст - ${user.age}`);
  console.log('-');
}

console.log(users);