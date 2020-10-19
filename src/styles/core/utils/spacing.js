const minSpacing = 0;
const maxSpacing = 50;
const step = 5;

const SPACING = {};
const SIDES = ['Top', 'Right', 'Bottom', 'Left'];

for (let num = minSpacing; num <= maxSpacing; num += step) {
  SIDES.forEach((side) => {
    SPACING[`MARGIN_${side.toUpperCase()}_${num}`] = {
      [`margin${side}`]: num,
    };
  });
}

export default SPACING;
