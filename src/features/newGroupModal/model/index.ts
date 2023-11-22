import { useEffect, useState } from 'react';

interface ILessonDay {
    day: string | null;
    timeStart: string;
    timeEnd: string;
}

interface IDataNewGroup {
    name: string;
    maxStudent: string;
    lessonDays: ILessonDay[];
}

export const ModelNewGroup = () => {
    const [filled, setFilled] = useState(false);
    const [warnText, setWarnText] = useState(false);

    const [lessonDays, setLessonDays] = useState<ILessonDay[]>([
        { day: null, timeStart: '', timeEnd: '' },
    ]);

    const [dataNewGroup, setDataNewGroup] = useState<IDataNewGroup>({
        name: '',
        maxStudent: '',
        lessonDays: [],
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
            lessonDays[lessonDays.length - 1].day !== null &&
            lessonDays[lessonDays.length - 1].timeStart !== '' &&
            lessonDays[lessonDays.length - 1].timeEnd !== '';
        setWarnText(!isFilled);
        isFilled && setLessonDays([...lessonDays, { day: null, timeStart: '', timeEnd: '' }]);
    };

    const handleChangeLessonsDayInput = (index: number, name: string, value: string) => {
        setWarnText(false);
        const newValue = { ...lessonDays[index], [name]: value };

        setLessonDays((prev) => prev.map((item, i) => (i === index ? newValue : item)));
        
    };

useEffect(()=>{
    setDataNewGroup({...dataNewGroup, lessonDays: lessonDays })
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [lessonDays])


    const handleChangeDataNewGroup = (name: string, value: string) => {
        setDataNewGroup({ ...dataNewGroup, [name]: value });
        
    };

    useEffect (()=> {
        const isLessonDayValid = lessonDays.every(day => day.day !== null && day.timeStart !== '' && day.timeEnd !== '');
        

        if (dataNewGroup.name.length !== 0 && dataNewGroup.maxStudent.length !== 0 && isLessonDayValid) {
            setFilled(true);
        }else {
            setFilled(false);

        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataNewGroup])

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
    };
};
