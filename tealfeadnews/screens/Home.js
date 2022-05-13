import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../components/Card';

export default function Home({navigation}) {
  //initiated state to store news data.
  const [data, setData] = useState([]);

  //requesting to the provided API for fetching data and storing it in data state.
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://saurav.tech/NewsAPI/everything/cnn.json',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        response &&
          response.data &&
          response.data.articles &&
          setData(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //renderer component for FlatList
  const renderItem = info => {
    return <Card info={info.item} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>TealFeadNews</Text>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.publishedAt}
        />
      ) : (
        <View style={styles.loadingCont}>
          <ActivityIndicator
            color={'skyblue'}
            size={30}
            style={styles.loading}
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  headText: {
    fontSize: 23,
    color: 'black',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  newsCont: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingCont: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    alignSelf: 'center',
    paddingBottom: 40,
  },
});
