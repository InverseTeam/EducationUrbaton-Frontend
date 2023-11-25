import { IGroup, ISchedule } from '@/shared/interface/section';
import { IUser } from '@/shared/interface/user';
import { useEffect, useState } from 'react';

export const ModelNewGroup = () => {
    const [filled, setFilled] = useState(false);
    const [warnText, setWarnText] = useState(false);

    const [lessonDays, setLessonDays] = useState<ISchedule[]>([
        { id: null, week_day: null, start_time: '', end_time: '' },
    ]);

    const [dataNewGroup, setDataNewGroup] = useState<IGroup>({
        id: null,
        name: '',
        teacher: undefined,
        students: [],
        total_students: null,
        max_students: null,
        schedule: [] as ISchedule[],
    });
    const days: string[] = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье',
    ];

    const handleAddDayInput = () => {
        const isFilled =
            lessonDays[lessonDays.length - 1].week_day !== null &&
            lessonDays[lessonDays.length - 1].start_time !== '' &&
            lessonDays[lessonDays.length - 1].end_time !== '';
        setWarnText(!isFilled);
        isFilled &&
            setLessonDays([
                ...lessonDays,
                { id: 9999999999999, week_day: null, start_time: '', end_time: '' },
            ]);
    };

    const handleDeleteDayInput = () => {
        lessonDays.length !== 1 &&
            setLessonDays((lessonDays) =>
                lessonDays.filter((_, index) => index !== lessonDays.length - 1),
            );
    };

    const handleChangeLessonsDayInput = (index: number, name: string, value: string) => {
        setWarnText(false);
        const newValue = { ...lessonDays[index], [name]: value };
        setLessonDays((prev) => prev.map((item, i) => (i === index ? newValue : item)));
    };

    useEffect(() => {
        setDataNewGroup((prevData) => ({
            ...prevData,
            schedule: lessonDays,
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lessonDays]);

    const handleChangeDataNewGroup = (name: string, value: string) => {
        setDataNewGroup({ ...dataNewGroup, [name]: value });
    };

    useEffect(() => {
        const isLessonDayValid = lessonDays.every(
            (day) => day.week_day !== null && day.start_time !== '' && day.end_time !== '',
        );

        if (dataNewGroup.name.length !== 0 && dataNewGroup.max_students !== 0 && isLessonDayValid) {
            setFilled(true);
        } else {
            setFilled(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataNewGroup]);

    return {
        dataNewGroup,
        setDataNewGroup,
        filled,
        handleChangeDataNewGroup,
        handleChangeLessonsDayInput,
        lessonDays,
        days,
        warnText,
        handleAddDayInput,
        handleDeleteDayInput,
    };
};
