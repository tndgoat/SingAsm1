import {View, Modal, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {TextComponent} from '../components';
import {appColors} from '../constants/appColors';

interface Props {
  visible: boolean;
}

const LoadingModal = (props: Props) => {
  const {visible} = props;

  return (
    <Modal visible={visible} transparent statusBarTranslucent>
      <View style={localStyles.container}>
        <ActivityIndicator color={appColors.white} size={32} />
        <TextComponent text="Loading" flex={0} color={appColors.white} />
      </View>
    </Modal>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingModal;
