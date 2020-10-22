import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const setDataToStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    Alert.alert('Error', error, [{text: 'Close'}]);
  }
};

const getDataFromStorage = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    Alert.alert('Error', error, [{text: 'Close'}]);
  }
};

const removeDataFromStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    Alert.alert('Error', error, [{text: 'Close'}]);
  }
};

export default {
  setDataToStorage,
  getDataFromStorage,
  removeDataFromStorage,
};
