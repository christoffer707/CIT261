async function locateScalpel(nest) {
  let current = nest.name;
  for (;;) {
  	let next = await anyStorage(nest, current, "scalpel");
    if (current == next) break;
    current = next;
  }
  return current;
}

function locateScalpel2(nest) {
  function next(current) {
  	return anyStorage(nest, current, "scalpel")
      .then(ant => ant == current ? ant : next(ant));
  }
  return next(nest.name);
}

locateScalpel(bigOak).then(console.log);
// → Butcher's Shop
locateScalpel2(bigOak).then(console.log);
// → Butcher's Shop