import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 15}}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('TSR')}>
        <Text style={styles.cardTxt}>Translation, Scaling & Rotation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Interpolate')}>
        <Text style={styles.cardTxt}>Interpolate (Change Size & Shape)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    backgroundColor: '#fff',
    marginTop: 15,
    marginHorizontal: 20,
  },
  cardTxt: {fontSize: 16, fontWeight: 'bold'},
});

export default Home;
