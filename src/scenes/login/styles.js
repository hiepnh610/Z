import {StyleSheet} from 'react-native';

import VARIABLES from 'src/styles/core/variables';
import {GENERAL_STYLES} from 'src/styles';

export const COMPONENT_STYLES = StyleSheet.create({
  HEADING: {
    ...GENERAL_STYLES.MARGIN_BOTTOM_15,
    fontSize: VARIABLES.FONT_SIZE.XXL,
    textAlign: 'center',
  },
});
