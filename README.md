# Challenge proposal for my application to the Mindera Graduate Program


``cd MinderaGP``

``npm install``

open an android virtual device from Android Studio and run ``react-native run-android`` or just run ``react-native run-ios`` for an iOS simulator.

for testing to work:
1. add ``console: true`` to ``babel-plugin-jest-hoist/build/index.js``
2. ```
"jest": {
  "preset": "react-native",
  "transformIgnorePatterns": [
    "node_modules/(?!react-native|native-base-shoutem-theme|@shoutem/animation|@shoutem/ui|tcomb-form-native)"
  ]
}
```

---

To solve the front end challenge I used react native (no CRNA). I've been learning reactJS and react native in the last few months at a slow pace and it seemed like a good opportunity to get more into it.

At first I made the app as simple as possible using only [react navigation](https://reactnavigation.org). At a later stage I decided to add [redux](https://redux.js.org), axios and [native base](https://nativebase.io) to learn how to use them.

I'm also learning testing with jest and enzyme, but so far I haven't got much success, so I didn't merge it to the master branch yet. I will keep a testing branch to keep the learning going on, but it's better not to consider it as I might break some things on the app.

---

#### side note:

Not as part of the challenge, but I made a simple API with php just to read from a mysql database and show some dummy content to populate the app.

https://react.joaobelo.pt/events

https://react.joaobelo.pt/days/1

https://react.joaobelo.pt/galleries/1


image samples from here:

https://samples.joaobelo.pt
