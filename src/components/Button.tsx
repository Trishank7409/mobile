import React from 'react';
import { Pressable, StyleSheet, View, Text, ActivityIndicator, StyleProp, ViewStyle } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    styleButton?: StyleProp<ViewStyle>;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    styleButton,
    loading = false
}) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [
            styles.button,
            styleButton,
            pressed && styles.buttonPressed
        ]}>
            {loading ? (
                <ActivityIndicator color="#ffffff" />
            ) : (
                <Text style={styles.buttonText}>{title}</Text>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6200ee',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonPressed: {
        backgroundColor: '#EAF074', // Darker shade for pressed effect
        transform: [{ scale: 1.02 }] // Slightly scale down when pressed
    },
});

export default Button;
