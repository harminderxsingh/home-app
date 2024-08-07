import React, { ReactNode, useCallback } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

interface BlurViewComponentProps {
    intensity?: number;
    blurReductionFactor?: number;
    tint?: any;
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
}

const BlurViewComponent: React.FC<BlurViewComponentProps> = ({
    intensity = 30,
    blurReductionFactor = 0.5,
    tint = 'light',
    style,
    children,
}) => {

    return (
        <View
            style={[style]}
        >

            {children}
        </View>
    );
};

export default BlurViewComponent;
