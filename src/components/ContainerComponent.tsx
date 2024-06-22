import {
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import {RowComponent, TextComponent} from '.';
import {ArrowLeft} from 'iconsax-react-native';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean;
  title?: string;
  children: ReactNode;
  back?: boolean;
}

const ContainerComponent = (props: Props) => {
  const {children, isScroll, isImageBackground, title, back} = props;

  const navigation: any = useNavigation();

  const returnContainer = isScroll ? (
    <ScrollView style={localStyles.flex1} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  ) : (
    <View style={localStyles.flex1}>{children}</View>
  );

  const headerComponent = () => {
    return (
      <View style={localStyles.header}>
        {(title || back) && (
          <RowComponent styles={localStyles.rowComponent}>
            {back && (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={localStyles.backButton}>
                <ArrowLeft size={24} color={appColors.text} />
              </TouchableOpacity>
            )}
            {title ? (
              <TextComponent
                text={title}
                size={16}
                font={fontFamilies.medium}
                flex={1}
              />
            ) : (
              <></>
            )}
          </RowComponent>
        )}
        {returnContainer}
      </View>
    );
  };

  return isImageBackground ? (
    <ImageBackground
      source={require('../assets/images/splash-img.png')}
      style={localStyles.flex1}
      imageStyle={localStyles.flex1}>
      <SafeAreaView style={localStyles.flex1}>{headerComponent()}</SafeAreaView>
    </ImageBackground>
  ) : (
    <SafeAreaView style={[globalStyles.container]}>
      <View>{headerComponent()}</View>
    </SafeAreaView>
  );
};

export default ContainerComponent;

const localStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  header: {
    flex: 1,
    paddingTop: 30,
  },
  rowComponent: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    minWidth: 48,
    minHeight: 48,
    justifyContent: 'flex-start',
  },
  backButton: {
    marginRight: 12,
  },
});
