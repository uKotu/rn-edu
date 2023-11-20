import {SneezerData} from '../../../redux/features/authentication/models/sneezerData';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

const SneezeCounterItem = (sneezer: SneezerData) => {
  const {numberOfSneezes, user} = sneezer;
  return (
    <View style={{flex: 1}}>
      <Text>{user.username}</Text>
      <Text>
        {numberOfSneezes > 0
          ? `Number of sneezes: ${sneezer.numberOfSneezes}`
          : 'This user has not yet sneezed 👀'}
      </Text>
    </View>
  );
};
