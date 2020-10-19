import {StyleSheet} from 'react-native';

import UTILS from './core/utils';
import LAYOUT from './layout';
import BUTTONS from './elements/buttons';
import FORM from './elements/form';
import TEXT from './elements/text';

export const GENERAL_STYLES = StyleSheet.create({
  ...UTILS.SPACING,
  ...LAYOUT,
  ...BUTTONS,
  ...FORM,
  ...TEXT,
});
