import React from 'react';
import { StyleSheet, View } from 'react-native';

//cutom component to render dots
 const OnBoardingDots : React.FC<{selected : boolean}> = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={[styles.dot , {backgroundColor : backgroundColor}]}
        />
    );
}

export default OnBoardingDots;

const styles = StyleSheet.create({
    dot : {
        width:6,
        height: 6,
        marginHorizontal: 3,
    },
});
