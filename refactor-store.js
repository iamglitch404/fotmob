const fs = require('fs');
let content = fs.readFileSync('src/store/fotmob.store.ts', 'utf8');

content = content.replace(/\(await import\('\.\.\/services\/([^']+)'\)\)\.\w+(?:Service)?\.(\w+)/g, '(await import(\'../services/$1\')).$2');

fs.writeFileSync('src/store/fotmob.store.ts', content);
console.log('Store updated');
