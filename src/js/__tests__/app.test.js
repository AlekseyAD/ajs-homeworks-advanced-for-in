import orderByProps from '../app';

test('Проверка сортировки по ключам', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const objOrder = ['name', 'level'];

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const received = orderByProps(obj, objOrder);
  expect(received).toEqual(expected);
});

test('Проверка сортировки по алфавиту', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const objOrder = ['name', 'level', 'health', 'defence', 'attack'];

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'health', value: 10 },
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
  ];
  const received = orderByProps(obj, objOrder);
  expect(received).toEqual(expected);
});

test('Проверка вывода ошибки, когда указано не существующее свойство', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const objOrder = ['dexterity', 'level', 'health', 'defence', 'attack'];
  expect(() => {
    orderByProps(obj, objOrder);
  }).toThrowError(new Error('Такого свойства dexterity нет!'));
});
