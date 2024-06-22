import {ArrowRight2} from 'iconsax-react-native';
import React from 'react';
import {RowComponent, TextComponent} from '.';
import {appColors} from '../constants/appColors';
import {StyleSheet} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

const TagBarComponent = (props: Props) => {
  const {title, onPress} = props;

  return (
    <RowComponent onPress={onPress} styles={localStyles.row}>
      <TextComponent numberOfLine={1} size={18} title text={title} flex={1} />
      <RowComponent>
        <TextComponent text="See All " color={appColors.gray} />
        <ArrowRight2 variant="Bold" size={14} color={appColors.gray} />
      </RowComponent>
    </RowComponent>
  );
};

export default TagBarComponent;

const localStyles = StyleSheet.create({
  row: {
    marginBottom: 12,
    paddingHorizontal: 16,
  },
});
