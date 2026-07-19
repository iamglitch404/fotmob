const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'services');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Remove all block comments (JSDoc)
  content = content.replace(/\/\*\*[\s\S]*?\*\/\s*/g, '');
  
  // 2. Remove class definition wrapper
  content = content.replace(/export class \w+(?:Service)? \{\s*/, '');
  
  // Remove the last closing brace of the class
  content = content.replace(/\}\s*$/, '');
  
  // 3. Convert `static async getX(opts)` to `export const getX = async (opts)`
  content = content.replace(/static async (\w+)\(([^)]*)\)\s*:\s*Promise<([^>]+)>\s*\{/g, 'export const $1 = async ($2): Promise<$3> => {');
  
  // 4. Convert non-async `static getX(opts)` to `export const getX = (opts)`
  content = content.replace(/static (\w+)\(([^)]*)\)\s*:\s*([^ {]+)\s*\{/g, 'export const $1 = ($2): $3 => {');
  
  // Cleanup extra blank lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  fs.writeFileSync(filePath, content.trim() + '\n');
});

console.log('Refactored ' + files.length + ' service files successfully.');
