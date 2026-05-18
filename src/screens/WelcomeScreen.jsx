// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ImageBackground,
//   Image,
//   StatusBar,
//   StyleSheet,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

// const WelcomeScreen = ({ navigation }) => {
//   const [language, setLanguage] = useState("English");
//   const languageOptions = ["English", "Hindi", "Telugu", "Kannada"];
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

//       <ImageBackground
//         source={require("../../assets/Images/Banner/splashBg.png")}
//         style={StyleSheet.absoluteFillObject}
//         resizeMode="cover"
//       >
//         <LinearGradient
//           colors={["rgba(3,10,6,0.25)", "rgba(4,17,8,0.55)", "rgba(2,8,4,0.96)"]}
//           style={styles.gradient}
//         >
//           <Animated.View entering={FadeInUp.duration(800).springify()} style={styles.logoRow}>
//             <Image
//               source={require("../../assets/Images/logo/iconpngplain.png")}
//               style={styles.logoIcon}
//               resizeMode="contain"
//             />
//             <View>
//               <Text style={styles.brand}>KisanSahakar</Text>
//               <Text style={styles.brandSub}>Digital Companion</Text>
//             </View>
//           </Animated.View>

//           <View style={styles.content}>
//             <Animated.View entering={FadeInDown.delay(100).duration(900).springify()}>
//               <Text style={styles.eyebrow}>Digital farming companion</Text>
//               <Text style={styles.title}>
//                 Kisan<Text style={styles.titleAccent}>Sahakar</Text>
//               </Text>
//               <Text style={styles.description}>
//                 Manage crops, check market updates, connect with support, and make better farm decisions from one simple app.
//               </Text>
//               <View style={styles.languageSection}>
//                 <Text style={styles.languageHeading}>Choose language</Text>
//                 <View style={styles.languageOptions}>
//                   {languageOptions.map((option) => (
//                     <TouchableOpacity
//                       key={option}
//                       activeOpacity={0.8}
//                       style={[
//                         styles.languageOption,
//                         language === option && styles.languageOptionActive,
//                       ]}
//                       onPress={() => setLanguage(option)}
//                     >
//                       <Text
//                         style={
//                           language === option
//                             ? styles.languageOptionTextActive
//                             : styles.languageOptionText
//                         }
//                       >
//                         {option}
//                       </Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               </View>
//             </Animated.View>

//             <Animated.View
//               entering={FadeInDown.delay(260).duration(900).springify()}
//               style={styles.featureGrid}
//             >
//               <View style={styles.featurePill}>
//                 <Text style={styles.featureText}>Crop guidance</Text>
//               </View>
//               <View style={styles.featurePill}>
//                 <Text style={styles.featureText}>Market rates</Text>
//               </View>
//               <View style={styles.featurePill}>
//                 <Text style={styles.featureText}>Farmer supp.</Text>
//               </View>
//             </Animated.View>

//             <Animated.View
//               entering={FadeInDown.delay(420).duration(900).springify()}
//               style={styles.statRow}
//             >
//               <View style={styles.statItem}>
//                 <Text style={styles.statValue}>24/7</Text>
//                 <Text style={styles.statLabel}>Access</Text>
//               </View>
//               <View style={styles.statDivider} />
//               <View style={styles.statItem}>
//                 <Text style={styles.statValue}>Live</Text>
//                 <Text style={styles.statLabel}>Updates</Text>
//               </View>
//               <View style={styles.statDivider} />
//               <View style={styles.statItem}>
//                 <Text style={styles.statValue}>Local</Text>
//                 <Text style={styles.statLabel}>Help</Text>
//               </View>
//             </Animated.View>

