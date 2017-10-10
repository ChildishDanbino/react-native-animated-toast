# react-native-animated-toast
Animated Toast Notification for React Native

### Installation & Usage
 
 Install NPM package

```sh 
npm install react-native-animated-toast
```

Import the Notification Component into your project and mount the component.
You can style your component by passing a style object.

```javascript
import AnimatedNotification from 'react-native-animated-toast';

    const style = {
      width: '95%',
      position: 'absolute',
      marginHorizontal: 10,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      backgroundColor: '#018ad1',
      zIndex: 3
    };

<AnimatedNotification style={style} visible={this.props.visible}>
  <Text>A Test Message</Text>
</AnimatedNotification>
```

### Props

* Note: Unlike most Notification Libs you pass a component in as children to render the message. This gives the user full control over styling / adding additional functionaltiy to the Notification

Name                | Default                  |  Type    | Description
--------------------|--------------------------|----------|---------------------------
topPosition         | 40                       | Number   | The Top Position for the Component to Animate to
visible             | false                    | Bool     | The visibility of Notification
hideDuration        | 2000                     | Number   | The duration (ms) the Notification is visible before auto hiding
children            | NA (Required)            | Node     | Children Components to render usually a <Text> Element
