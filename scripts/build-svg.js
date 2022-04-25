/* eslint-disable */
const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, '../src/svg');

// Получаем список файлов в папке
fs.readdir(directoryPath, (err, rawFiles) => {
  if (err) {
    return console.log(`Unable to scan directory: ${err}`);
  }

  const files = rawFiles.filter(f => f.match('.svg$')); // Берем только svg
  const resultObj = {};

  for (let i = 0; i < files.length; i+=1) {
    const file = files[i]; // Имя читаемого файла
    const name = file.slice(0, -4); // Имя генерируемой иконки

    fs.readFile(path.join(directoryPath, file), 'utf8', (err, data) => {
      if (err) throw err;

      resultObj[name] = data.replace(/(\r\n|\n|\r)/gm, '');

      if (Object.keys(resultObj).length === files.length) {
        // Генерируем файл со всеми иконками
        const result = `/* eslint-disable */ export const IconPaths = ${JSON.stringify(resultObj, null, '  ')};`;
        fs.writeFile(path.join(directoryPath, 'generated.js'), result, err => {
          if (err) throw err;
        });
      }
    });
  }
});
/* eslint-enable */
