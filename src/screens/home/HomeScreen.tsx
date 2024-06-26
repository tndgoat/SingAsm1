import React from 'react';
import {StatusBar, View, Image} from 'react-native';
import {RowComponent, SpaceComponent, TextComponent} from '../../components';
import {appColors} from '../../constants/appColors';
import {fontFamilies} from '../../constants/fontFamilies';
import {globalStyles} from '../../styles/globalStyles';
import {appInfo} from '../../constants/appInfos';

const HomeScreen = () => {
  const statusBarHeight = StatusBar.currentHeight ?? 24; // Fallback value if StatusBar.currentHeight is undefined

  return (
    <View style={[globalStyles.container]}>
      <StatusBar barStyle={'light-content'} />

      <View
        style={{
          backgroundColor: appColors.darkblue,
          height: statusBarHeight + 150,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          paddingTop: statusBarHeight,
        }}>
        <View style={{paddingHorizontal: 16}}>
          <RowComponent>
            <View style={[{flex: 1, alignItems: 'center'}]}>
              <TextComponent
                text="Internship"
                color={appColors.white}
                font={fontFamilies.regular}
                size={12}
              />
              <SpaceComponent height={15} />
              <TextComponent
                text="Singalarity"
                flex={0}
                color={appColors.white}
                font={fontFamilies.medium}
                size={18}
              />
              <SpaceComponent height={24} />
              <TextComponent
                text="Assignment 1"
                flex={0}
                color={appColors.white}
                font={fontFamilies.bold}
                size={24}
              />
              <SpaceComponent height={100} />
              <Image
                source={require('../../assets/images/logo-singalarity-1.png')}
                style={{
                  width: appInfo.sizes.WIDTH * 0.6,
                  resizeMode: 'contain',
                }}
              />
              <TextComponent
                text="Hi Tung Nguyen"
                color={appColors.text1}
                size={22}
                font={fontFamilies.bold}
                styles={{textAlign: 'center'}}
              />
              <TextComponent
                text="Happy to see you here."
                color={appColors.text2}
                size={16}
                font={fontFamilies.regular}
                styles={{textAlign: 'center', marginTop: 15}}
              />
              <TextComponent
                text="Hope you have a nice day. Good luck!"
                color={appColors.text2}
                size={16}
                font={fontFamilies.regular}
                styles={{textAlign: 'center', marginTop: 3}}
              />
            </View>
          </RowComponent>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
