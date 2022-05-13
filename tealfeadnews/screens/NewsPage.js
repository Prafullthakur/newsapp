import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import BackIcon from '../assets/Icons/arrow.png';
import LinkIcon from '../assets/Icons/link.png';
export default function NewsPage({route, navigation}) {
  //initiated state to store newspage data.
  const [data, setData] = useState('');

  //storing routes.params to the data state which are passed from Card.js
  useEffect(() => {
    setData(route.params.info);
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.headCont}>
        <ImageBackground
          source={{uri: data.urlToImage}}
          resizeMode="cover"
          style={styles.headImage}>
          <TouchableOpacity
            style={styles.backIconCover}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={BackIcon} style={styles.backIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkCont}
            onPress={() => {
              Linking.openURL(data.url);
            }}>
            <Image source={LinkIcon} style={styles.linkIcon} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.middleCont}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.authorCont}>
            <Text style={styles.authorText}>Author : </Text>
            <Text style={styles.authorName}>{data.author}</Text>
          </View>
          <View style={styles.sourceCont}>
            <Text style={styles.sourceText}>Source : </Text>
            <Text style={styles.sourceName}>
              {data.source && data.source.name ? data.source.name : ''}
            </Text>
          </View>
          <View style={styles.dateCont}>
            <Text style={styles.publishText}>Published At : </Text>
            <Text style={styles.publishTime}>{data.publishedAt}</Text>
          </View>
          <View style={styles.descriptionCont}>
            <Text style={styles.descriptionText}>Description : </Text>
            <Text style={styles.description}>{data.description}</Text>
          </View>
          <View style={styles.contentCont}>
            <Text style={styles.contentText}>Content : </Text>
            <Text style={styles.content}>{data.content}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  headCont: {
    width: '100%',
    height: 300,
  },
  headImage: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  backIcon: {
    width: 27,
    height: 27,
  },
  backIconCover: {
    backgroundColor: 'rgba(104,97,97,0.7)',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
  },
  linkCont: {
    borderRadius: 100,
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    alignSelf: 'flex-start',
  },

  linkIcon: {
    height: 25,
    width: 25,
  },

  title: {
    color: 'black',
    fontSize: 17,
    marginBottom: 8,
    fontWeight: 'bold',
    letterSpacing: 0.6,
  },
  middleCont: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 22,
  },

  authorCont: {
    marginVertical: 8,
    flexDirection: 'row',
    backgroundColor: '#DCDCDC',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    overflow: 'scroll',
  },

  sourceCont: {
    backgroundColor: '#DCDCDC',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 4,
    marginVertical: 8,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  dateCont: {
    backgroundColor: '#DCDCDC',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 4,
    marginVertical: 8,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  authorText: {
    color: 'black',
    fontSize: 14,
  },
  authorName: {
    color: 'black',
    fontSize: 14,
  },
  sourceText: {
    color: 'black',
    fontSize: 14,
  },
  sourceName: {
    color: 'black',
    fontSize: 14,
  },
  publishText: {
    color: 'black',
    fontSize: 14,
  },
  publishTime: {
    color: 'black',
    fontSize: 14,
  },
  descriptionCont: {
    marginTop: 5,
  },
  descriptionText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
  description: {
    fontSize: 15,
    paddingVertical: 3,
    lineHeight: 20,
    letterSpacing: 0.6,
  },
  descriptionCont: {
    marginTop: 8,
  },
  descriptionText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
  description: {
    fontSize: 15,
    paddingVertical: 3,
    lineHeight: 20,
    letterSpacing: 0.6,
  },
  contentCont: {
    marginTop: 8,
  },
  contentText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
  content: {
    fontSize: 15,
    paddingVertical: 3,
    lineHeight: 20,
    letterSpacing: 0.6,
  },
});
