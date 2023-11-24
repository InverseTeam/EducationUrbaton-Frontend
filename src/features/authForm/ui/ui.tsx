'use client';

import { NavLogo } from '@/entities/header/navLogo';
import styles from './ui.module.scss';
import { Button, Input, ThemeContext, ThemeFactory, Tooltip } from '@skbkontur/react-ui';
import { FormEvent, useEffect, useState } from 'react';
import { useAuthUserMutation } from '../api';
import { IAuth, IError, IResponseAuth } from '@/shared/interface/auth';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { sectionApi } from '@/features/section/api/sectionApi';

export const AuthForm = () => {
    const [login, { error, isLoading }] = useAuthUserMutation();
    const router = useRouter();
    const dispatch = useDispatch();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(sectionApi.util.resetApiState());
        if (typeof window !== 'undefined') {
            localStorage.removeItem('token');

            console.log(formData)

            const responseAuth = await login(formData as IAuth);

        
            const tokenAuth = (responseAuth as IResponseAuth).data?.auth_token;

            localStorage.setItem('token', tokenAuth);
        }

        router.push('/section/my');
    };

    useEffect(() => {
        if (error) {
          const errorStatus = (error as IError).status;
          if (errorStatus == 400) {
            alert('Неверный логин или пароль');
          }
        }
      }, [error]);

    const [formData, setFormData] = useState<IAuth>({
        email: '',
        password: '',
    });
    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
    const handleInputChange = (name: string, value: string) => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData, [name]: value };
            return updatedFormData;
        });
    };
    useEffect(() => {
        if (formData.email.length > 0 && formData.password.length > 0) {
            setBtnDisabled(false);
        } else setBtnDisabled(true);
    }, [formData.email, formData.password]);

    return (
        <>
            <ThemeContext.Provider value={AuthTheme}>
                <Tooltip render={TooltipFormRender} pos="right middle">
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <NavLogo />
                        <span className={styles.input}>
                            <Input
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                value={formData.email}
                                placeholder="Почта"
                                width={'100%'}
                                size="large"
                            />

                            <Input
                                onChange={(e) => handleInputChange('password', e.target.value)}
                                value={formData.password}
                                placeholder="Пароль"
                                type="password"
                                width={'100%'}
                                size="large"
                            />
                        </span>
                        <Button
                            width={'100%'}
                            use="primary"
                            disabled={btnDisabled}
                            size="large"
                            borderless
                            type="submit"
                            style={{ marginTop: '4px' }}>
                            Войти
                        </Button>
                    </form>
                </Tooltip>
            </ThemeContext.Provider>
        </>
    );
};

const AuthTheme = ThemeFactory.create({
    inputBorderRadiusLarge: '12px',
    inputBorderColorFocus: '#4077F2',
    btnPrimaryBg: '#4077F2',
    btnBorderRadiusLarge: '12px',
    btnDisabledBg: '#AFC5F7',
    btnDisabledTextColor: '#fff',
});

const TooltipFormRender = () => (
    <div
        style={{
            width: 250,
            fontSize: 16,
        }}>
        Неверный логин или пароль (TODO: надо поставить на обработчик)
    </div>
);
