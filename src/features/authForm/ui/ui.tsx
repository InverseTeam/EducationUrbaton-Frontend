'use client';

import { NavLogo } from '@/entities/header/navLogo';
import styles from './ui.module.scss';
import { Button, Input, ThemeContext, ThemeFactory, Tooltip } from '@skbkontur/react-ui';
import { useEffect, useState } from 'react';

export const AuthForm = () => {
    const [formData, setFormData] = useState({
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
                    <form className={styles.form}>
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
