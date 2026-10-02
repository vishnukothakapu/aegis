const fs = require('fs');
const path = require('path');

const FOUNDRY_OUT = path.join(__dirname, '../../../contracts/out');
const ABI_DIR = path.join(__dirname, '../src/abi');

if (!fs.existsSync(ABI_DIR)) {
    fs.mkdirSync(ABI_DIR, { recursive: true });
}

const contracts = [
    'AegisRegistry',
    'AegisPolicy',
    'AegisPassport',
    'AegisExecutor'
];

let indexContent = '';

contracts.forEach(contract => {
    const artifactPath = path.join(FOUNDRY_OUT, `${contract}.sol`, `${contract}.json`);
    
    if (fs.existsSync(artifactPath)) {
        const artifact = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));
        const tsContent = `export const ${contract}ABI = ${JSON.stringify(artifact.abi, null, 2)} as const;\n`;
        
        fs.writeFileSync(path.join(ABI_DIR, `${contract}.ts`), tsContent);
        indexContent += `export * from './abi/${contract}';\n`;
        
        console.log(`✅ Extracted ABI for ${contract}`);
    } else {
        console.warn(`⚠️ Could not find artifact for ${contract}. Ensure 'forge build' has been run.`);
    }
});

fs.writeFileSync(path.join(__dirname, '../src/index.ts'), indexContent);
console.log('Done mapping ABIs!');
