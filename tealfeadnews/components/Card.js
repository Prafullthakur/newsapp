import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';

import React from 'react';
import Link from '../assets/Icons/link.png';

export default function Card({info, navigation}) {
  return (
    <TouchableOpacity
      style={styles.cardCont}
      onPress={() => {
        navigation.navigate('NewsPage', {
          info: info,
        });
      }}>
      <ImageBackground
        source={{uri: info.urlToImage}}
        resizeMode="cover"
        imageStyle={{borderRadius: 10}}
        style={styles.imageBackground}>
        <TouchableOpacity
          style={styles.linkCont}
          onPress={() => {
            Linking.openURL(info.url);
          }}>
          <Image source={Link} style={styles.linkIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>{info.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  cardCont: {
    width: '90%',
    height: 470,
    marginVertical: 10,
    alignSelf: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    color: 'white',
    paddingHorizontal: 4,
    fontSize: 17.5,
    fontWeight: '500',
    paddingVertical: 8,
    alignSelf: 'flex-start',
  },
  linkCont: {
    borderRadius: 100,
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
  },

  linkIcon: {
    height: 28,
    width: 28,
  },
});
