import Toast from 'react-native-root-toast';

const showInfoMessage = (message: string) => {
  Toast.show(message, {
    position: Toast.positions.TOP,
    backgroundColor: 'white',
    textColor: 'black',
  });
};

export {showInfoMessage};
