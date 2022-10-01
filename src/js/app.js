// const obj = {
//   name: 'мечник',
//   health: 10,
//   level: 2,
//   attack: 80,
//   defence: 40,
// };

export default function orderByProps(obj, order) {
  const objIn = { ...obj };
  const arrOut = [];

  for (const property in order) {
    if (Object.prototype.hasOwnProperty.call(objIn, order[property])) {
      // console.log(objIn[order[property]]);
      arrOut.push({ key: order[property], value: obj[order[property]] });
      delete objIn[order[property]];
    } else {
      throw new Error(`Такого свойства ${order[property]} нет!`);
    }
  }

  const keysObjIn = Object.keys(objIn);

  if (keysObjIn.length > 0) {
    keysObjIn.sort();
    keysObjIn.forEach((item) => {
      arrOut.push({ key: item, value: obj[item] });
    });

    // console.log(keysObjIn);
    // console.log(objIn);
  }
  // console.log(arrOut);
  return arrOut;
}

// orderByProps(obj, ['name', 'level']);

// const order1 = ['name', 'level'];
// const order2 = ['name', 'level', 'health', 'defence', 'attack'];
// const received1 = orderByProps(obj, order1);
// const received2 = orderByProps(obj, order2);
// console.log(received1);
// console.log(received2);
