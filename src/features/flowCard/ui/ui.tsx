'use client';

import styles from './ui.module.scss';
import Document from '../../../../public/globalIcons/document.svg';
import Download from '../../../../public/globalIcons/download.svg';
import Image from 'next/image';
import { Button, ThemeContext, ThemeFactory } from '@skbkontur/react-ui';
export const FlowCard = ({
    isModal = false,
    setModalOpen,
}: {
    isModal?: boolean;
    setModalOpen?: (value: boolean) => void;
}) => {
    function modalOpen() {
        setModalOpen && setModalOpen(true);
    }
    return (
        <>
            <article style={{ borderBottom: isModal ? 'none' : undefined }} className={styles.card}>
                {!isModal && (
                    <h3 className={styles.card__title}>
                        <span className={styles.blue}>Романова О. М.</span> отправил(а) заявку на
                        секцию
                        <span className={styles.blue}> Программирование на JavaScript</span>
                    </h3>
                )}
                <section className={styles.files}>
                    <div className={styles.divider}></div>
                    <div className={styles.column}>
                        <span className={styles.file}>
                            <Image src={Document} width={24} height={24} alt="Document" />
                            <p className={styles.text}>Паспорт</p>
                            <Image
                                className={styles.download}
                                src={Download}
                                width={24}
                                height={24}
                                alt="Download"
                            />
                        </span>
                        <span className={styles.file}>
                            <Image src={Document} width={24} height={24} alt="Document" />
                            <p className={styles.text}>Свидетельство о рождении.pdf</p>
                            <Image
                                className={styles.download}
                                src={Download}
                                width={24}
                                height={24}
                                alt="Download"
                            />
                        </span>
                    </div>
                </section>
                {!isModal && (
                    <>
                        <section className={styles.btn}>
                            <ThemeContext.Provider value={FlowCardTheme}>
                                <Button onClick={modalOpen} use="primary" size="medium" borderless>
                                    Открыть заявку
                                </Button>
                                <Button size="medium">Отклонить</Button>
                            </ThemeContext.Provider>
                        </section>
                        <section className={styles.date}>11.09 в 11.25</section>
                    </>
                )}
                <div className={styles.divider}></div>
            </article>
        </>
    );
};

const FlowCardTheme = ThemeFactory.create({
    btnPrimaryBg: '#4077F2',
    btnBorderRadiusMedium: '8px',
    btnDefaultBorderColor: '#DADAE7',
});
