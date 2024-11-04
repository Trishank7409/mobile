import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets} from 'react-native-safe-area-context'

interface ScreenWrapperProps {
    children: ReactNode;
    bg?: string;
}
const ScreenWrapper: React.FC<ScreenWrapperProps> = ({children,bg }) => {
    const  {top}= useSafeAreaInsets();
    const paddingTop= top>0? top+5:30;
    return (       
        <View style={{flex: 1, paddingTop, backgroundColor:bg}}>
                {
                    children
                }
        </View>
    );
}

const styles = StyleSheet.create({})

export default ScreenWrapper;
