// @flow

// #region imports
const { join } = require('path');
const fs = require('fs');
const chalk = require('chalk');
// #endregion

// #region constants
const indexRaw = join(__dirname, '../docs/index-raw.html');
const snapDoneHtml = join(__dirname, '../docs/200.html');
const snapFailedHtml = join(__dirname, '../docs/404.html');
const destHtml = join(__dirname, '../docs/index.html');
// #endregion

// #region utils
function deleteFile(filePath) {
  fs.unlinkSync(filePath);
}

function copyFile(sourceFilePath, destFilePath) {
  fs.createReadStream(sourceFilePath).pipe(fs.createWriteStream(destFilePath));
}
// #endregion

// #region make production bundle
function prepareIndexHtml() {
  if (fs.existsSync(indexRaw)) {
    if (fs.existsSync(snapDoneHtml)) {
      // 200.html delete
      deleteFile(snapDoneHtml);
      console.log(
        `${chalk.default.redBright('==== 200.html deleted 🔫 ====')}`,
      );
    }

    if (fs.existsSync(snapFailedHtml)) {
      // 404.html delete
      deleteFile(snapFailedHtml);
      console.log(
        `${chalk.default.redBright('==== 404.html deleted 🔫 ====')}`,
      );
    }

    copyFile(indexRaw, destHtml);

    console.log(
      `${chalk.default.greenBright('==== index.html generated 🏋️‍ ====')}`,
    );
  }
}
// #endergion

prepareIndexHtml();
