import React from 'react';
import {View, Image} from 'react-native';
import {ButtonComponent, SpaceComponent, TextComponent} from '../../components';
import {appColors} from '../../constants/appColors';
import {appInfo} from '../../constants/appInfos';
import {fontFamilies} from '../../constants/fontFamilies';
import {LoginManager} from 'react-native-fbsdk-next';
import {useDispatch} from 'react-redux';
import {removeAuth} from '../../redux/reducers/authReducer';

const ProfileScreen = () => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d3867',
      }}>
      <Image
        source={require('../../assets/images/avatar.png')}
        style={{
          width: appInfo.sizes.WIDTH * 0.36,
          resizeMode: 'contain',
        }}
      />
      <TextComponent
        text="Tung Nguyen"
        color={appColors.white}
        size={22}
        font={fontFamilies.semiBold}
        styles={{textAlign: 'center'}}
      />
      <SpaceComponent height={100} />
      <ButtonComponent
        type="primary"
        text="Logout"
        onPress={async () => {
          await LoginManager.logOut();
          dispatch(removeAuth({}));
        }}
      />
    </View>
  );
};

export default ProfileScreen;
