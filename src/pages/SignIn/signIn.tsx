import React, {useCallback, useRef} from 'react';
import { Image, KeyboardAvoidingView, Platform, View, ScrollView, TextInput } from 'react-native';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';
import imagem from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText } from './styles';

const SignIn: React.FC = () => {

    const formRef = useRef<FormHandles>(null);
    const passInputRef = useRef<TextInput>(null);

    const Navigation = useNavigation();
    
    const submitSignIn = useCallback((data: Object) => {
        console.log(data);
    },[]);

    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : undefined}
                style={{ flex: 1 }}
                enabled>

                <ScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps="handled" >

                    <Container>
                        <Image source={imagem} />

                        <View><Title>Faça seu logon</Title></View>

                        <Form ref={formRef} onSubmit={submitSignIn}>
                            <Input name="email" 
                                   icon="mail" 
                                   placeholder="E-mail" 
                                   autoCorrect={false} 
                                   autoCapitalize={"none"} 
                                   returnKeyType={"next"} 
                                   keyboardType={"email-address"} 
                                   onSubmitEditing={() => passInputRef.current?.focus() } />
                            
                            <Input ref={passInputRef}
                                   name="senha" 
                                   icon="lock"
                                   placeholder="Senha"
                                   secureTextEntry 
                                   returnKeyType={"send"} 
                                   onSubmitEditing={() => formRef.current?.submitForm()} />

                            <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>
                        </Form>

                        <ForgotPassword onPress={() => { console.log("passou esqueci senha") }}>
                            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                        </ForgotPassword>
                    </Container>

                </ScrollView>

                <CreateAccountButton onPress={() => Navigation.navigate("SignUp")} >
                    <Icon name="log-in" size={20} color="#ff9000" />
                    <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
                </CreateAccountButton>

            </KeyboardAvoidingView>
        </>
    )
};

export default SignIn;
