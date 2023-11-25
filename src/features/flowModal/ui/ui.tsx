import { ThemeContext, ThemeFactory, Modal, Button } from '@skbkontur/react-ui';
import styles from './ui.module.scss';
import { Text } from '@/entities/text';
import { FlowCard } from '@/features/flowCard';
import Document from '../../../../public/globalIcons/document.svg';
import Download from '../../../../public/globalIcons/download.svg';
import Image from 'next/image';
import { useConfirmFlowMutation } from '@/features/flows/api/changeFlow';
import { IFlow } from '@/shared/interface/flows';

export const FlowModal = ({
    setModalOpen,
    flow,
}: {
    setModalOpen: (value: boolean) => void;
    flow: IFlow;
}) => {
    const [confirmFlow] = useConfirmFlowMutation();

    return (
        <>
            <ThemeContext.Provider value={FlowModalTheme}>
                <Modal width={518} onClose={() => setModalOpen(false)}>
                    <Modal.Header>
                        <Text size={24} type="h2" weight={700}>
                            Заявка на секцию
                        </Text>
                    </Modal.Header>

                    <Modal.Body className={styles.layout}>
                        <div className={styles.divider}> </div>
                        <Text size={18} type="h3" weight={500}>
                            Данные законного представителя
                        </Text>
                        <section className={styles.section}>
                            <Text size={16} type="h4" weight={400}>
                                <span className={styles.title}>ФИО: </span>
                                {flow.representative.firstname +
                                    ' ' +
                                    flow.representative.lastname +
                                    ' ' +
                                    flow.representative.surname}
                            </Text>
                            <Text size={16} type="h4" weight={400}>
                                <span className={styles.title}>Паспорт: </span>{' '}
                                {flow.representative.passport}
                            </Text>
                            <Text size={16} type="h4" weight={400}>
                                <span className={styles.title}>Телефон: </span> {flow.phone_number}
                            </Text>
                        </section>
                        <Text size={18} type="h3" weight={500}>
                            Данные кандидата на обучение
                        </Text>
                        <section className={styles.section}>
                            <Text size={16} type="h4" weight={400}>
                                <span className={styles.title}>ФИО: </span>
                                {flow.student.firstname +
                                    ' ' +
                                    flow.student.lastname +
                                    ' ' +
                                    flow.student.surname}
                            </Text>
                            <Text size={16} type="h4" weight={400}>
                                <span className={styles.title}>СНИЛС: </span> 123-345-678 89
                            </Text>
                            {/* <Text size={16} type="h4" weight={400}>
                                <span className={styles.title}>Телефон: </span> +79169809898
                            </Text> */}
                        </section>
                        <Text size={18} type="h3" weight={500}>
                            Документы
                        </Text>
                        <section style={{ marginTop: '-8px' }} className={styles.section}>
                            <section className={styles.files}>
                                <div className={styles.divider} />
                                <div className={styles.column}>
                                    <span className={styles.file}>
                                        <Image
                                            src={Document}
                                            width={24}
                                            height={24}
                                            alt="Document"
                                        />
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
                                        <Image
                                            src={Document}
                                            width={24}
                                            height={24}
                                            alt="Document"
                                        />
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
                        </section>
                        <div style={{ marginTop: '-8px' }} className={styles.divider}>
                            {' '}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        {!flow.approved && (
                            <section className={styles.footer}>
                                <Button
                                    use="primary"
                                    size="medium"
                                    onClick={() => confirmFlow(flow.id)}>
                                    Принять
                                </Button>
                                <Button onClick={() => setModalOpen(false)} size="medium">
                                    Отклонить
                                </Button>
                            </section>
                        )}
                    </Modal.Footer>
                </Modal>
            </ThemeContext.Provider>
        </>
    );
};

const FlowModalTheme = ThemeFactory.create({
    modalBorderRadius: '16px',
    btnPrimaryBg: '#4077F2',
    btnBorderRadiusMedium: '8px',
});
