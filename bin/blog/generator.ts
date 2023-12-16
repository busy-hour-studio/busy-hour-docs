import dayjs from 'dayjs';
import fs from 'node:fs';
import path from 'node:path';

function generator() {
  const args = process.argv.slice(2);
  const name = args.pop() ?? 'index';
  const currentTime = dayjs(new Date());
  const timestamp = currentTime.format('YYYY-MM-DD');
  const fileTimestamp = currentTime.format('YYYY-MM-DD_HH:mm:ss');
  const dirPath = path.resolve(__dirname, '../../blog', timestamp);
  const filePath = path.resolve(dirPath, `${fileTimestamp}-${name}.md`);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, {
      recursive: true,
    });
  }

  if (fs.existsSync(filePath)) {
    throw new Error('File already exists');
  }

  const content =
    '---' +
    '\n' +
    'title: ' +
    name +
    '\n' +
    'date: ' +
    timestamp +
    '\n' +
    '---';

  fs.writeFileSync(filePath, content);

  console.log(`File created: ${filePath}`);
}

generator();