//             <Animated.View
//               entering={FadeInDown.delay(580).duration(900).springify()}
//               style={styles.actions}
//             >
//               <TouchableOpacity
//                 activeOpacity={0.88}
//                 style={styles.primaryButton}
//                 onPress={() => navigation.navigate("Login")}
//               >
//                 <Text style={styles.primaryButtonText}>Get Started</Text>
//                 <Text style={styles.primaryButtonIcon}>{">"}</Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 activeOpacity={0.75}
//                 style={styles.loginLink}
//                 onPress={() => navigation.navigate("Login")}
//               >
//                 <Text style={styles.loginText}>Already have an account?</Text>
//                 <Text style={styles.loginTextStrong}> Login</Text>
//               </TouchableOpacity>
//             </Animated.View>
//           </View>
//         </LinearGradient>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#020804",
//   },
//   gradient: {
//     flex: 1,
//     justifyContent: "space-between",
//     paddingHorizontal: 24,
//     paddingTop: 64,
//     paddingBottom: 34,
//   },
//   logoRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 12,
//   },
//   logoIcon: {
//     width: 54,
//     height: 54,
//   },
//   brand: {
//     color: "#FFFFFF",
//     fontSize: 22,
//     fontWeight: "900",
//   },
//   brandSub: {
//     color: "#D4EDD9",
//     fontSize: 13,
//     fontWeight: "700",
//     marginTop: 2,
//   },
//   content: {
//     width: "100%",
//   },
//   eyebrow: {
//     alignSelf: "flex-start",
//     color: "#D7F8D7",
//     fontSize: 13,
//     fontWeight: "700",
//     paddingHorizontal: 12,
//     paddingVertical: 7,
//     borderRadius: 999,
//     backgroundColor: "rgba(34,197,94,0.24)",
//     borderWidth: 1,
//     borderColor: "rgba(187,247,208,0.32)",
//     marginBottom: 14,
//   },
//   title: {
//     color: "#FFFFFF",
//     fontSize: 46,
//     lineHeight: 52,
//     fontWeight: "900",
//   },
//   titleAccent: {
//     color: "#86EFAC",
//   },
//   description: {
//     color: "#E6F4EA",
//     fontSize: 17,
//     lineHeight: 25,
//     marginTop: 12,
//     maxWidth: 340,
//   },
//   featureGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     gap: 10,
//     marginTop: 22,
//   },
//   featurePill: {
//     paddingHorizontal: 13,
//     paddingVertical: 9,
//     borderRadius: 999,
//     backgroundColor: "rgba(255,255,255,0.16)",
//     borderWidth: 1,
//     borderColor: "rgba(255,255,255,0.22)",
//   },
//   featureText: {
//     color: "#FFFFFF",
//     fontSize: 13,
//     fontWeight: "700",
//   },
//   languageSection: {
//     marginTop: 18,
//   },
//   languageHeading: {
//     color: "#D7F8D7",
//     fontSize: 14,
//     fontWeight: "700",
//     marginBottom: 10,
//   },
//   languageOptions: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     gap: 10,
//   },
//   languageOption: {
//     paddingVertical: 10,
//     paddingHorizontal: 14,
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: "rgba(255,255,255,0.24)",
//     backgroundColor: "rgba(255,255,255,0.08)",
//   },
//   languageOptionActive: {
//     borderColor: "#86EFAC",
//     backgroundColor: "rgba(134,239,172,0.18)",
//   },
//   languageOptionText: {
//     color: "#D7F8D7",
//     fontSize: 13,
//     fontWeight: "700",
//   },
//   languageOptionTextActive: {
//     color: "#FFFFFF",
//     fontSize: 13,
//     fontWeight: "700",
//   },
//   statRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginTop: 26,
//     paddingVertical: 16,
//     paddingHorizontal: 16,
//     borderRadius: 18,
//     backgroundColor: "rgba(255,255,255,0.13)",
//     borderWidth: 1,
//     borderColor: "rgba(255,255,255,0.18)",
//   },
//   statItem: {
//     flex: 1,
//     alignItems: "center",
//   },
//   statValue: {
//     color: "#FFFFFF",
//     fontSize: 17,
//     fontWeight: "900",
//   },
//   statLabel: {
//     color: "#CDEBD2",
//     fontSize: 12,
//     marginTop: 3,
//   },
//   statDivider: {
//     width: 1,
//     height: 30,
//     backgroundColor: "rgba(255,255,255,0.18)",
//   },
//   actions: {
//     marginTop: 26,
//   },
//   primaryButton: {
//     minHeight: 58,
//     borderRadius: 18,
//     backgroundColor: "#16A34A",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     shadowColor: "#052E16",
//     shadowOpacity: 0.35,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 8 },
//     elevation: 8,
//   },
//   primaryButtonText: {
//     color: "#FFFFFF",
//     fontSize: 18,
//     fontWeight: "900",
//   },
//   primaryButtonIcon: {
//     color: "#FFFFFF",
//     fontSize: 30,
//     fontWeight: "700",
//     marginLeft: 8,
//     marginTop: -2,
//   },
//   loginLink: {
//     marginTop: 18,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   loginText: {
//     color: "#CBD5CE",
//     fontSize: 14,
//   },
//   loginTextStrong: {
//     color: "#86EFAC",
//     fontSize: 14,
//     fontWeight: "900",
//   },
// });

