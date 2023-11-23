'use client';

import { NavLogo } from '@/entities/header/navLogo';
import styles from './ui.module.scss';
import { Button, Input, ThemeContext, ThemeFactory, Tooltip } from '@skbkontur/react-ui';
import { FormEvent, useEffect, useState } from 'react';
import { useAuthUserMutation } from '../api';
import { IAuth } from '@/shared/interface/auth.interface';
import { useRouter } from 'next/navigation';

export const AuthForm = () => {
    const [login, { error, isLoading }] = useAuthUserMutation();
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('sumbit');
        const responseAuth = await login(formData as IAuth);
        console.log('respons', responseAuth);

        //TODO: еще необходимо сохранить токен в localstorage

        router.push('/section/my');
    };

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
