/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from 'native-base';
import {useForm, Controller} from 'react-hook-form';
import {connect} from 'react-redux';

import ACTIONS from 'src/store/actions';

const Login = ({navigation, dispatch}) => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    dispatch({
      type: ACTIONS.AUTH_ACTION.SET_SIGNED_IN,
      payload: true,
    });
  };

  return (
    <View style={styles.view} padding="5%">
      <Text style={styles.heading}>Sign In</Text>

      <View style={styles.viewGroup}>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={(textValue) => onChange(textValue)}
              value={value}
              style={styles.input}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
          )}
          name="username"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.username && (
          <Text style={styles.textError}>Username cannot be blank.</Text>
        )}
      </View>

      <View style={styles.viewGroup}>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={(textValue) => onChange(textValue)}
              value={value}
              secureTextEntry={true}
              style={styles.input}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
          )}
          name="password"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.password && (
          <Text style={styles.textError}>Password cannot be blank.</Text>
        )}
      </View>

      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text style={styles.textButton}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewGroup: {
    marginBottom: 15,
  },

  input: {
    borderColor: '#ccc',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    fontSize: 14,
    padding: 10,
  },

  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  heading: {
    fontSize: 30,
    marginBottom: 15,
    textAlign: 'center',
  },

  button: {
    alignSelf: 'stretch',
    backgroundColor: 'green',
    borderRadius: 4,
    paddingVertical: 10,
  },

  textButton: {
    color: 'white',
    textAlign: 'center',
  },

  textError: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
  },
});

const mapStateToProps = (state) => {
  const {token} = state;

  return {token};
};

export default connect(mapStateToProps)(Login);
