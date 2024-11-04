import React from 'react';
import { StyleSheet, View, Image, Dimensions, SafeAreaView, Text, Pressable } from 'react-native';
import { theme } from '../utils/theme';
import Button from '../components/Button';

const { height: screenHeight } = Dimensions.get('window');

const Welcome = () => {
    return (
        <SafeAreaView className='bg-amber-100' style={[styles.imageContainer, { height: screenHeight }]}>
            <View>
                <Image style={styles.image} source={require('../assets/welcome-removebg.png')} />
                <Image style={styles.welcometxt} source={require('../assets/welcometxt.png')} />
            </View>
            <View>
                <Text style={styles.punchLine}>
                    Welcome to the AI-Powered Personalized Healthcare Platform
                </Text>
            </View>
            <View>
                <Button  
                    title="Let's Get started"  
                    onPress={() => console.log('pressed')} 
                    styleButton={styles.button} 
                /> 
                <View style={styles.bottomTextContainer}>
                    <Text style={styles.accountText}>Already have an account? </Text>
                    <Pressable onPress={() => console.log('Navigate to login')}>
                        <Text style={styles.loginText}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>    
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',    
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    welcometxt: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    punchLine: {
        fontSize: theme.fontScale.sm,
        fontWeight: '500',
        margin: 4,
        textAlign: 'center',
        color: theme.color.text
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        width: 300,
        height: 50,
        backgroundColor: '#FFC107',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 2,
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },
    accountText: {
        fontSize: theme.fontScale.sm,
        color: theme.color.text
    },
    loginText: {
        fontSize: theme.fontScale.sm,
        fontWeight: '500',
        color: '#FFC107', // Changed color to differentiate it as a clickable link
        marginLeft: 5
    }
});

export default Welcome;
