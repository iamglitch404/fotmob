const fs = require('fs');
let content = fs.readFileSync('src/index.ts', 'utf8');

// Replace:
// export { XyzService } from './services/xyz.service';
// With:
// export * from './services/xyz.service';

content = content.replace(/export\s+\{\s*\w+Service\s*\}\s+from\s+('\.\/services\/[^']+');/g, 'export * from $1;');

fs.writeFileSync('src/index.ts', content);
console.log('Index updated');
