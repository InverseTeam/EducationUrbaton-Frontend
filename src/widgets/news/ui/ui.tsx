'use client';

import { Layout } from '@/shared/layout/page';
import styles from './ui.module.scss';
import { Title } from '@/entities/pageTitle';
import { Checkbox, DropdownMenu, Textarea, ThemeFactory, ThemeContext } from '@skbkontur/react-ui';
import { Button, MenuItem } from '@skbkontur/react-ui';
import { useState } from 'react';
import { GroupItems, NewsItems } from '../data';
import { Text } from '@/entities/text';
import { ArrowsIcon } from '@/entities/icons/arrows';
import { NewsCard } from '@/features/newsCard';
interface CheckboxState {
    [key: string]: boolean;
}

export const News: React.FC = () => {
    const [checkboxState, setCheckboxState] = useState<CheckboxState>({});

    const handleCheckboxChange = (id: number) => {
        const idString = id.toString();
        setCheckboxState((prevState) => ({
            ...prevState,
            [idString]: !prevState[idString],
        }));
    };

    return (
        <>
            <ThemeContext.Provider value={NewsTheme}>
                <Layout>
                    <Title>Новая новость</Title>
                    <Textarea
                        width={'500px'}
                        size="large"
                        maxLength={320}
                        showLengthCounter
                        autoResize
                        placeholder="Текст новости"
                    />
                    <section className={styles.group}>
                        <DropdownMenu caption={<Button size="medium">Получатели</Button>}>
                            {GroupItems.map((item) => (
                                <MenuItem
                                    key={item.id}
                                    // @ts-ignore
                                    onChange={() => handleCheckboxChange(item.id)}>
                                    <Checkbox checked={checkboxState[item.id] || false}>
                                        {item.name}
                                    </Checkbox>
                                </MenuItem>
                            ))}
                        </DropdownMenu>
                        <Button use="primary" size="medium">
                            Отправить
                        </Button>
                    </section>
                    <section className={styles.news}>
                        <div className={styles.header}>
                            <Text size={22} type="h2" weight={500}>
                                Остальные новости
                            </Text>
                            <Button icon={<ArrowsIcon />} size="medium" use="text">
                                Обновить
                            </Button>
                        </div>
                        <div className={styles.row}>
                            {NewsItems.map((item) => (
                                <NewsCard item={item} key={item.id} />
                            ))}
                        </div>
                    </section>
                </Layout>
            </ThemeContext.Provider>
        </>
    );
};
const NewsTheme = ThemeFactory.create({
    btnPrimaryBg: '#4077F2',
    btnBorderRadiusMedium: '8px',
    menuItemHoverBg: 'initial',
    menuItemBorderRadius: '8px',
    dropdownMenuHoverBg: '#4077F2',
    btnTextTextColor: '#4077F2',
});
