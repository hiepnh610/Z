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

const Transactions = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Transactions</Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = () => {
  return {};
};

Transactions.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Transactions);
