import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, Pressable, Alert } from "react-native";
import React, {useRef, useState} from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Octicons from "@expo/vector-icons/Octicons";
import { useRouter } from 'expo-router';
import Loading from '../components/Loading'
import CustomKeyboardView from "../components/CustomKeyboardView";

export default function signIn() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleLogin = async ()=>{
      if(!emailRef.current || !passwordRef.current){
        Alert.alert('Sign In', "Please fill all the fields!");
        return;
      };

      //login process
    }
  return (
    <CustomKeyboardView>
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
        className="flex-1 gap-12"
      >
        {/* signIn image*/}
        <View className="items-center">
          <Image
            style={{ height: hp(25) }}
            resizeMode="contain"
            source={require("../assets/images/login.png")}
          />
        </View>

        <View className="gap-10">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-center text-neutral-800"
          >
            Sign In
          </Text>
          {/* inputs */}
          <View className="gap-4">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Octicons name="mail" size={hp(2.7)} color="black" />
              <TextInput
                onChangeText={value=> emailRef.current=value}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-600"
                placeholder="Email address"
                placeholderTextColor={"gray"}
              />
            </View>
            <View className="gap-3">
                <View
                  style={{ height: hp(7) }}
                  className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
                >
                  <Octicons name="lock" size={hp(2.7)} color="black" />
                  <TextInput
                    onChangeText={value=> passwordRef.current=value}
                    style={{ fontSize: hp(2) }}
                    className="flex-1 font-semibold text-neutral-600"
                    placeholder="Password"
                    secureTextEntry
                    placeholderTextColor={"gray"}
                  />
                </View>
                <Text style={{fontSize: hp(1.8)}} className="font-semibold text-right text-neutral-500">Forgot Password?</Text>
            </View>

            {/* submit button */}

            <View>
              {
                loading? (
                  <View className="flex-row justify-center">
                      <Loading size={hp(11)} />
                  </View>
                ):(
                    <TouchableOpacity onPress={handleLogin} style={{height:hp(6.5)}} className="bg-blue-500 rounded-xl justify-center items-center">
              <Text style={{fontSize: hp(2.7)}} className="text-white font-bold tracking-wider">
                Sign In
              </Text>
            </TouchableOpacity>
                )
              }
            </View>

            

            {/* sign up text */}

            <View className="flex-row justify-center">
              <Text style={{fontSize: hp(1.8)}} className="font-semibold text-neutral-500">Don't have an account? </Text>
              <Pressable onPress={()=> router.push('signUp')}>
              <Text style={{fontSize: hp(1.8)}} className="font-bold text-blue-500">Sign Up</Text>
              </Pressable>
              
            </View>
            
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
