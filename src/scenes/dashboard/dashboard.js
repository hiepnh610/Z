/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Text, View} from 'native-base';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import ROOT_ACTIONS from 'src/store/actions';
import {GENERAL_STYLES} from 'src/styles';
import utils from 'src/utils';

const Dashboard = ({dispatch}) => {
  const logout = () => {
    dispatch({
      type: ROOT_ACTIONS.AUTH_ACTIONS.SET_TOKEN,
      payload: '',
    });

    dispatch({
      type: ROOT_ACTIONS.AUTH_ACTIONS.SET_SIGNED_IN,
      payload: false,
    });

    utils.asyncStorage.removeDataFromStorage('token');
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Dashboard</Text>

        <TouchableOpacity
          onPress={logout}
          style={GENERAL_STYLES.PRIMARY_BUTTON}>
          <Text style={GENERAL_STYLES.TEXT_PRIMARY_BUTTON}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = () => {
  return {};
};

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Dashboard);
