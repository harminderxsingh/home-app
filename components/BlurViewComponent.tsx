import React, { ReactNode, useCallback } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { BlurTint, BlurView } from 'expo-blur';
import { useFocusEffect } from 'expo-router';
import { useBlur } from '@/contexts/BlurContext';
import InsetShadow from 'react-native-inset-shadow'

interface BlurViewComponentProps {
    intensity?: number;
    blurReductionFactor?: number;
    tint?: BlurTint;
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

    const { visible, setVisible } = useBlur();

    useFocusEffect(
        useCallback(() => {
            const timer = setTimeout(() => setVisible(true), 200);
            return () => {
                clearTimeout(timer);
                setVisible(false);
            };
        }, [])
    );

    return (
        <BlurView
            intensity={15}
            blurReductionFactor={0.2}
            tint={tint}
            experimentalBlurMethod={visible ? 'dimezisBlurView' : 'none'}
            style={[style]}
        >
              <InsetShadow
                 shadowColor="white" left={false} shadowOpacity={10} elevation={10} style={{ borderRadius: 16 }}>

            {children}
                 </InsetShadow>
        </BlurView>
    );
};

export default BlurViewComponent;
