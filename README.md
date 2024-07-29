# A small demo on using icons in react-native


![React Native Example App With react native vector icons](https://github.
com/skyrul/VectorIcons/blob/52c9011150a0a61a415c121d91b1166678f2a2db/assets/Simulator%20Screenshot%20-%20iPhone%20SE%20(3rd%20generation)%20-%202024-07-29%20at%2012.04.46.png)

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
