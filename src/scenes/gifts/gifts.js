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

const Gifts = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Gifts</Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = () => {
  return {};
};

Gifts.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Gifts);
