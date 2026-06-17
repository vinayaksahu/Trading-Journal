const fs = require('fs');
const readline = require('readline');

const file = 'C:\\Users\\Vinayak\\.gemini\\antigravity\\brain\\5e594dc4-30e7-4904-a543-5137c890f655\\.system_generated\\logs\\transcript.jsonl';

const rl = readline.createInterface({
  input: fs.createReadStream(file),
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  if (line.includes('0.21') || line.includes('-3.04')) {
    console.log('Found seeded PNL in line:', line.substring(0, 300));
  }
});
