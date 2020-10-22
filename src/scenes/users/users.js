/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text, View} from 'native-base';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Users = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Users</Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = () => {
  return {};
};

Users.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Users);
