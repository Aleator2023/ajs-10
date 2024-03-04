import  GameSavingLoader  from '../src/gamesavingloader';

describe('GameSavingLoader', () => {
  test('should load and parse game saving data', done => {
    // Ожидаемый результат выполнения GameSavingLoader.load
    const expectedData = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: "Hitman",
        level: 10,
        points: 2000
      }
    };

    GameSavingLoader.load().then(saving => {
      try {
        // Проверяем, что загруженные данные соответствуют ожидаемым
        expect(saving).toEqual(expectedData);
        done(); // Указываем Jest, что асинхронный тест завершен
      } catch (error) {
        done(error); // Передаем ошибку в done, если ожидание не выполнено
      }
    }).catch(error => {
      done(error); // Обрабатываем возможную ошибку при загрузке данных
    });
  });
});
