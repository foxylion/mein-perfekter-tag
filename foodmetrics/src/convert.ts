import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { parse as parsePath } from 'path';

interface Metric {
  type: string;
  value: number;
  unit: string;
}

const simplifyType = (type: string) =>
  type
    .toLowerCase()
    .replace(/ /g, '_')
    .replace(/[\(\)\,\-]/g, '')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss');

(async () => {
  const files = readdirSync('raw-input/');

  files.forEach(file => {
    console.log(`Processing ${file}...`);
    const buffer = readFileSync(`raw-input/${file}`);
    const lines = buffer.toString().split('\n');
    const metrics: Metric[] = lines
      .map(line => {
        const matches = line.match(/^(.+?)\t([0-9\,\.]+?) ([^\t]+)\t/);
        if (matches) {
          const type = simplifyType(matches[1]);
          const value = parseFloat(matches[2].replace(',', '.'));
          const unit = matches[3];
          return { type, value, unit };
        } else {
          return null;
        }
      })
      .filter((it): it is Metric => it !== null)
      .filter(it => ['kilojoule', 'vitamin_e_tocopherolaequivalent'].indexOf(it.type) === -1);

    const name = parsePath(file).name + 'Metrics';
    writeFileSync(
      `../client/src/types/foodMetrics/${name}.ts`,
      `// tslint:disable:object-literal-sort-keys

import { FoodMetrics } from '../FoodMetrics';

export const ${name}: FoodMetrics = {
  ${metrics.map(metric => `${metric.type}: ${metric.value}, // ${metric.unit}`).join('\n  ')}
};
`
    );
  });
})();
