const path = require('path');
const fs = require('fs');

const target = path.resolve('./node_modules/umi-build-dev/lib/routes/getRouteConfigFromDir.js');

export default function(debug?: Function): void {
  const content = fs.readFileSync(target, 'utf-8');
  const oldToken = "const JS_EXTNAMES = ['.js', '.jsx', '.ts', '.tsx'];";

  if (content.indexOf(oldToken) > -1) {
    // require patch
    fs.writeFileSync(
      target,
      content.replace(
        "const JS_EXTNAMES = ['.js', '.jsx', '.ts', '.tsx'];",
        "const JS_EXTNAMES = ['.js', '.jsx', '.ts', '.tsx', '.md'];",
      ),
    );

    if (debug) {
      debug(`'getRouteConfigFromDir' patch success, you should restart dev/build process.`);
    }
  }
}
