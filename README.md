# GhostTestResults

Para la ejecución de las pruebas de Cypress se utilizo la versión 10.11.0

PASOS PARA EJECUTAR LAS PRUEBAS

1. Clone el repositorio de la entrega.
2. Abra una terminal con privilegios de Administrador.
3. Usando el comando cd ubíquese en su terminal en la raíz del repositorio.
4. En la terminal instale el cypress-xpath con el siguiente comando: npm install -D cypress-xpath .
5. Despues incie el Cypress por medio de las instruccion cypress open .
6. Una vez habilitado el cypress inicie su instancia de ghost version (5.19).

Resemble JS
PASOS PARA EJECUTAR EL REPORTE

1. Clone el repositorio de la entrega.
2. Ejecute los escenarios de prueba que entrarán al reporte (puede ejecutar todos los escenarios de ambas herramientas).
3. Abra una terminal.
4. Usando el comando cd ubíquese en su terminal en la raíz del repositorio de Resemble (carpeta Resemble).
5. Ejecute el comando npm install
6. Ejecute el comando node index.js
7. Se ejecutará el script comparando las capturas de pantalla de cada escenario ejecutado y se comparará con las de la nueva versión. En la carpeta reports se encuentra el archivo reporte.html, el cual contiene el reporte de comparación visual.

