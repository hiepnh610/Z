/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

import {useForm, Controller} from 'react-hook-form';

const Login = () => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <View style={styles.view}>
      <Text style={styles.heading}>Sign In</Text>

      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(textValue) => onChange(textValue)}
            value={value}
            style={styles.input}
          />
        )}
        name="username"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.username && <Text>Username cannot be blank.</Text>}

      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(textValue) => onChange(textValue)}
            value={value}
            style={styles.input}
          />
        )}
        name="password"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.password && <Text>Password cannot be blank.</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    fontSize: 14,
    marginBottom: 15,
    padding: 10,
  },

  view: {
    paddingLeft: 15,
    paddingRight: 15,
  },

  heading: {
    fontSize: 30,
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Login;
