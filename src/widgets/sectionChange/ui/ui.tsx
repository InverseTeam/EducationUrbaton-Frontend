'use client';

import { Layout } from '@/shared/layout/page';
import styles from './ui.module.scss';
import { Title } from '@/entities/pageTitle';
import { Button, Input, Textarea, ThemeContext, ThemeFactory } from '@skbkontur/react-ui';
import { CategoryItem } from '@/entities/categoryItem';
import { Category } from '@/shared/interface/section';
import { CategoryItems, GroupItems } from '../data';
import { useState } from 'react';
import { GroupCreateCard } from '@/features/createCard';
import { GroupCard } from '@/features/groupCard';
import { NewGroupModal } from '@/features/newGroupModal';
import { useRouter } from 'next/navigation';

export const SectionChange = () => {
    const router = useRouter();
    const [categories, setCategories] = useState<Category[]>(CategoryItems);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleSelect = (id: number) => {
        const updatedRectangles = categories.map((category) => ({
            ...category,
            isSelect: category.id === id,
        }));

        setCategories(updatedRectangles);
    };

    return (
        <>
            {modalOpen && <NewGroupModal setModalOpen={() => setModalOpen(false)} />}
            <Layout>
                <Title>Редактирование</Title>

                <section className={styles.input}>
                    <Input maxLength={50} width={'450px'} size="large" placeholder="Название" />
                    <Textarea
                        autoResize
                        size="large"
                        lengthCounter={300}
                        showLengthCounter
                        width={'500px'}
                        counterHelp="Ограничение по вводимым символам"
                        placeholder="Описание"
                    />
                    <Input
                        maxLength={100}
                        width={'512px'}
                        size="large"
                        placeholder="Адрес проведения"
                    />
                </section>
                <section className={styles.category}>
                    <h2 className={styles.title}>Направление</h2>
                    <ul className={styles.row}>
                        {categories.map((item: Category, index) => (
                            <CategoryItem item={item} onSelect={handleSelect} key={index} />
                        ))}
                    </ul>
                </section>
                <section className={styles.groups}>
                    <h2 className={styles.title}>Группы</h2>
                    <div className={styles.groupWrap}>
                        {GroupItems.map((item) => (
                            <GroupCard key={item.id} item={item} />
                        ))}
                        <GroupCreateCard
                            onClick={() => setModalOpen(true)}
                            title="Добавить группу"
                        />
                    </div>
                </section>
                <section className={styles.btns}>
                    <ThemeContext.Provider value={sectionChangeTheme}>
                        <Button borderless use="primary" size="large">
                            Сохранить изменения
                        </Button>
                        <Button onClick={() => router.back()} size="large">
                            Отменить
                        </Button>
                        <Button use="danger" size="large">
                            Удалить секцию
                        </Button>
                    </ThemeContext.Provider>
                </section>
            </Layout>
        </>
    );
};

const sectionChangeTheme = ThemeFactory.create({
    btnBorderRadiusLarge: '8px',
    btnPrimaryBg: '#4077F2',
});
