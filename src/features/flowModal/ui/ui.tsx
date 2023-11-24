import { ThemeContext, ThemeFactory, Modal, Button } from '@skbkontur/react-ui';
import styles from './ui.module.scss';
import { Text } from '@/entities/text';
import { FlowCard } from '@/features/flowCard';

export const FlowModal = ({ setModalOpen }: { setModalOpen?: (value: boolean) => void }) => {
    function modalClose() {
        setModalOpen && setModalOpen(false);
    }
    return (
        <>
            <ThemeContext.Provider value={FlowModalTheme}>
                <Modal width={518} onClose={modalClose}>
                    <Modal.Header>
                        <Text size={24} type="h2" weight={700}>
                            Заявка на секцию
                        </Text>
                    </Modal.Header>
                    <Modal.Body className={styles.layout}>
                        <Text size={18} type="h3" weight={500}>
                            Данные законного представителя
                        </Text>
                        <section className={styles.section}>
                            <Text size={16} type="h4" weight={400}>
                                <span className={styles.title}>СНИЛС: </span> Романова Ольга
                                Миххайловна
                            </Text>
                            <Text size={16} type="h4" weight={400}>
                                <span className={styles.title}>Снилс: </span> 123-345-678 89
                            </Text>
                            <Text size={16} type="h4" weight={400}>
                                <span className={styles.title}>Телефон: </span> +79169809898
                            </Text>
                        </section>
                        <Text size={18} type="h3" weight={500}>
                            Данные кандидата на обучение
                        </Text>
                        <section className={styles.section}>
                            <Text size={16} type="h4" weight={400}>
                                <span className={styles.title}>СНИЛС: </span> Романова Ольга
                                Миххайловна
                            </Text>
                            <Text size={16} type="h4" weight={400}>
                                <span className={styles.title}>Снилс: </span> 123-345-678 89
                            </Text>
                            <Text size={16} type="h4" weight={400}>
                                <span className={styles.title}>Телефон: </span> +79169809898
                            </Text>
                        </section>
                        <Text size={18} type="h3" weight={500}>
                            Документы
                        </Text>
                        <section className={styles.section}>
                            <FlowCard isModal />
                        </section>
                    </Modal.Body>
                    <Modal.Footer>
                        <section className={styles.footer}>
                            <Button use="primary" size="medium">
                                Принять
                            </Button>
                            <Button onClick={modalClose} size="medium">
                                Отклонить
                            </Button>
                        </section>
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
