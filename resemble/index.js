const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");

const { options, krakenFolders, krakenPath } = config;

async function executeTest() {
  let resultInfo = {};
  let datetime = new Date().toISOString().replace(/:/g, ".");
  if (fs.existsSync(krakenPath)) {
    if (!fs.existsSync(`./reports/${datetime}`)) {
      fs.mkdirSync(`./reports/${datetime}`, { recursive: true });
    }
    for (pair of krakenFolders) {
      if (
        fs.existsSync(krakenPath + pair[0]) &&
        fs.existsSync(krakenPath + pair[1])
      ) {
        if (!fs.existsSync(`./reports/${datetime}/${pair[0]}`)) {
          fs.mkdirSync(`./reports/${datetime}/${pair[0]}`, { recursive: true });
        }
        const refFiles = fs.readdirSync(krakenPath + pair[0]);
        const compFiles = fs.readdirSync(krakenPath + pair[1]);
        const steps =
          refFiles.length === compFiles.length
            ? refFiles.length
            : Math.min(refFiles.length, compFiles.length);
        let stepsInfo = {};
        for (i = 0; i < steps; i++) {
          const data = await compareImages(
            fs.readFileSync(krakenPath + pair[0] + "/" + refFiles[i]),
            fs.readFileSync(krakenPath + pair[1] + "/" + compFiles[i]),
            options
          );
          stepsInfo[i] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime,
            refImage: '../../../' + krakenPath + pair[0] + "/" + refFiles[i],
            compImage: '../../../' + krakenPath + pair[1] + "/" + compFiles[i],
            comparison: `./compare-step${i}.png`,
            verRef: 'Ghost 3.41.1',
            compRef: 'Ghost 4.44.0'
          };
          fs.writeFileSync(
            `./reports/${datetime}/${pair[0]}/compare-step${i}.png`,
            data.getBuffer()
          );
        }
        resultInfo[pair[0]] = stepsInfo;
        fs.writeFileSync(
          `./reports/${datetime}/${pair[0]}/scenario.html`,
          createScenario(datetime, stepsInfo, pair[0], 'Kraken')
        );
        fs.copyFileSync("./index.css", `./reports/${datetime}/${pair[0]}/index.css`);
        console.log(
          "------------------------------------------------------------------------------------"
        );
        console.log("Scenario report finished: " + pair[0]);
      }
    }
  }
  fs.writeFileSync(
    `./reports/${datetime}/report.html`,
    createReport(datetime, resultInfo)
  );
  fs.copyFileSync("./index.css", `./reports/${datetime}/index.css`);
  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("Execution finished. Check the report in the reports folder");
  return resultInfo;
}
(async () => console.log(await executeTest()))();

function step(b, info) {
  return `<div class=" browser" id="test0">
  <div class=" btitle">
      <h2>Step #${b}</h2>
      <p>Data: ${JSON.stringify(info)}</p>
  </div>
  <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Reference Ver: ${info.verRef}</span>
      <img class="img2" src=${info.refImage} id="refImage" label="Reference">
    </div>
    <div class="imgcontainer">
      <span class="imgname">Test Ver: ${info.compRef}</span>
      <img class="img2" src=${info.compImage} id="testImage" label="Test">
    </div>
  </div>
  <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Diff</span>
      <img class="imgfull" src=${info.comparison} id="diffImage" label="Diff">
    </div>
  </div>
</div>`;
}

function scenarios(key){
  return `
  <li><a href="./${key}/scenario.html">${key}</a></li>
  `
}

function createReport(datetime, resInfo) {
  const llaves = Object.keys(resInfo);
  return `
  <html>
      <head>
          <title>Reporte VRT </title>
          <link href="index.css" type="text/css" rel="stylesheet">
      </head>
      <body>
          <h1>Reporte de diferencias visuales 
          </h1>
          <p>Executed: ${datetime}</p>
          <h4>Escoja un escenario para ver la comparación visual:
            </h4>
          <ol>
              ${llaves.map((llave) => scenarios(llave))}
          </ol>
      </body>
  </html>`;
}

function createScenario(datetime, resInfo, name, tool) {
  const lista = Object.values(resInfo);
  return `
  <html>
      <head>
          <title> ${name}  </title>
          <link href="index.css" type="text/css" rel="stylesheet">
      </head>
      <body>
          <h1>Reporte de Escenario: ${name} 
          </h1>
          <p>Executed: ${datetime}</p>
          <h3>Herramienta de Pruebas: ${tool} 
          </h3>
          <div id="visualizer">
              ${lista.map((value, index) => step(index, value))}
          </div>
      </body>
  </html>`;
}
