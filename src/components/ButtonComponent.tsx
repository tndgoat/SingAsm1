import {
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {ReactNode} from 'react';
import {TextComponent} from '.';
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  textFont?: string;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
  disable?: boolean;
}

const ButtonComponent = (props: Props) => {
  const {
    icon,
    text,
    textColor,
    textStyles,
    textFont,
    color,
    styles,
    onPress,
    iconFlex,
    type,
    disable,
  } = props;

  const dynamicTextStyles = {
    marginLeft: icon ? 12 : 0,
  };

  return type === 'primary' ? (
    <View style={localStyles.center}>
      <TouchableOpacity
        disabled={disable}
        onPress={onPress}
        style={[
          globalStyles.button,
          globalStyles.shadow,
          {
            backgroundColor: color
              ? color
              : disable
              ? appColors.gray4
              : appColors.primary,
          },
          localStyles.button,
          styles,
        ]}>
        {icon && iconFlex === 'left' && icon}
        <TextComponent
          text={text}
          color={textColor ?? appColors.white}
          styles={[textStyles, localStyles.text, dynamicTextStyles]}
          flex={icon && iconFlex === 'right' ? 1 : 0}
          font={textFont ?? fontFamilies.medium}
        />
        {icon && iconFlex === 'right' && icon}
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent
        flex={0}
        text={text}
        color={type === 'link' ? appColors.primary : appColors.text}
      />
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  button: {
    marginBottom: 17,
    width: '90%',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ButtonComponent;
