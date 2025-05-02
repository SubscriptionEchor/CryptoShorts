import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import {ApiContext} from './context';
import {getNewsByCategory, getAllNews} from '../Api/Api';

const ContextProvider = ({children}) => {
  const [news, setNews] = useState([]);
  const [source, setSource] = useState('cnn');

  const getData = async () => {
    try {
      const response = await axios.get(getAllNews(source));
      setNews(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ApiContext.Provider value={{news, setNews}}>
      {children}
    </ApiContext.Provider>
  );
};

export default ContextProvider;

const styles = StyleSheet.create({});
