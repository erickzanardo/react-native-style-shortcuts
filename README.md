# React Native Style Shortcuts 

This package offer some shortcuts for writing ReactNative styles, for example:

Instead of writing:
```javascript
const styles = StyleSheet.create({
  container: {
    paddingTop: 1,
    paddingRight: 3,
    paddingBottom: 4,
    paddingLeft: 5,
  },
});
```

You could write the following:
```javascript
const styles = StyleSheet.create({
  container: {
    ...padding(1, 3, 4, 5),
  },
});
```

Avaiable shortcuts:

 - `padding`
 - `margin`
 - `borderRadius`
