import { FoodMetrics } from './FoodMetrics';
import { ApfelMetrics } from './foodMetrics/ApfelMetrics';
import { ApfelsaftMetrics } from './foodMetrics/ApfelsaftMetrics';
import { BananeMetrics } from './foodMetrics/BananeMetrics';
import { ButterMetrics } from './foodMetrics/ButterMetrics';
import { ColaMetrics } from './foodMetrics/ColaMetrics';
import { GoudaMetrics } from './foodMetrics/GoudaMetrics';
import { KaffeeMetrics } from './foodMetrics/KaffeeMetrics';
import { KaffeeMilchMetrics } from './foodMetrics/KaffeeMilchMetrics';
import { MineralwasserMetrics } from './foodMetrics/MineralwasserMetrics';
import { MuesliMetrics } from './foodMetrics/MuesliMetrics';
import { PaniertesSchnitzelMetrics } from './foodMetrics/PaniertesSchnitzelMetrics';
import { PommesFritesMetrics } from './foodMetrics/PommesFritesMetrics';
import { SprudelMetrics } from './foodMetrics/SprudelMetrics';
import { VollkornbrotMetrics } from './foodMetrics/VollkornbrotMetrics';
import { WeizenbroetchenMetrics } from './foodMetrics/WeizenbroetchenMetrics';

export interface FoodInfo {
  nicename: string;
  unit: string;
  gPerUnit: number;
}

export interface Food {
  info: FoodInfo;
  metrics: FoodMetrics;
}

export const foodList: Food[] = [
  // Frühstück
  { info: { nicename: 'Butter', unit: 'Stückchen (ca. 10g)', gPerUnit: 10 }, metrics: ButterMetrics },
  { info: { nicename: 'Käse (Gouda)', unit: 'Scheibe (ca. 40g)', gPerUnit: 40 }, metrics: GoudaMetrics },
  { info: { nicename: 'Müsli, Milch & Obst', unit: 'Schüssel (ca. 300g)', gPerUnit: 300 }, metrics: MuesliMetrics },
  { info: { nicename: 'Vollkornbrot', unit: 'Scheibe (ca. 50g)', gPerUnit: 50 }, metrics: VollkornbrotMetrics },
  { info: { nicename: 'Brötchen (Weizen)', unit: 'Stück (ca. 50g)', gPerUnit: 50 }, metrics: WeizenbroetchenMetrics },

  // Mittag
  { info: { nicename: 'Paniertes Schnitzel (Schwein)', unit: 'Stück (ca. 150g)', gPerUnit: 150 }, metrics: PaniertesSchnitzelMetrics },
  { info: { nicename: 'Pommes Frites', unit: 'Portion (ca. 120g)', gPerUnit: 120 }, metrics: PommesFritesMetrics },

  // Gemüse & Obst
  { info: { nicename: 'Apfel', unit: 'Stück (ca. 150g)', gPerUnit: 150 }, metrics: ApfelMetrics },
  { info: { nicename: 'Banane', unit: 'Stück (ca. 130g)', gPerUnit: 130 }, metrics: BananeMetrics },

  // Getränke
  { info: { nicename: 'Wasser (still)', unit: 'Glas (250 ml)', gPerUnit: 250 }, metrics: MineralwasserMetrics },
  { info: { nicename: 'Sprudel', unit: 'Glas (250 ml)', gPerUnit: 250 }, metrics: SprudelMetrics },
  { info: { nicename: 'Kaffee', unit: 'Tasse (150 ml)', gPerUnit: 150 }, metrics: KaffeeMetrics },
  { info: { nicename: 'Kaffee mit Milch', unit: 'Tasse (150 ml)', gPerUnit: 150 }, metrics: KaffeeMilchMetrics },
  { info: { nicename: 'Apfelsaft', unit: 'Glas (250 ml)', gPerUnit: 250 }, metrics: ApfelsaftMetrics },
  { info: { nicename: 'Cola', unit: 'Glas (250 ml)', gPerUnit: 250 }, metrics: ColaMetrics }
];