// export default WelcomeScreen;






//////////////////////////////////////////////////////////////////////////////////////////




import React from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

import globalStyles from "../styles/globalStyles";
import { color } from "../styles/theme";
import CustomText from "../components/CustomText";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={[
        tw`flex-1`,
        {
          backgroundColor: "#F7F8F2",
        },
      ]}
    >
      <StatusBar backgroundColor="#F7F8F2" barStyle="dark-content" />

      <View style={tw`flex-1`}>
        <ImageBackground
          source={require("../../assets/Images/Banner/splashBg.png")}
          resizeMode="cover"
          style={[
            tw`flex-1`,
            {
              justifyContent: "space-between",
            },
          ]}
        >
          <View
            style={[
              tw`absolute inset-0`,
              {
                backgroundColor: "rgba(255,255,255,0.15)",
              },
            ]}
          />

          <View />

          <View style={[tw`items-center px-6`]}>
            <Image
              source={require("../../assets/Images/logo/sitelogo2.png")}
              style={{
                width: 260,
                height: 180,
                resizeMode: "contain",
              }}
            />

            <CustomText
              style={[
                globalStyles.f16Medium,
                globalStyles.black,
                globalStyles.textac,
                {
                  marginTop: -10,
                  letterSpacing: 0.4,
                },
              ]}
            >
              Smart Equipment. Stronger Farms.
            </CustomText>
          </View>

          <View
            style={[
              tw`px-6`,
              {
                paddingBottom: 35,
              },
            ]}
          >
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => navigation.navigate("Login")}
              style={[
                globalStyles.card,
                {
                  backgroundColor: "#118C2E",
                  borderRadius: 22,
                  paddingVertical: 18,
                  paddingHorizontal: 22,
                  marginBottom: 22,
                },
              ]}
            >
              <View
                style={[
                  globalStyles.flexrow,
                  globalStyles.alineItemscenter,
                  globalStyles.justifycenter,
                ]}
              >
                <View
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 50,
                    backgroundColor: color.white,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    left: 0,
                  }}
                >
                  <Ionicons name="arrow-forward" size={28} color="#118C2E" />
                </View>

                <CustomText
                  style={[globalStyles.f24Bold, globalStyles.textWhite]}
                >
                  Get Started
                </CustomText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("ChooseLanguage")}
              activeOpacity={0.85}
              style={[
                {
                  borderWidth: 1.5,
                  borderColor: "#118C2E",
                  borderRadius: 22,
                  paddingVertical: 18,
                  paddingHorizontal: 22,
                  backgroundColor: "#f2f2f2",
                },
              ]}
            >
              <View
                style={[
                  globalStyles.flexrow,
                  globalStyles.alineItemscenter,
                  globalStyles.justifycenter,
                ]}
              >
                <View
                  style={{
                    position: "absolute",
                    left: 0,
                  }}
                >
                  <Ionicons name="globe-outline" size={34} color="#118C2E" />
                </View>

                <CustomText
                  style={[
                    globalStyles.f20Bold,
                    {
                      color: "#118C2E",
                    },
                  ]}
                >
                  Change Language
                </CustomText>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
