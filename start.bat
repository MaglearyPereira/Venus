@echo off
chcp 65001 >nul
echo ========================================
echo     🚀 VENUS PROJECT - UN SOLO COMANDO
echo ========================================
echo.

echo [1/3] Limpiando puertos anteriores...
npx kill-port 5000 5173 2>nul
echo.

echo [2/3] Iniciando Backend (puerto 5000)...
start "Venus Backend" cmd /k "cd /d backend && node server.js"
timeout /t 3 /nobreak >nul
echo.

echo [3/3] Iniciando Frontend (puerto 5173)...
start "Venus Frontend" cmd /k "npm run dev"
echo.

echo ========================================
echo     ✅ TODO INICIADO CORRECTAMENTE
echo ========================================
echo 🌐 Frontend: http://localhost:5173
echo ⚙️  Backend:  http://localhost:5000
echo 📧 API Contacto: http://localhost:5000/api/contact
echo 🩺 API Salud:    http://localhost:5000/api/health
echo ========================================
echo.
echo Presiona cualquier tecla para abrir el navegador...
pause >nul
start http://localhost:5173