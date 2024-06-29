import {Lock, Sms, User} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {LoadingModal} from '../../modals';
import {Validate} from '../../utils/validate';
import SocialLogin from './components/SocialLogin';
import authenticationAPI from '../../apis/authApi';
import {fontFamilies} from '../../constants/fontFamilies';
import {addAuth} from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initValue = {
  firstName: '',
  lastName: '',
  userName: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen = ({navigation}: any) => {
  const [values, setValues] = useState(initValue);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>();
  const [isDisable, setIsDisable] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !errorMessage ||
      (errorMessage &&
        (errorMessage.userName ||
          errorMessage.password ||
          errorMessage.confirmPassword)) ||
      !values.userName ||
      !values.password ||
      !values.confirmPassword
    ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [errorMessage, values]);

  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};

    data[`${key}`] = value;

    setValues(data);
  };

  const formValidator = (key: string) => {
    const data = {...errorMessage};
    let message = ``;

    switch (key) {
      case 'userName':
        if (!values.userName) {
          message = `UserName is required!`;
        } else if (!Validate.userName(values.userName)) {
          message = 'UserName is not invalid!';
        } else {
          message = '';
        }
        break;

      case 'password':
        message = !values.password ? `Password is required!` : '';
        break;

      case 'confirmPassword':
        if (!values.confirmPassword) {
          message = `Please type confirm password!`;
        } else if (values.confirmPassword !== values.password) {
          message = 'Password is not match!';
        } else {
          message = '';
        }
        break;
    }

    data[`${key}`] = message;
    setErrorMessage(data);
  };

  const handleRegister = async () => {
    setErrorMessage('');

    const api = `/register`;
    const data = {
      userName: values.userName,
      password: values.password,
      firstName: values.firstName ?? '',
      lastName: values.lastName ?? '',
    };

    try {
      const res = await authenticationAPI.HandleAuthentication(
        api,
        data,
        'post',
      );
      console.log('Response from API:', res);
      navigation.navigate('LoginScreen');
    } catch (error) {
      const errorMessage = 'User has already exist!';
      setErrorMessage(errorMessage);
      console.log(`Can not create new user: ${JSON.stringify(error)}`);
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <>
      <ContainerComponent isImageBackground isScroll back>
        <SectionComponent
          styles={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/logo-singalarity-1.png')}
            style={{
              width: 180,
              height: 90.4,
            }}
          />
        </SectionComponent>
        <SectionComponent>
          <TextComponent
            size={24}
            title
            text="Sign Up"
            font={fontFamilies.semiBold}
            color={appColors.text1}
            styles={{textAlign: 'center'}}
          />
          <SpaceComponent height={21} />
          <InputComponent
            value={values.firstName}
            placeholder="Enter your firstname"
            onChange={val => handleChangeValue('firstName', val)}
            allowClear
            affix={<User size={22} color={appColors.gray} />}
          />
          <InputComponent
            value={values.lastName}
            placeholder="Enter your lastname"
            onChange={val => handleChangeValue('lastName', val)}
            allowClear
            affix={<User size={22} color={appColors.gray} />}
          />
          <InputComponent
            value={values.userName}
            placeholder="Enter your username"
            onChange={val => handleChangeValue('userName', val)}
            allowClear
            affix={<Sms size={22} color={appColors.gray} />}
            onEnd={() => formValidator('userName')}
          />
          <InputComponent
            value={values.password}
            placeholder="Enter your password"
            onChange={val => handleChangeValue('password', val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColors.gray} />}
            onEnd={() => formValidator('password')}
          />
          <InputComponent
            value={values.confirmPassword}
            placeholder="Confirm password"
            onChange={val => handleChangeValue('confirmPassword', val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColors.gray} />}
            onEnd={() => formValidator('confirmPassword')}
          />
        </SectionComponent>

        {errorMessage && (
          <SectionComponent>
            {Object.keys(errorMessage).map(
              (error, index) =>
                errorMessage[`${error}`] && (
                  <TextComponent
                    text={errorMessage[`${error}`]}
                    key={`error${index}`}
                    color={appColors.danger}
                  />
                ),
            )}
          </SectionComponent>
        )}
        <SpaceComponent height={16} />
        <SectionComponent>
          <ButtonComponent
            onPress={handleRegister}
            text="Sign Up"
            disable={isDisable}
            type="primary"
          />
        </SectionComponent>
        <SectionComponent>
          <RowComponent justify="center">
            <TextComponent text="Already have an account? " />
            <ButtonComponent
              type="link"
              text="Login"
              onPress={() => navigation.navigate('LoginScreen')}
            />
          </RowComponent>
        </SectionComponent>
        <SocialLogin />
      </ContainerComponent>
      <LoadingModal visible={isLoading} />
    </>
  );
};

export default SignUpScreen;
