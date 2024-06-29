import React from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';
import {
  ButtonComponent,
  SectionComponent,
  TextComponent,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {appInfo} from '../../constants/appInfos';
import {fontFamilies} from '../../constants/fontFamilies';
import {LoginManager} from 'react-native-fbsdk-next';
import {useDispatch} from 'react-redux';
import {removeAuth} from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={localStyles.container}>
      <View style={localStyles.container}>
        <SectionComponent
          styles={[localStyles.section, localStyles.topSection]}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={{width: appInfo.sizes.WIDTH * 0.36, resizeMode: 'contain'}}
          />
          <TextComponent
            text="User Profile"
            color={appColors.white}
            size={22}
            font={fontFamilies.semiBold}
            styles={localStyles.textCenter}
          />
        </SectionComponent>
        <SectionComponent
          styles={[localStyles.section, localStyles.bottomSection]}>
          <ButtonComponent
            styles={[localStyles.button]}
            color={appColors.white}
            type="primary"
            text="Logout"
            textColor={appColors.danger}
            textFont={fontFamilies.semiBold}
            textStyles={localStyles.textCenter}
            onPress={async () => {
              await LoginManager.logOut();
              dispatch(removeAuth({}));
              await AsyncStorage.clear();
            }}
          />
        </SectionComponent>
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d3867',
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSection: {
    flex: 0.7,
  },
  bottomSection: {
    flex: 0.3,
  },
  textCenter: {
    textAlign: 'center',
  },
  button: {
    width: 263,
    height: 64,
    borderRadius: 32,
    borderColor: appColors.danger,
    borderWidth: 5,
  },
});

export default ProfileScreen;
