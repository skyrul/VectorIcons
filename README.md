# A small demo on using icons in react-native

This is an app to demonstrate the use of MaterialIcons, Fontawesome, etc. in it's usage in projects. 😷

Has some examples on how to implement the icons into react native apps, and this runs on both iOS and Android.
I can also do the icons inside a button, all thanks to [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)! 🚀

## How?

VectorIcons uses [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons) to display a 
icons such as MaterialIcons, Fontawesome, Entypo, etc.

Using the react native ionicons [react-native-ionicons](https://www.npmjs.com/package/react-native-ionicons) and the
[react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons) packages, we can implement icons 
and 
icons in buttons.


> See [`App.tsx`](https://github.com/skyrul/VectorIcons/blob/91deed25ecbef90789ba980f088c54b575b83aba/App.tsx) for the full code.

## How's the Performance?

If you know me you know that my libs are always really fast.
This is no exception:
- Frame Processors are built almost entirely with C++ to run Frame analysis with almost zero overhead.
- Frame Processors run in [Worklets](https://github.com/margelo/react-native-worklets-core/blob/main/docs/WORKLETS.md) on a separate Thread, so they are not interrupted by JS lags.
- The MLKit models are built with native code and use GPU-acceleration
- VisionCamera can provide either `yuv` or efficiently converted `rgb` buffers for faster ML execution
- VisionCamera supports GPU buffer compression
