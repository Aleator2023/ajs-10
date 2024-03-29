const read = require('../src/reader').default;
const json = require('../src/parser').default;


export default class GameSavingLoader {
  static load() {
    // Используем функцию read для получения данных
    return read()
      .then((data) => {
        // После успешного чтения передаем данные в функцию json для парсинга
        return json(data);
      })
      .then((jsonData) => {
        // После успешного парсинга преобразуем JSON в объект
        return JSON.parse(jsonData);
      })
      .catch((error) => {
        // Обрабатываем возможные ошибки в процессе чтения или парсинга
        console.error("Error loading game saving:", error);
        throw error; // Перебрасываем ошибку дальше
      });
  }
}

// Пример использования
GameSavingLoader.load().then((saving) => {
  console.log("Game saving loaded:", saving);
}).catch((error) => {
  console.error("Failed to load game saving:", error);
});
