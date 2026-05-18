import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

const OtpScreen = ({ navigation, route }) => {
  const [otp, setOtp] = useState("");

  const mobile = route.params?.mobile;

  const handleVerifyOtp = () => {
    if (otp === "1234") {
      navigation.replace("Home");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <View className="flex-1 justify-center bg-white px-6">
      <Text className="text-3xl font-bold">
        Verify OTP
      </Text>

      <Text className="text-gray-500 mt-2">
        OTP sent to {mobile}
      </Text>

      <TextInput
        placeholder="Enter OTP"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
        className="border border-gray-300 rounded-xl px-4 py-4 mt-8 text-lg"
      />

      <TouchableOpacity
        className="bg-green-600 py-4 rounded-xl mt-8"
        onPress={handleVerifyOtp}
      >
        <Text className="text-white text-center font-bold text-lg">
          Verify OTP
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;