import React, { useRef, useCallback } from 'react';
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native'
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';
import imagem from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { Container, Title, BackToSignInButton, BackToSignInButtonText } from './styles';
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'


const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const emailInputRef = useRef<TextInput>(null);
    const passInputRef = useRef<TextInput>(null);
    
    const Navigation = useNavigation();

    const submitSignUp = useCallback((data: Object) => {
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
                        <View><Title>Crie sua conta</Title></View>

                        <Form ref={formRef} onSubmit={submitSignUp}>
                            <Input name="nome" 
                                   icon="user" 
                                   placeholder="Nome"
                                   autoCorrect={true} 
                                   autoCapitalize={"words"} 
                                   returnKeyType={"next"}
                                   onSubmitEditing={() => emailInputRef.current?.focus()}
                                   />

                            <Input name="email" 
                                   ref={emailInputRef} 
                                   icon="mail" 
                                   placeholder="E-mail" 
                                   keyboardType={"email-address"}
                                   autoCorrect={false} 
                                   autoCapitalize={"none"}
                                   returnKeyType={"next"}
                                   onSubmitEditing={() => passInputRef.current?.focus() }
                                   />

                            <Input name="senha" 
                                   ref={passInputRef}
                                   icon="lock" 
                                   placeholder="Senha" 
                                   returnKeyType={"send"}
                                   onSubmitEditing={() => formRef.current?.submitForm() }
                                   secureTextEntry />
                            
                            <Button onPress={() => formRef.current?.submitForm() }>Cadastrar</Button>
                        </Form>

                    </Container>

                </ScrollView>

                <BackToSignInButton onPress={() => Navigation.goBack()} >
                    <Icon name="arrow-left" size={20} color="#fff" />
                    <BackToSignInButtonText>Voltar para logon</BackToSignInButtonText>
                </BackToSignInButton>

            </KeyboardAvoidingView>
        </>
    )
};

export default SignUp;
