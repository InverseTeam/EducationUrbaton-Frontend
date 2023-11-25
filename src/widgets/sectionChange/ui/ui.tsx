'use client';

import { Layout } from '@/shared/layout/page';
import styles from './ui.module.scss';
import { Title } from '@/entities/pageTitle';
import { Button, Input, Textarea, ThemeContext, ThemeFactory } from '@skbkontur/react-ui';
import { CategoryItem } from '@/entities/categoryItem';
import { ICategory, IGroup, ISection } from '@/shared/interface/section';
import { useEffect, useState } from 'react';
import { GroupCreateCard } from '@/features/createCard';
import { NewGroupModal } from '@/features/newGroupModal';
import { useRouter } from 'next/navigation';
import { DeleteSectionByID, GetSectionByID } from '../model';
import { GroupCard } from '@/features/groupCard';
import { instanceLogged } from '@/shared/axios';

export const SectionChange = ({ id }: { id: number }) => {
    const router = useRouter();
    const [categories, setCategories] = useState<ICategory | null>(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [sectionData, setSectionData] = useState<ISection | null>(null);
    const [name, setName] = useState<string>(sectionData?.name || '');
    const [description, setDescription] = useState<string>(sectionData?.description || '');
    const [address, setAddress] = useState<string>(sectionData?.address || '');
    useEffect(() => {
        const GetSection = async () => {
            const fetchSection: ISection = await GetSectionByID({ id });
            setSectionData(fetchSection);
            setName(fetchSection.name);
            setDescription(fetchSection.description);
            setAddress(fetchSection.address);
            setCategories(fetchSection.category);
        };
        GetSection();
    }, []);
    const handleDeleteSection = async () => {
        await DeleteSectionByID({ id });
    };
    const handleChangeSection = async () => {
        await instanceLogged.patch(`/sections/${id}/`, {
            name: name,
            description: description,
            address: address,
        });
    };
    return (
        <>
            {modalOpen && <NewGroupModal setModalOpen={() => setModalOpen(false)} />}
            <Layout>
                <Title>Редактирование</Title>

                <section className={styles.input}>
                    <Input
                        value={name}
                        onValueChange={setName}
                        maxLength={50}
                        width={'450px'}
                        size="large"
                        placeholder="Название"
                    />
                    <Textarea
                        autoResize
                        value={description}
                        onValueChange={setDescription}
                        size="large"
                        lengthCounter={300}
                        showLengthCounter
                        width={'500px'}
                        counterHelp="Ограничение по вводимым символам"
                        placeholder="Описание"
                    />
                    <Input
                        value={address}
                        onValueChange={setAddress}
                        maxLength={100}
                        width={'512px'}
                        size="large"
                        placeholder="Адрес проведения"
                    />
                </section>
                <section className={styles.category}>
                    <h2 className={styles.title}>Направление</h2>
                    <ul className={styles.row}>
                        <CategoryItem item={categories} />
                    </ul>
                </section>
                <section className={styles.groups}>
                    <h2 className={styles.title}>Группы</h2>
                    <div className={styles.groupWrap}>
                        {sectionData?.groups.map((item: IGroup) => (
                            <GroupCard address={sectionData.address} key={item.id} item={item} />
                        ))}
                        <GroupCreateCard
                            onClick={() => setModalOpen(true)}
                            title="Добавить группу"
                        />
                    </div>
                </section>
                <section className={styles.btns}>
                    <ThemeContext.Provider value={sectionChangeTheme}>
                        <Button onClick={handleChangeSection} borderless use="primary" size="large">
                            Сохранить изменения
                        </Button>
                        <Button onClick={() => router.back()} size="large">
                            Отменить
                        </Button>
                        <Button onClick={handleDeleteSection} use="danger" size="large">
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
