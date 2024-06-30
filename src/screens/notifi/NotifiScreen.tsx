import {View, Image, StatusBar} from 'react-native';
import React from 'react';
import {appColors} from './../../constants/appColors';
import {appInfo} from '../../constants/appInfos';
import {fontFamilies} from '../../constants/fontFamilies';
import {ButtonComponent, SpaceComponent, TextComponent} from '../../components';
import {globalStyles} from '../../styles/globalStyles';

const NotifiScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.white,
      }}>
      <TextComponent
        text="Notifications"
        color={appColors.text1}
        size={22}
        font={fontFamilies.bold}
        styles={{textAlign: 'center'}}
      />
      <TextComponent
        text="You're already logged in!"
        color={appColors.text2}
        size={16}
        font={fontFamilies.semiBold}
        styles={{textAlign: 'center'}}
      />
    </View>
  );
};

export default NotifiScreen;
