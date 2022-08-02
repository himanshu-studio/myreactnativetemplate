# Example
This is a generic React Native boilerplate, give your project description here

Developer Names:
Himanshu Yadav

## Key Features
The boiler plate consists of following:
- Folder structure
- Axios setup- for hitting API also a common API file that acts as a middleware
- Navigational setup- react-native-gesture-handler, react-native-reanimated, react-native-screens
   @react-navigation/native, @react-navigation/native-stack, "@react-navigation/bottom-tabs are the libraries providing 
    the same. The route file is NavigationRoutes.js
- Redux setup- Setup with Redux logger, Redux thunk as middleware and Redux persist for persistence
    For Persisting data (Use PersistedReducer.js) and for normal cases (GenericReducer.js)


## Before you start
You need to setup following environment in your system to run react-native project. 
- follow the instructions at https://reactnative.dev/docs/environment-setup.
- Install Java 15 and set its path globally in your system [Link](https://docs.oracle.com/en/java/javase/15/install/installation-jdk-macos.html#GUID-2FE451B0-9572-4E38-A1A5-568B77B146DE) 
- Download and install Android studio and set its SDK path globally in your system [Link](https://developer.android.com/studio)
- Download and install node v16.X.X [Link](https://nodejs.org/en/download/)
- Install Android Studio [Link](https://developer.android.com/studio/)
- Install xCode (Mac Only) 
- Install brew, [Link] (https://brew.sh/).
- Install cocoapods using 'brew install cocoapods' command on terminal.
- For M1 Mac enable the option `Open using Rosetta` Xcode -> Get Info -> Open using Rosetta.
- Download and install vsCode editor [Link](https://code.visualstudio.com/download)

## Versioning for tool
- React native : 0.68.2
- Node : 16.15.1
- Npm : 8.11.0
- Android studio : Android Studio Chipmunk | 2021.2.1 Patch 1
- Gradle: 7.3.3
- xCode : 13.4.1 

## Code clone and test the setup 
- iOS Xcode all set up e.g. you can build and run a sample app.
- Android SDK all set up e.g. you can build and run a sample app.
- Get SSH of your system and add in your profile. [Link](https://docs.github.com/en/enterprise-server@3.1/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- Clone code from `git@github.com:studiographene/reactnativeboilerplate.git` while using SSH
- Go in to your project folder by `cd {Project_folder}` and install npm by `npm install`.

## Getting started for Android

- Run `npm run android`
- In case `Metro Bundler` does not start automatically so use `npm start` to start npm in your system
## Getting started for iOS

- Go into 'iOS' folder and run command 'pod install'
- Run `npm run ios`
- In case `Metro Bundler` does not start automatically so use `npm start` to start npm in your system
​
## Releasing
- Do __not__ generate releases unless you are somebody who has been properly authorized and trained.
- Check all the version #s against what has already been released via play store or the app stores or wireless installtion tools. Bump the version #s as appropriate to maintain monotonically increasing values.
​
## Tips
​
If you get an error after getting the latest with "git pull", then you might need to do some manual intervention due to whatever was just changed:
​
- Try "npm install" to get latest packages and then run `npx pod install`.
​
## Visual Studio IDE setup and extensions
​
  Look for these extensions from the IDE:
​
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
​  - [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)
  - [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
  - [Svg Preview](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview)
  - [vscode-author-generator](https://marketplace.visualstudio.com/items?itemName=edwardhjp.vscode-author-generator)