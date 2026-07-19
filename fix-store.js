const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'services');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

let importStatements = [];
let replacements = [];

files.forEach(file => {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Find all exports
  const regex = /export const (\w+) =/g;
  let match;
  let exports = [];
  while ((match = regex.exec(content)) !== null) {
    exports.push(match[1]);
  }
  
  if (exports.length > 0) {
    importStatements.push(`import { ${exports.join(', ')} } from '../services/${file.replace('.ts', '')}';`);
  }
});

let storeContent = fs.readFileSync('src/store/fotmob.store.ts', 'utf8');

// Replace all Class.method() calls
storeContent = storeContent.replace(/\b\w+Service\.(\w+)\b/g, '$1');

// Inject imports right after createStore
storeContent = storeContent.replace(/import { createStore } from 'zustand\/vanilla';/, `import { createStore } from 'zustand/vanilla';\n${importStatements.join('\n')}`);

fs.writeFileSync('src/store/fotmob.store.ts', storeContent);
console.log('Store fixed with correct imports and function calls.');
