import React, {useEffect, useState} from 'react';
import {StatusBar, View, Text, Image} from 'react-native';
import {RowComponent, SpaceComponent, TextComponent} from '../../components';
import {appColors} from '../../constants/appColors';
import {fontFamilies} from '../../constants/fontFamilies';
import {globalStyles} from '../../styles/globalStyles';
import {appInfo} from '../../constants/appInfos';
import CryptoJS from 'crypto-js';

const HomeScreen = () => {
  const statusBarHeight = StatusBar.currentHeight ?? 24;

  const [sha256Fingerprint, setSha256Fingerprint] = useState('');

  useEffect(() => {
    const publicKey = `
                    -----BEGIN PUBLIC KEY-----
                    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAv7LsG7yRs8E1rqv5lV6x
                    DK5DRrfb2Tpwi8c7a8/ZPSLcRP6ZSxM7agUKns5cic+rVigu7OsX0UsX2d7Ixbsr
                    tGA+zmGksY5DecHZiLUgrS8X7ohYpzDfj8Ju4/hJqWQefwMwdCGpuPPqLV65uSAk
                    UAx25NeapY1/r+cIDHH5gIu6FRKAqIdDMTEVDfwJwTiJDHXmD0ClCM0taEP+q6lN
                    0Nq92SlpVPiFxe39FliTeK8Y/QuWE0es3OHMBU/xqjwitEPm6ERQfBGNrHU2edh/
                    2Rra0M7IIxR6iiViJpLjgBWqqySb+m+7cibVs3q9XeloO0VtlViPmVNIx/SmGbmw
                    uwIDAQAB
                    -----END PUBLIC KEY-----
                    `;

    const sha256 = CryptoJS.SHA256(publicKey);
    const hashString = sha256.toString(CryptoJS.enc.Hex);
    setSha256Fingerprint(hashString);
  }, []);

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
              <SpaceComponent height={36} />
              <Image
                source={require('../../assets/images/logo-singalarity-1.png')}
                style={{
                  width: appInfo.sizes.WIDTH * 0.6,
                  resizeMode: 'contain',
                }}
              />
              <TextComponent
                text="Hi Tung Nguyen!"
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
              <SpaceComponent height={48} />
              <TextComponent
                text="SHA-256 Fingerprint:"
                color={appColors.text1}
                size={22}
                font={fontFamilies.bold}
                styles={{textAlign: 'center'}}
              />
              <TextComponent
                text={sha256Fingerprint}
                color={appColors.text2}
                size={17}
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
