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
  const svgs = {};
  const names = [];

  for (let i = 0; i < files.length; i+=1) {
    const file = files[i]; // Имя читаемого файла
    const name = file.slice(0, -4); // Имя генерируемой иконки
    names.push(name);

    fs.readFile(path.join(directoryPath, file), 'utf8', (err, data) => {
      if (err) throw err;

      svgs[name] = data.replace(/(\r\n|\n|\r)/gm, '');

      if (Object.keys(svgs).length === files.length) {
        // Генерируем файл со всеми иконками
        names.sort((a, b) => (a > b ? 1 : -1)); // Сортируем иконки по имени
        const result = `/* eslint-disable */ export const IconPaths = {\r\n`
        + `${names.map(filename => `"${filename}":${JSON.stringify(svgs[filename])}`).join(',\r\n')}\r\n};`;

        fs.writeFile(path.join(directoryPath, 'generated.js'), result, err => {
          if (err) throw err;
        });
      }
    });
  }
});
/* eslint-enable */
