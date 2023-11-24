'use client';

import {
    Gapped,
    Input,
    Modal,
    Select,
    ThemeContext,
    ThemeFactory,
    Tooltip,
} from '@skbkontur/react-ui';
import React, { useEffect, useRef } from 'react';
import { Button } from '@skbkontur/react-ui';
import styles from './ui.module.scss';
import { ModelNewGroup } from '../model';
import { Divider } from '@/entities/divider';
import { PlusIcon } from '@/entities/icons/plus';
import { BinIcon } from '@/entities/icons/bin';
import { Text } from '@/entities/text';

export const NewGroupModal = ({ setModalOpen }: { setModalOpen?: (value: boolean) => void }) => {
    const {
        dataNewGroup,
        filled,
        handleChangeDataNewGroup,
        handleChangeLessonsDayInput,
        lessonDays,
        days,
        warnText,
        handleAddDayInput,
        handleDeleteDayInput,
    } = ModelNewGroup();
    const tooltipRef = useRef<Tooltip | null>(null);
    function modalClose() {
        setModalOpen && setModalOpen(false);
    }
    const handleClickOnShow = () => {
        if (tooltipRef.current) {
            tooltipRef.current.show();
        }
    };

    useEffect(() => {
        if (!!warnText) handleClickOnShow();
    }, [warnText]);
    //TODO: нужно сделать изменяемый ModalHeader / Text
    return (
        <ThemeContext.Provider value={newGroupModalTheme}>
            <Modal onClose={modalClose}>
                <div className={styles.modalWrap}>
                    <Modal.Header>
                        <Text size={24} type="h2" weight={700}>
                            Новая группа
                        </Text>
                    </Modal.Header>
                    <Modal.Body className={styles.bodyWrap}>
                        <Gapped vertical gap={16}>
                            <Divider />
                            <Input
                                size="medium"
                                placeholder="Название группы"
                                value={dataNewGroup.name}
                                onChange={(e) => handleChangeDataNewGroup('name', e.target.value)}
                            />
                            <Input
                                size="medium"
                                placeholder="Максимальное количество учеников"
                                type="number"
                                value={dataNewGroup.maxStudent}
                                onChange={(e) =>
                                    handleChangeDataNewGroup('maxStudent', e.target.value)
                                }
                            />
                            <Text size={16} type="h3">
                                Расписание
                            </Text>

                            {lessonDays.map((value, index) => (
                                <Gapped gap={16} key={index}>
                                    <Select
                                        width={'width'}
                                        placeholder="День недели"
                                        items={days}
                                        value={value.day}
                                        onValueChange={(e) =>
                                            e !== null &&
                                            handleChangeLessonsDayInput(index, 'day', e)
                                        }
                                        size="medium"
                                    />
                                    <Input
                                        type="time"
                                        placeholder="Время начала"
                                        value={value.timeStart}
                                        onChange={(e) =>
                                            handleChangeLessonsDayInput(
                                                index,
                                                'timeStart',
                                                e.target.value,
                                            )
                                        }
                                        size="medium"
                                    />
                                    <Input
                                        type="time"
                                        placeholder="Время конца"
                                        value={value.timeEnd}
                                        onChange={(e) =>
                                            handleChangeLessonsDayInput(
                                                index,
                                                'timeEnd',
                                                e.target.value,
                                            )
                                        }
                                        size="medium"
                                    />
                                </Gapped>
                            ))}
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Tooltip
                                    ref={tooltipRef}
                                    trigger="manual"
                                    render={TooltipCreateRender}
                                    pos="right middle">
                                    <Button
                                        use="text"
                                        size="medium"
                                        icon={<PlusIcon />}
                                        onClick={handleAddDayInput}>
                                        День занятий
                                    </Button>
                                </Tooltip>
                                <ThemeContext.Provider value={deleteButtonTheme}>
                                    <Button
                                        use="text"
                                        size="medium"
                                        // icon={<TrashCanIcon16Regular />}
                                        onClick={handleDeleteDayInput}
                                        icon={<BinIcon />}>
                                        Удалить день
                                    </Button>
                                </ThemeContext.Provider>
                            </span>
                            <Divider />
                        </Gapped>
                    </Modal.Body>

                    <Modal.Footer>
                        <Gapped>
                            <Button use="primary" size="medium" disabled={!filled} type="submit">
                                Сохранить
                            </Button>
                            <Button onClick={modalClose} use="backless" size="medium">
                                Отменить
                            </Button>
                        </Gapped>
                    </Modal.Footer>
                </div>
            </Modal>
        </ThemeContext.Provider>
    );
};

const newGroupModalTheme = ThemeFactory.create({
    inputWidth: '100%',
    btnPrimaryBg: '#6592F4',
    btnPrimaryTextColor: '#fff',
    btnBorderRadiusMedium: '8px',

    modalBorderRadius: '16px',
    btnTextTextColor: '#6592F4',
    inputBorderRadiusMedium: '8px',
    selectBorderRadiusMedium: '8px',
    btnDisabledBg: '#AFC5F7',
    btnDisabledTextColor: '#fff',
});

const deleteButtonTheme = ThemeFactory.create({
    btnTextTextColor: '#F46565',
    btnBorderRadiusMedium: '8px',
});

const TooltipCreateRender = () => (
    <div
        style={{
            width: 250,
            fontSize: 16,
        }}>
        Заполните все поля
    </div>
);
