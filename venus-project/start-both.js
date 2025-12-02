// start-both.js - UN SOLO COMANDO PARA TODO
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createInterface } from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('='.repeat(50));
console.log('🚀 INICIANDO VENUS PROJECT');
console.log('='.repeat(50));

// Función para limpiar puertos ocupados
async function cleanPorts() {
  console.log('🔧 Limpiando puertos anteriores...');
  
  try {
    const { execSync } = await import('child_process');
    
    // Matar procesos en puerto 5000 (backend)
    try {
      execSync('npx kill-port 5000', { stdio: 'inherit' });
    } catch {}
    
    // Matar procesos en puerto 5173 (frontend Vite)
    try {
      execSync('npx kill-port 5173', { stdio: 'inherit' });
    } catch {}
    
    console.log('✅ Puertos limpiados');
  } catch (error) {
    console.log('⚠️  No se pudieron limpiar todos los puertos, continuando...');
  }
}

// Función para iniciar backend
function startBackend() {
  console.log('\n🔄 Iniciando Backend...');
  
  const backend = spawn('node', ['server.js'], {
    cwd: join(__dirname, 'backend'),
    stdio: 'pipe',
    shell: true
  });

  backend.stdout.on('data', (data) => {
    const output = data.toString();
    console.log(`[BACKEND] ${output}`);
    
    // Cuando el backend esté listo, iniciar frontend
    if (output.includes('Servidor corriendo') || output.includes('listening')) {
      console.log('✅ Backend listo!');
      startFrontend();
    }
  });

  backend.stderr.on('data', (data) => {
    console.error(`[BACKEND ERROR] ${data.toString()}`);
  });

  return backend;
}

// Función para iniciar frontend
function startFrontend() {
  console.log('\n🔄 Iniciando Frontend...');
  
  const frontend = spawn('npm', ['run', 'dev'], {
    cwd: __dirname,
    stdio: 'pipe',
    shell: true
  });

  frontend.stdout.on('data', (data) => {
    console.log(`[FRONTEND] ${data.toString()}`);
  });

  frontend.stderr.on('data', (data) => {
    console.error(`[FRONTEND ERROR] ${data.toString()}`);
  });

  return frontend;
}

// Función principal
async function main() {
  await cleanPorts();
  
  const backendProcess = startBackend();
  
  // Manejar Ctrl+C para cerrar ambos procesos
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  console.log('\n' + '='.repeat(50));
  console.log('✅ Ambos servidores iniciándose...');
  console.log('📌 Backend:  http://localhost:5000');
  console.log('📌 Frontend: http://localhost:5173');
  console.log('📌 Presiona Ctrl+C para detener ambos');
  console.log('='.repeat(50) + '\n');
  
  process.on('SIGINT', () => {
    console.log('\n🛑 Deteniendo servidores...');
    backendProcess.kill();
    process.exit(0);
  });
}

// Ejecutar
main().catch(console.error);