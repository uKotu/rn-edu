import {StyleSheet, View} from 'react-native';
import {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  loginAsync,
  selectAuthentication,
} from '../../redux/features/authentication/authenticationSlice';
import {showInfoMessage} from '../../util/messages';

export const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const {isBeingAuthenticated} = useAppSelector(selectAuthentication);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, setPasswordVisibility] = useState<boolean>(false);

  function handleLoginPressed(): void {
    if (validateInputs()) {
      dispatch(loginAsync({username, password}));
    }
  }

  function validateInputs(): boolean {
    if (!username) {
      showInfoMessage('Missing username');
      return false;
    }
    if (!password) {
      showInfoMessage('Missing password');
      return false;
    }
    return true;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{backgroundColor: 'white'}}
        mode={'outlined'}
        value={username}
        autoCapitalize={'none'}
        label="username"
        onChangeText={setUsername}
      />
      <TextInput
        style={{backgroundColor: 'white'}}
        mode={'outlined'}
        textContentType={'password'}
        secureTextEntry={!isPasswordVisible}
        autoCapitalize={'none'}
        label={'password'}
        value={password}
        onChangeText={setPassword}
        right={
          <TextInput.Icon
            icon={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
            onPress={() => {
              setPasswordVisibility(!isPasswordVisible);
            }}
          />
        }
      />
      <Button
        style={{backgroundColor: 'green'}}
        textColor={'white'}
        onPress={handleLoginPressed}
        disabled={isBeingAuthenticated}
        loading={isBeingAuthenticated}>
        Login
      </Button>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: 35,
    backgroundColor: 'white',
  },
});
