/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import {Text, View} from 'native-base';
import {useForm, Controller} from 'react-hook-form';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import LOGIN_ACTIONS from './store/actions';
import {GENERAL_STYLES} from 'src/styles';
import {COMPONENT_STYLES} from './styles';

const Login = ({dispatch}) => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (formData) => {
    dispatch({
      type: LOGIN_ACTIONS.LOGIN,
      payload: formData,
    });
  };

  return (
    <View style={GENERAL_STYLES.MIDDLE_CONTENT} padding="5%">
      <Text style={COMPONENT_STYLES.HEADING}>Sign In</Text>

      <View style={GENERAL_STYLES.MARGIN_BOTTOM_15}>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={(textValue) => onChange(textValue)}
              value={value}
              style={GENERAL_STYLES.FORM_CONTROL}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
          )}
          name="username"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.username && (
          <Text style={GENERAL_STYLES.TEXT_ERROR}>
            Username cannot be blank.
          </Text>
        )}
      </View>

      <View style={GENERAL_STYLES.MARGIN_BOTTOM_15}>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={(textValue) => onChange(textValue)}
              value={value}
              secureTextEntry={true}
              style={GENERAL_STYLES.FORM_CONTROL}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
          )}
          name="password"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.password && (
          <Text style={GENERAL_STYLES.TEXT_ERROR}>
            Password cannot be blank.
          </Text>
        )}
      </View>

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={GENERAL_STYLES.PRIMARY_BUTTON}>
        <Text style={GENERAL_STYLES.TEXT_PRIMARY_BUTTON}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  const {token} = state;

  return {token};
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Login);
