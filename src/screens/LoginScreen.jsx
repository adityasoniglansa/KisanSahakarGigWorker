import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = ({ navigation }) => {
  const [mobile, setMobile] = useState("9876543210");

  const handleSendOtp = () => {
    if (mobile.replace(/\D/g, "").length < 10) {
      alert("Enter valid mobile number");
      return;
    }

    navigation.navigate("Otp", { mobile });
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

      <View style={styles.logoRow}>
        <Image
          source={require("../../assets/Images/logo/iconpngplain.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.brand}>KisanSahakar</Text>
          <Text style={styles.brandSub}>Gig Worker App</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.kicker}>Secure login</Text>
        <Text style={styles.title}>Enter your mobile number</Text>
        <Text style={styles.copy}>
          We will send an OTP to verify your worker profile and continue your KYC.
        </Text>

        <Text style={styles.label}>Mobile number</Text>
        <View style={styles.inputWrap}>
          <Text style={styles.country}>+91</Text>
          <TextInput
            keyboardType="number-pad"
            value={mobile}
            onChangeText={setMobile}
            maxLength={10}
            placeholder="10 digit number"
            placeholderTextColor="#8BA394"
            style={styles.input}
          />
        </View>

        <TouchableOpacity activeOpacity={0.86} style={styles.button} onPress={handleSendOtp}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>

        <View style={styles.noteBox}>
          <Text style={styles.noteTitle}>Demo OTP</Text>
          <Text style={styles.noteText}>Use 1234 on the next screen.</Text>
        </View>
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
    paddingTop: 64,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logo: {
    width: 54,
    height: 54,
  },
  brand: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
  },
  brandSub: {
    color: "#D4EDD9",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 2,
  },
  card: {
    marginTop: 46,
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
  label: {
    color: "#173D23",
    fontSize: 13,
    fontWeight: "900",
    marginTop: 28,
    marginBottom: 8,
  },
  inputWrap: {
    minHeight: 58,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#CFE8D5",
    backgroundColor: "#F8FFFA",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },
  country: {
    color: "#173D23",
    fontSize: 16,
    fontWeight: "900",
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#102A18",
    fontSize: 17,
    fontWeight: "800",
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
  noteBox: {
    marginTop: 18,
    padding: 14,
    borderRadius: 16,
    backgroundColor: "#F0FDF4",
  },
  noteTitle: {
    color: "#166534",
    fontSize: 13,
    fontWeight: "900",
  },
  noteText: {
    color: "#3F5F49",
    fontSize: 13,
    marginTop: 4,
  },
});

export default LoginScreen;
