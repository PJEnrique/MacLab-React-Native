import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, signInWithGoogle, signInWithFacebook } from '../config/firebase';

// subscribe for more videos like this :)
export default function SignUpScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setName] = useState('');

    const handleSubmit = async ()=>{
        if(email && password){
            try{
                await createUserWithEmailAndPassword(auth, email, password, fullName);
            }catch(err){
                console.log('got error: ', err.message);
            }
        }
    }
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.secondary}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/signup.png')} 
                style={{width: 280, height: 200}} />
        </View>
      </SafeAreaView>
      <View style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
        <View className="form space-y-4">
            <Text className="text-orange-400 ml-1">Full Name</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value={fullName}
                onChangeText={value=> setName(value)}
                placeholder='Enter Name'
            />
            <Text className="text-orange-400 ml-1">Email Address</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value={email}
                onChangeText={value=> setEmail(value)}
                placeholder='Enter Email'
            />
            <Text className="text-orange-400 ml-1">Password</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                secureTextEntry={true}
                value={password}
                onChangeText={value=> setPassword(value)}
                placeholder='Enter Password'
            />
            <TouchableOpacity
                className="py-3 bg-orange-400 rounded-xl"
                onPress={handleSubmit}
            >
                <Text className="font-xl font-bold text-center text-gray-700">
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        <Text className="text-xl text-white font-bold text-center py-5">
            Or
        </Text>
        <View className="flex-row justify-center space-x-12">
            <TouchableOpacity onPress={signInWithGoogle} className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/google.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/apple.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl"
            onPress={signInWithFacebook}>
                <Image source={require('../assets/icons/facebook.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
            <Text className="text-orange-400 font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-bold text-white"> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
