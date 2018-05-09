// @flow

// #region imports
const { join } = require('path');
const fs = require('fs');
const chalk = require('chalk');
// #endregion

// #region constants
const indexRaw = join(__dirname, './index-raw.html');
const destHtml = join(__dirname, '../docs/public/index.html');
// #endregion

// #region utils
function copyFile(sourceFilePath, destFilePath) {
  fs.createReadStream(sourceFilePath).pipe(fs.createWriteStream(destFilePath));
}
// #endregion

// #region make production bundle
function prepareIndexHtml() {
  if (fs.existsSync(indexRaw)) {
    copyFile(indexRaw, destHtml);

    console.log(
      `${chalk.default.greenBright('==== index.html generated 🏋️‍ ====')}`,
    );
  }
}
// #endergion

prepareIndexHtml();
