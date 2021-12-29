![GitHub last commit](https://img.shields.io/github/last-commit/dell2duo/react-native-mvvm-template?style=plastic)
![GitHub contributors](https://img.shields.io/github/contributors/dell2duo/react-native-mvvm-template?style=plastic)
![GitHub forks](https://img.shields.io/github/forks/dell2duo/react-native-mvvm-template?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/dell2duo/react-native-mvvm-template?style=plastic)
![GitHub watchers](https://img.shields.io/github/watchers/dell2duo/react-native-mvvm-template?style=plastic)
![GitHub repo size](https://img.shields.io/github/repo-size/dell2duo/react-native-mvvm-template?style=plastic)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dell2duo/react-native-mvvm-template?style=plastic)
![GitHub issues](https://img.shields.io/github/issues/dell2duo/react-native-mvvm-template?style=plastic)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/dell2duo/react-native-mvvm-template?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/dell2duo/react-native-mvvm-template?style=plastic)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/dell2duo/react-native-mvvm-template?style=plastic)
![GitHub](https://img.shields.io/github/license/dell2duo/react-native-mvvm-template?style=plastic)

# React Native MVVM Template

This project is a template for React Native applications using the MVVM (Model-View-ViewModel) architecture. For this to work, we used the [MobX](https://mobx.js.org/README.html) and [MobX-React](https://github.com/mobxjs/mobx/tree/main/packages/mobx-react) library as a state management solution. You can also use the [ContextAPI](https://pt-br.reactjs.org/docs/context.html) to inject some dependencies troughout the application. The [React Navigation](https://reactnavigation.org/docs/getting-started/) library is used to create the navigation system.

This template comes with a Counter exemple that you can use to test the application and understand more about the solution, also comes with a simple routing system.

---

## Understanding the architecture

React is a very handful and easy to use framework, but many times I felt very stuck in using the FLUX architecture and ContextAPI or Redux to manage the state. As a challenge, I decided to create this template as a study of how a MVVM architecture would work on a React application, and found the MobX state management solution to be very powerful for this situation by using the [observable](https://refactoring.guru/design-patterns/observer) design pattern.

If you're more interested in why to use this or how the MVVM of this particular project, check out the [Credits](#credits) section.

---

## Installation

You can download, fork or clone this project as you wish. I would recommend create a new react native project with Expo and then use this as a base for your project.

## Run

Use the package manager [npm](https://docs.npmjs.com/about-npm) to download the project dependencies.

```bash
npm install
```

With that out of the way, you can run the application by typing the following command:

```bash
expo start
```

## Credits

This template was created by [Rafael Rocha](https://github.com/dell2duo) and is based on this [article](https://medium.cobeisfresh.com/level-up-your-react-architecture-with-mvvm-a471979e3f21).

## Contributing

Pull requests are welcome and this is a widly open repository. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
