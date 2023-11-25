'use client';

import styles from './ui.module.scss';
import Document from '../../../../public/globalIcons/document.svg';
import Download from '../../../../public/globalIcons/download.svg';
import Tick from '../../../../public/globalIcons/shield-tick.svg';
import Image from 'next/image';
import { Button, ThemeContext, ThemeFactory } from '@skbkontur/react-ui';
import { useGetAllFlowsQuery } from '@/features/flows/api';
import { IFlow } from '@/shared/interface/flows';
import { useState } from 'react';
import { FlowModal } from '@/features/flowModal';
import { useConfirmFlowMutation, useRefuseFlowMutation } from '@/features/flows/api/changeFlow';
import { Text } from '@/entities/text';
export const FlowCard = ({ flow }: { flow: IFlow }) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const [refuseFlow] = useRefuseFlowMutation();

    return (
        <>
            {modalOpen && <FlowModal flow={flow} setModalOpen={() => setModalOpen(false)} />}

            <article
                style={{ borderBottom: modalOpen ? 'none' : undefined }}
                className={styles.card}>
                <div className={styles.info}>
                    <h3 className={styles.card__title}>
                        {/* Написать инициалы отправителя */}
                        <span className={styles.blue}>
                            {flow.student.lastname} {flow.student.firstname[0]}.{' '}
                            {flow.student.surname[0]}
                        </span>{' '}
                        отправил(а) заявку на секцию
                        <span className={styles.blue}> {flow.section.name}</span>
                        {/* { && <h6>Подтверждена</h6>}
                        {flow.open ? <h6>Открыта</h6> : <h6>Отклонена</h6>} */}
                    </h3>

                    <section className={styles.files}>
                        <div className={styles.divider} />
                        <div className={styles.column}>
                            <span className={styles.file}>
                                <Image src={Document} width={24} height={24} alt="Document" />
                                <p className={styles.text}>Паспорт</p>
                                <a href={flow.document} download>
                                    <Image
                                        className={styles.download}
                                        src={Download}
                                        width={24}
                                        height={24}
                                        alt="Download"
                                    />
                                </a>
                            </span>
                            <span className={styles.file}>
                                <Image src={Document} width={24} height={24} alt="Document" />
                                <p className={styles.text}>
                                    Согласие на обработку персональных данных.pdf
                                </p>
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

                    <>
                        <section className={styles.btn}>
                            <ThemeContext.Provider value={FlowCardTheme}>
                                <Button
                                    onClick={() => setModalOpen(true)}
                                    use="primary"
                                    size="medium"
                                    borderless>
                                    Открыть заявку
                                </Button>

                                {!flow.approved && (
                                    <Button size="medium" onClick={() => refuseFlow(flow.id)}>
                                        Отклонить
                                    </Button>
                                )}
                            </ThemeContext.Provider>
                        </section>
                        {/* <section className={styles.date}>{flow.}</section> */}
                    </>
                </div>

                {flow.approved && (
                    <div className={styles.accept__wrap}>
                        <Image
                            className={styles.download}
                            src={Tick}
                            width={32}
                            height={32}
                            alt="Tick"
                        />
                        <Text type="h1" size={24} weight={700}>
                            Заявка успешно принята
                        </Text>
                    </div>
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
