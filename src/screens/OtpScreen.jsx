import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const OtpScreen = ({ navigation, route }) => {
  const [otp, setOtp] = useState("1234");
  const mobile = route.params?.mobile || "9876543210";

  const handleVerifyOtp = () => {
    if (otp === "1234") {
      navigation.replace("KycSetup");
    } else {
      alert("Invalid OTP. Use 1234 for this demo.");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/Images/Banner/splashBg.png")}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(3,10,6,0.25)", "rgba(4,17,8,0.55)", "rgba(2,8,4,0.96)"]}
          style={styles.gradient}
        >
          <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.kicker}>OTP verification</Text>
        <Text style={styles.title}>Confirm it is you</Text>
        <Text style={styles.copy}>Enter the 4 digit OTP sent to +91 {mobile}.</Text>

        <TextInput
          keyboardType="number-pad"
          value={otp}
          onChangeText={setOtp}
          maxLength={4}
          placeholder="1234"
          placeholderTextColor="#8BA394"
          style={styles.otpInput}
        />

        <TouchableOpacity activeOpacity={0.86} style={styles.button} onPress={handleVerifyOtp}>
          <Text style={styles.buttonText}>Verify and Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resend}>
          <Text style={styles.resendText}>Resend OTP in 25s</Text>
        </TouchableOpacity>
      </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 62,
  },
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  backText: {
    color: "#FFFFFF",
    fontWeight: "900",
  },
  card: {
    marginTop: 48,
    padding: 22,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E4F4E8",
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },
  kicker: {
    color: "#15803D",
    fontSize: 13,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  title: {
    color: "#102A18",
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "900",
    marginTop: 10,
  },
  copy: {
    color: "#5D7666",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10,
  },
  otpInput: {
    minHeight: 64,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#CFE8D5",
    backgroundColor: "#F8FFFA",
    color: "#102A18",
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 8,
    textAlign: "center",
    marginTop: 28,
  },
  button: {
    minHeight: 58,
    borderRadius: 18,
    backgroundColor: "#16A34A",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "900",
  },
  resend: {
    alignItems: "center",
    marginTop: 18,
  },
  resendText: {
    color: "#15803D",
    fontSize: 14,
    fontWeight: "800",
  },
});

export default OtpScreen;
