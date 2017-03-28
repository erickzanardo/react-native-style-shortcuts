const boxStyle = style => function() {
  const assembleObj = (top, bottom, left, right) => ({
    [`${style}Top`]: top,
    [`${style}Bottom`]: bottom,
    [`${style}Left`]: left,
    [`${style}Right`]: right,
  })

  return (
    arguments.length == 1 ? assembleObj(arguments[0], arguments[0], arguments[0], arguments[0]) :
    arguments.length == 2 ? assembleObj(arguments[0], arguments[0], arguments[1], arguments[1]) :
    arguments.length == 3 ? assembleObj(arguments[0], arguments[2], arguments[1], arguments[1]) :
    arguments.length == 4 ? assembleObj(arguments[0], arguments[2], arguments[3], arguments[1]) :
    null
  );
};

const assembleBorderRadius = (topLeft, topRight, bottomLeft, bottomRight) => ({
  borderTopLeftRadius: topLeft,
  borderTopRightRadius: topRight,
  borderBottomLeftRadius: bottomLeft,
  borderBottomRightRadius: bottomRight,
});

const borderRadius = function() {
  return (
    arguments.length == 1 ? assembleBorderRadius(arguments[0], arguments[0], arguments[0], arguments[0]) :
    arguments.length == 2 ? assembleBorderRadius(arguments[0], arguments[1], arguments[1], arguments[0]) :
    arguments.length == 3 ? assembleBorderRadius(arguments[0], arguments[1], arguments[1], arguments[2]) :
    arguments.length == 4 ? assembleBorderRadius(arguments[0], arguments[1], arguments[3], arguments[2]) :
    null
  );
};

module.exports = {
  margin: boxStyle("margin"),
  padding: boxStyle("padding"),
  borderRadius,
};
