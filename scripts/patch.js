const path = require('path');
const fs = require('fs');

const target = path.resolve('node_modules/umi-build-dev/lib/routes/getRouteConfigFromDir.js');

const content = fs.readFileSync(target, 'utf-8');

fs.writeFileSync(
  target,
  content.replace(
    "const JS_EXTNAMES = ['.js', '.jsx', '.ts', '.tsx'];",
    "const JS_EXTNAMES = ['.js', '.jsx', '.ts', '.tsx', '.md'];",
  ),
);
