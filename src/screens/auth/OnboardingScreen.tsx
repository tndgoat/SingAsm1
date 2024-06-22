import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {appColors} from '../../constants/appColors';
import {appInfo} from '../../constants/appInfos';
import {globalStyles} from '../../styles/globalStyles';
import {ButtonComponent, TextComponent} from '../../components';
import {fontFamilies} from '../../constants/fontFamilies';

const OnboardingScreen = ({navigation}: any) => {
  return (
    <View style={[globalStyles.container, localStyles.container]}>
      {/* Top Section: Logo and Text */}
      <View style={localStyles.topSection}>
        <Image
          source={require('../../assets/images/logo-singalarity-1.png')}
          style={localStyles.logo}
        />
        <TextComponent
          text="Let's get started!"
          color={appColors.text1}
          size={22}
          font={fontFamilies.bold}
          styles={localStyles.title}
        />
        <TextComponent
          text="Login to enjoy the features we've"
          color={appColors.text2}
          size={16}
          font={fontFamilies.regular}
          styles={localStyles.subtitle}
        />
        <TextComponent
          text="provided, and stay healthy!"
          color={appColors.text2}
          size={16}
          font={fontFamilies.regular}
          styles={localStyles.subtitle}
        />
      </View>

      {/* Bottom Section: Buttons */}
      <View style={localStyles.bottomSection}>
        <ButtonComponent
          color={appColors.darkblue}
          styles={localStyles.button}
          onPress={() => navigation.navigate('LoginScreen')}
          text="Login"
          type="primary"
        />
        <ButtonComponent
          color={appColors.white}
          styles={[localStyles.button, localStyles.signupButton]}
          textColor={appColors.darkblue}
          onPress={() => navigation.navigate('SignUpScreen')}
          text="Sign Up"
          type="primary"
        />
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  topSection: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: appInfo.sizes.WIDTH * 0.5,
    resizeMode: 'contain',
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 2,
  },
  bottomSection: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 263,
    height: 56,
    borderRadius: 32,
  },
  signupButton: {
    borderColor: appColors.darkblue,
    borderWidth: 1,
  },
});

export default OnboardingScreen;
