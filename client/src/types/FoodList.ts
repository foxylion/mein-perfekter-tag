import { FoodMetrics } from './FoodMetrics';
import { ApfelMetrics } from './foodMetrics/ApfelMetrics';
import { ApfelsaftMetrics } from './foodMetrics/ApfelsaftMetrics';
import { BananeMetrics } from './foodMetrics/BananeMetrics';
import { ButterMetrics } from './foodMetrics/ButterMetrics';
import { ColaMetrics } from './foodMetrics/ColaMetrics';
import { GoudaMetrics } from './foodMetrics/GoudaMetrics';
import { MuesliMetrics } from './foodMetrics/MuesliMetrics';
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
  { info: { nicename: 'Apfel', unit: 'Stück (ca. 150g)', gPerUnit: 150 }, metrics: ApfelMetrics },
  { info: { nicename: 'Apfelsaft', unit: 'Glas', gPerUnit: 250 }, metrics: ApfelsaftMetrics },
  { info: { nicename: 'Banane', unit: 'Stück (ca. 130g)', gPerUnit: 130 }, metrics: BananeMetrics },
  { info: { nicename: 'Butter', unit: 'Stückchen (ca. 10g)', gPerUnit: 10 }, metrics: ButterMetrics },
  { info: { nicename: 'Cola', unit: 'Glas', gPerUnit: 250 }, metrics: ColaMetrics },
  { info: { nicename: 'Käse (Gouda)', unit: 'Scheibe (ca. 40g)', gPerUnit: 40 }, metrics: GoudaMetrics },
  { info: { nicename: 'Müsli, Milch & Obst', unit: 'Schüssel (ca. 300g)', gPerUnit: 300 }, metrics: MuesliMetrics },
  { info: { nicename: 'Vollkornbrot', unit: 'Scheibe (ca. 50g)', gPerUnit: 50 }, metrics: VollkornbrotMetrics },
  { info: { nicename: 'Brötchen (Weizen)', unit: 'Stück (ca. 50g)', gPerUnit: 50 }, metrics: WeizenbroetchenMetrics }
];
