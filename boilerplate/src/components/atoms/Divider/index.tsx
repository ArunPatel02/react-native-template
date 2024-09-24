import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { verticalScale } from 'react-native-size-matters';
import { useTheme } from '../../../theme/ThemeProvider';

//custom divider
const Divider = () => {
  const Theme = useTheme()

  const styles = StyleSheet.create({
    Divider : {
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#B8B8B8',
        marginVertical : 20
      },
    ORConatainer : {
        height: verticalScale(20),
        position: 'absolute',
        marginTop: -verticalScale(8),
        backgroundColor: Theme.colors.background,
        alignSelf: 'center',
        paddingHorizontal: 20,
      },
      text : {
        fontSize : Theme.fontSize.s,
        color : Theme.colors.text
      }
});
  return (
    <View
      style={styles.Divider}>
      <View
        style={styles.ORConatainer}>
        <Text style={styles.text}>OR</Text>
      </View>
    </View>
  );
};

export default Divider;

