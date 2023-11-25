export const FormatData = (inputData: string) => {
    // Создаем объект Date из исходной строки
    const date = new Date(inputData);

    // Получаем компоненты даты и времени
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    // Форматируем результат
    const formattedString = `${day}.${month}.${year} в ${hours}:${minutes}`;

    // Выводим результат
    return formattedString;
};

export const PrepareData = () => {
    // Получаем текущую дату и время
    const currentDate = new Date();

    // Форматируем компоненты даты и времени
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    const milliseconds = currentDate.getMilliseconds().toString().padStart(3, '0');

    // Создаем строку в нужном формате
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;

    // Выводим результат
    return formattedDate
};
