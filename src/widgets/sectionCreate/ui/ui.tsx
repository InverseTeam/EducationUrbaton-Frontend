'use client';

import { Layout } from '@/shared/layout/page';
import styles from './ui.module.scss';
import { Title } from '@/entities/pageTitle';
import { Button, Input, Textarea, ThemeContext, ThemeFactory, Toast } from '@skbkontur/react-ui';
import { CategoryItem } from '@/entities/categoryItem';
import { ICategory, IGroup } from '@/shared/interface/section';
import { useEffect, useState } from 'react';
import { GroupCreateCard } from '@/features/createCard';
import { NewGroupModal } from '@/features/newGroupModal';
import { useRouter } from 'next/navigation';
import {
    GetSectionCategories,
    addSecondsToSchedule,
    replaceDayOfWeekWithNumber,
    selectedCategory,
} from '../model';
import { useSelector } from 'react-redux';
import { RootState } from '@/shared/lib/store/store';
import { GroupCard } from '@/features/groupCard';
import { instanceLogged } from '@/shared/axios';
import { IUser } from '@/shared/interface/user';

export const SectionCreate = () => {
    const router = useRouter();
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [address, setAddress] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
    const userInfo = useSelector((state: RootState): IUser => state.userReducer);
    useEffect(() => {
        const GetCategories = async () => {
            const fetchCategories: ICategory[] = await GetSectionCategories();
            setCategories(fetchCategories);
        };
        GetCategories();
    }, []);
    const handleSelect = (id: number) => {
        const updatedRectangles = categories?.map((category) => ({
            ...category,
            isSelect: category.id === id,
        }));
        setCategories(updatedRectangles);
    };
    const createdGroups: IGroup[] | undefined = useSelector(
        (state: RootState): IGroup[] | undefined => {
            const groups = state.newGroupReducer;
            if (!groups) return undefined;
            const updatedGroups = addSecondsToSchedule(groups);

            return updatedGroups.map((group) => ({
                ...group,
                address: address,
                teacher: userInfo.id,
                total_students: 0,
                time: undefined,
            }));
        },
    );

    const createGroup = () => {
        if (address.length > 0) {
            setModalOpen(true);
        } else
            Toast.push('Заполните поле с адресом', {
                label: 'Окей',
                handler: () => Toast.push('Спасибо!'),
            });
    };
    useEffect(() => {
        if (name.length > 0 && description.length > 0 && address.length > 0) {
            setBtnDisabled(false);
        } else setBtnDisabled(true);
    }, [address.length, description.length, name.length]);

    /* REQUEST */

    const handleCreateSection = async () => {
        const requestData = {
            name: name,
            description: description,
            category: categories && selectedCategory(categories),
            address: address,
            groups: createdGroups && replaceDayOfWeekWithNumber(createdGroups),
        };
        try {
            await instanceLogged.post('/sections/create/', requestData);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            {modalOpen && <NewGroupModal setModalOpen={() => setModalOpen(false)} />}
            <Layout>
                <Title>Новая секция</Title>
                <section className={styles.input}>
                    <Input
                        onValueChange={setName}
                        value={name}
                        maxLength={50}
                        width={'450px'}
                        size="large"
                        placeholder="Название"
                    />
                    <Textarea
                        onValueChange={setDescription}
                        value={description}
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
                        value={address}
                        onValueChange={setAddress}
                        placeholder="Адрес проведения"
                    />
                </section>
                <section className={styles.category}>
                    <h2 className={styles.title}>Направление</h2>
                    <ul className={styles.row}>
                        {Array.isArray(categories)
                            ? categories?.map((item: ICategory, index) => (
                                  <CategoryItem item={item} onSelect={handleSelect} key={index} />
                              ))
                            : categories && (
                                  <CategoryItem item={categories} onSelect={handleSelect} />
                              )}
                    </ul>
                </section>
                <section className={styles.groups}>
                    <h2 className={styles.title}>Группы</h2>
                    <div className={styles.groupWrap}>
                        {createdGroups?.map((item, index) => (
                            <GroupCard key={index} item={item} />
                        ))}
                        <GroupCreateCard onClick={createGroup} title="Добавить группу" />
                    </div>
                </section>
                <section className={styles.btns}>
                    <ThemeContext.Provider value={sectionChangeTheme}>
                        <Button
                            onClick={handleCreateSection}
                            disabled={btnDisabled}
                            borderless
                            use="primary"
                            size="large">
                            Сохранить изменения
                        </Button>
                        <Button onClick={() => router.push('/section/my')} size="large">
                            Отменить
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
    btnDisabledBg: '#AFC5F7',
});
