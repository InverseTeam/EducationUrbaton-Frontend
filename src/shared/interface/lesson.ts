export interface ILessonDay {
    day: string | null;
    timeStart: string;
    timeEnd: string;
}

export interface IDataNewGroup {
    name: string;
    maxStudent: string;
    lessonDays: ILessonDay[];
}
