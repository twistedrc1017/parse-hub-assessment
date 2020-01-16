const express = require('express');
const slash = require('slash');
const fs = require('fs');
const path = require('path');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);
const SERVER_PORT = 8080;

const ROOT_DIR = './file-explorer';

const app = express();

app.use(express.json());

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

async function scanDir(dir) {
  try {
    const relativePath = dir.replace(ROOT_DIR, '');
    const scanTargetPath = path.join(__dirname, ROOT_DIR, dir);
    const scanTargetStats = await stat(scanTargetPath);
    if (scanTargetStats.isFile()) {
      const fileExt = path.extname(scanTargetPath);
      return [
        slash(relativePath),
        {
          path: slash(relativePath),
          name: path.basename(scanTargetPath, fileExt),
          type: 'file',
          ext: fileExt,
          size: formatBytes(scanTargetStats.size),
        },
      ];
    }
    if (scanTargetStats.isDirectory()) {
      const data = await readdir(scanTargetPath);
      const results = await Promise.all(
        data.map(async fileName => {
          const fullPath = path.join(scanTargetPath, fileName);
          const stats = await stat(fullPath);
          const fileExt = path.extname(fullPath);
          const relativeFilePath = path.join(dir, fileName);
          return {
            path: slash(relativeFilePath),
            name: path.basename(fileName, fileExt),
            type: stats.isFile() ? 'file' : stats.isDirectory() ? 'folder' : 'unknown',
            ext: fileExt,
            size: formatBytes(stats.size),
          };
        }),
      );
      return [slash(relativePath), results.sort((a, b) => (a.type === 'file' ? 1 : -1))];
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

app.post('/file-explorer', async (req, res) => {
  try {
    const result = await scanDir(req.body.path);
    return res.status(200).json(result);
  } catch (error) {
    // console.log('here');
    // return res.status(500).send(error);
    throw new Error(error);
  }
});

app.listen(SERVER_PORT, () => console.log(`[Server] Listening on port: ${SERVER_PORT}`));
