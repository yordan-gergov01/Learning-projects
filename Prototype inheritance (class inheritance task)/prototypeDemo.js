let head = {
    glasses: 1
  
  };
  
  let table = {
    pen: 3
  };
  Object.setPrototypeOf(table, head);
  
  let bed = {
    sheet: 1,
    pillow: 2
  };
  Object.setPrototypeOf(bed, table);
  
  let pockets = {
    money: 2000
  };
  Object.setPrototypeOf(pockets, bed);

  console.log(pockets.pen);

