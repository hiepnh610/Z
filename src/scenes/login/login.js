/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TextInput, Button, StyleSheet} from 'react-native';
import {Container, Text, View} from 'native-base';
import {useForm, Controller} from 'react-hook-form';

const Login = () => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container padder>
      <View style={styles.view} padder>
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
              secureTextEntry={true}
              style={styles.input}
            />
          )}
          name="password"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.password && <Text>Password cannot be blank.</Text>}

        <Button title="Submit" onPress={handleSubmit(onSubmit)} color="green" />
      </View>
    </Container>
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  heading: {
    fontSize: 30,
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Login;
