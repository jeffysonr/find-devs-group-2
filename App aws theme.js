import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Amplify, { Auth  } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { withAuthenticator , AmplifyTheme} from 'aws-amplify-react-native'



Amplify.configure(awsconfig)


const App = () => {

async function signOut(){
  try {
    await Auth.signOut()
  } catch (error) {
    console.log(error)
  }
}

  return (
    <View style={styles.container}>
      <Text>Welcome to AMplify</Text>
      <Button
      title='Sign Out'
      onPress={signOut}
      />
    </View>
  );
}

const signUpConfig = {
  header: "My Customized Sign Up",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Full name",
      key: "name",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 2,
      type: "string",
    },
    {
      label: "Username",
      key: "preferred_username",
      required: true,
      displayOrder: 3,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 4,
      type: "password",
    },
  ],
};

const customTheme = {...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: '#2D9135',
    borderRadius: 10,
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default withAuthenticator(App, {signUpConfig, theme: customTheme})