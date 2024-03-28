const clothing = ["shirt", "pants", "jacket"];
const color = ["black", "white"];
const size = ["S", "M", "L"];

const generateList = () => {
  return clothing.flatMap(c => {
    return color.flatMap(col => {
      return size.map(s => {
        return `${c} ${col} ${s}`;
      });
    });
  });
};

const list = generateList();

console.log(list);