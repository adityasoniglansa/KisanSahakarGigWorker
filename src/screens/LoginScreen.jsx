import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

const LoginScreen = ({ navigation }) => {
  const [mobile, setMobile] = useState("");

  const handleSendOtp = () => {
    if (mobile.length < 10) {
      alert("Enter valid mobile number");
      return;
    }

    navigation.navigate("Otp", {
      mobile,
    });
  };

  return (
    <View className="flex-1 justify-center bg-white px-6">
      <Text className="text-3xl font-bold text-black">
        Login
      </Text>

      <Text className="text-gray-500 mt-2">
        Enter your mobile number
      </Text>

      <TextInput
        placeholder="Enter Mobile Number"
        keyboardType="number-pad"
        value={mobile}
        onChangeText={setMobile}
        className="border border-gray-300 rounded-xl px-4 py-4 mt-8 text-lg"
      />

      <TouchableOpacity
        className="bg-green-600 py-4 rounded-xl mt-8"
        onPress={handleSendOtp}
      >
        <Text className="text-white text-center font-bold text-lg">
          Send OTP
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;