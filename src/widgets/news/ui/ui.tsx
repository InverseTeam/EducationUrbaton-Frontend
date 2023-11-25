'use client';

import { Layout } from '@/shared/layout/page';
import styles from './ui.module.scss';
import { Title } from '@/entities/pageTitle';
import moment from 'moment';
import {
    Checkbox,
    DropdownMenu,
    Textarea,
    ThemeFactory,
    ThemeContext,
    Spinner,
    Select,
} from '@skbkontur/react-ui';
import { Button, MenuItem } from '@skbkontur/react-ui';
import { useState } from 'react';
import { Text } from '@/entities/text';
import { ArrowsIcon } from '@/entities/icons/arrows';
import { NewsCard } from '@/features/newsCard';
import { newsApi, useCreateNewsMutation, useGetAllNewsQuery } from '@/features/news/api';
import { INews } from '@/shared/interface/news';
import { PrepareData } from '@/shared/utils/formatData';
import { useDispatch } from 'react-redux';
interface CheckboxState {
    [key: string]: boolean;
}

export const News: React.FC = () => {
    const [checkboxState, setCheckboxState] = useState<CheckboxState>({});

    const [textNews, setTextNews] = useState<string>('');

    const { data: NewsItems, isLoading } = useGetAllNewsQuery();
    const [createNews] = useCreateNewsMutation();

    const handleCheckboxChange = (id: number) => {
        const idString = id.toString();
        setCheckboxState((prevState) => ({
            ...prevState,
            [idString]: !prevState[idString],
        }));
    };

    const dispatch = useDispatch();

    if (isLoading) {
        return <>Loading...</>;
    }

    console.log('data');

    const handleCreate = async () => {
        const newsData: INews = {
            content: textNews,
            tag: 1,
        };
        const res = await createNews(newsData);
        setTextNews('');
        // const patchCollection = dispatch(newsApi.util.upsertQueryData('News'));
    };

    const tags = [
        'Замена преподавателя',
        'Изменение в расписании',
        'Изменение аудитории',
        'Отмена занятия',
    ];

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
                        value={textNews}
                        onChange={(e) => setTextNews(e.target.value)}
                    />
                    <section className={styles.group}>
                        <Select
                            width={'width'}
                            placeholder="Тэг"
                            items={tags}
                            // value={value.week_day}
                            // onValueChange={(e) =>
                            //     e !== null && handleChangeLessonsDayInput(index, 'week_day', e)
                            // }
                            size="medium"
                        />
                        {/* <DropdownMenu caption={<Button size="medium">Получатели</Button>}>
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
                        </DropdownMenu> */}
                        <Button use="primary" size="medium" onClick={handleCreate}>
                            Отправить
                        </Button>
                    </section>
                    <section className={styles.news}>
                        <div className={styles.header}>
                            <Text size={22} type="h2" weight={500}>
                                Остальные новости
                            </Text>
                            <Button
                                icon={<ArrowsIcon />}
                                size="medium"
                                use="text"
                                onClick={() => {
                                    location.reload();
                                }}>
                                Обновить
                            </Button>
                        </div>
                        <div className={styles.row}>
                            {NewsItems &&
                                NewsItems.slice(0)
                                    .reverse()
                                    .map((item) => <NewsCard item={item} key={item.id} />)}
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
