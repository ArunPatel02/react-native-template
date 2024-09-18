import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { scale, verticalScale } from 'react-native-size-matters';

const Divider = () => {

  return (
    <View
      style={styles.Divider}>
      <View
        style={styles.ORConatainer}>
        <Text>OR</Text>
      </View>
    </View>
  );
};

export default Divider;

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
        backgroundColor: '#fff',
        alignSelf: 'center',
        paddingHorizontal: scale(20),
      },
});