'use client';

import {
    Checkbox,
    Gapped,
    Group,
    Input,
    Modal,
    Select,
    ThemeContext,
    ThemeFactory,
} from '@skbkontur/react-ui';
import React, { FC, useState } from 'react';
import { Button, Toggle } from '@skbkontur/react-ui';

import styles from './NewGroupModal.module.scss';
import PlusIcon from '@/entities/icons/PlusIcon/PlusIcon';
import { Divider } from '@/entities/Divider';
import { Text } from '@/entities/Text';
import { ModelNewGroup } from '../model/ModelNewGroup';

export const NewGroupModal: FC<{ setOpen: (value: boolean) => void }> = ({ setOpen }) => {
    const {
        dataNewGroup,
        setDataNewGroup,
        filled,
        handleChangeDataNewGroup,
        handleChangeLessonsDayInput,
        lessonDays,
        days,
        warnText,
        handleAddDayInput,
    } = ModelNewGroup();

    const handleSubmitNewGroup = ()=> {
        //request 
    }

    return (
        <ThemeContext.Provider value={NewGroupModalTheme}>
            <form>
                <Modal onClose={() => setOpen(false)}>
                    <div className={styles.modalWrap}>
                        <Modal.Header>
                            <Text size={24} type="h1" weight={700}>
                                Новая группа
                            </Text>
                        </Modal.Header>
                        <Modal.Body className={styles.bodyWrap}>
                            <Gapped vertical gap={16}>
                                <Divider />
                                <Input
                                    size={'medium'}
                                    placeholder="Название группы"
                                    value={dataNewGroup.name}
                                    onChange={(e) =>
                                        handleChangeDataNewGroup('name', e.target.value)
                                    }
                                />
                                <Input
                                    size={'medium'}
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
                                            size={'medium'}
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
                                            size={'medium'}
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
                                            size={'medium'}
                                        />
                                    </Gapped>
                                ))}
                                {warnText && <h6>Заполните все поля</h6>}
                                <Button
                                    use="text"
                                    size={'medium'}
                                    icon={<PlusIcon />}
                                    onClick={handleAddDayInput}>
                                    День занятий
                                </Button>
                                <Divider />
                            </Gapped>
                        </Modal.Body>

                        <Modal.Footer>
                            <Gapped>
                                <Button
                                    use="primary"
                                    size={'medium'}
                                    disabled={!filled}
                                    type="submit">
                                    Сохранить
                                </Button>
                                <Button
                                    use="backless"
                                    size={'medium'}
                                    onClick={() => setOpen(false)}>
                                    Отменить
                                </Button>
                            </Gapped>
                        </Modal.Footer>
                    </div>
                </Modal>
            </form>
        </ThemeContext.Provider>
    );
};

const NewGroupModalTheme = ThemeFactory.create({
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
