import { FoodMetrics } from './FoodMetrics';
import { ApfelMetrics } from './foodMetrics/ApfelMetrics';
import { ApfelsaftMetrics } from './foodMetrics/ApfelsaftMetrics';
import { AvocadoMetrics } from './foodMetrics/AvocadoMetrics';
import { BakedBeansMetrics } from './foodMetrics/BakedBeansMetrics';
import { BananeMetrics } from './foodMetrics/BananeMetrics';
import { BierExportMetrics } from './foodMetrics/BierExportMetrics';
import { BierHefeweizenMetrics } from './foodMetrics/BierHefeweizenMetrics';
import { BierPilsMetrics } from './foodMetrics/BierPilsMetrics';
import { BratkartoffelnMetrics } from './foodMetrics/BratkartoffelnMetrics';
import { ButterMetrics } from './foodMetrics/ButterMetrics';
import { ColaMetrics } from './foodMetrics/ColaMetrics';
import { ErdnussbutterMetrics } from './foodMetrics/ErdnussbutterMetrics';
import { GekochtesEiMetrics } from './foodMetrics/GekochtesEiMetrics';
import { GemueseReisMetrics } from './foodMetrics/GemueseReisMetrics';
import { GoudaMetrics } from './foodMetrics/GoudaMetrics';
import { JoghurtMetrics } from './foodMetrics/JoghurtMetrics';
import { KaeseSpaetzleMetrics } from './foodMetrics/KaeseSpaetzleMetrics';
import { KaffeeMetrics } from './foodMetrics/KaffeeMetrics';
import { KaffeeMilchMetrics } from './foodMetrics/KaffeeMilchMetrics';
import { KarotteMetrics } from './foodMetrics/KarotteMetrics';
import { KetchupMetrics } from './foodMetrics/KetchupMetrics';
import { LyonerMetrics } from './foodMetrics/LyonerMetrics';
import { MarmeladeMetrics } from './foodMetrics/MarmeladeMetrics';
import { MayonaiseMetrics } from './foodMetrics/MayonaiseMetrics';
import { MineralwasserMetrics } from './foodMetrics/MineralwasserMetrics';
import { MuesliMetrics } from './foodMetrics/MuesliMetrics';
import { NutellaMetrics } from './foodMetrics/NutellaMetrics';
import { PaniertesSchnitzelMetrics } from './foodMetrics/PaniertesSchnitzelMetrics';
import { PommesFritesMetrics } from './foodMetrics/PommesFritesMetrics';
import { RuehreiMetrics } from './foodMetrics/RuehreiMetrics';
import { RumpsteakMetrics } from './foodMetrics/RumpsteakMetrics';
import { SalamiMetrics } from './foodMetrics/SalamiMetrics';
import { SalatgurkeMetrics } from './foodMetrics/SalatgurkeMetrics';
import { SchinkenwurstMetrics } from './foodMetrics/SchinkenwurstMetrics';
import { SpaghettiBologneseMetrics } from './foodMetrics/SpaghettiBologneseMetrics';
import { SpiegeleiMetrics } from './foodMetrics/SpiegeleiMetrics';
import { SprudelMetrics } from './foodMetrics/SprudelMetrics';
import { TomateMetrics } from './foodMetrics/TomateMetrics';
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
  // Frühstück/Vesper
  { info: { nicename: 'Vollkornbrot', unit: 'Scheibe (ca. 50g)', gPerUnit: 50 }, metrics: VollkornbrotMetrics },
  { info: { nicename: 'Brötchen (Weizen)', unit: 'Stück (ca. 50g)', gPerUnit: 50 }, metrics: WeizenbroetchenMetrics },
  { info: { nicename: 'Käse (Gouda)', unit: 'Scheibe (ca. 30g)', gPerUnit: 30 }, metrics: GoudaMetrics },
  { info: { nicename: 'Wurst (Lyoner)', unit: 'Stück (ca. 30g)', gPerUnit: 30 }, metrics: LyonerMetrics },
  { info: { nicename: 'Wurst (Salami)', unit: 'Stück (ca. 30g)', gPerUnit: 30 }, metrics: SalamiMetrics },
  { info: { nicename: 'Wurst (Schinken)', unit: 'Stück (ca. 30g)', gPerUnit: 30 }, metrics: SchinkenwurstMetrics },
  { info: { nicename: 'Butter', unit: 'Stückchen (ca. 10g)', gPerUnit: 10 }, metrics: ButterMetrics },
  { info: { nicename: 'Erdnussbutter', unit: 'Portion (ca. 20g)', gPerUnit: 20 }, metrics: ErdnussbutterMetrics },
  { info: { nicename: 'Marmelade', unit: 'Portion (ca. 20g)', gPerUnit: 20 }, metrics: MarmeladeMetrics },
  { info: { nicename: 'Nutella', unit: 'Portion (ca. 20g)', gPerUnit: 20 }, metrics: NutellaMetrics },
  { info: { nicename: 'Müsli mit Milch & Obst', unit: 'Schüssel (ca. 300g)', gPerUnit: 300 }, metrics: MuesliMetrics },
  { info: { nicename: 'Gekochtes Ei', unit: 'Stück (ca. 60g)', gPerUnit: 60 }, metrics: GekochtesEiMetrics },
  { info: { nicename: 'Spiegelei', unit: 'Stück (ca. 60g)', gPerUnit: 60 }, metrics: SpiegeleiMetrics },
  { info: { nicename: 'Rührei mit Speck', unit: 'Portion (ca. 100g)', gPerUnit: 100 }, metrics: RuehreiMetrics },
  { info: { nicename: 'Baked Beans', unit: 'Portion (ca. 100g)', gPerUnit: 100 }, metrics: BakedBeansMetrics },
  { info: { nicename: 'Naturjoghurt', unit: 'Schälchen (ca. 150g)', gPerUnit: 150 }, metrics: JoghurtMetrics },

  // Warme Mahlzeit
  { info: { nicename: 'Bratkartoffeln', unit: 'Teller (ca. 450g)', gPerUnit: 450 }, metrics: BratkartoffelnMetrics },
  { info: { nicename: 'Gemüsereis', unit: 'Teller (ca. 450g)', gPerUnit: 450 }, metrics: GemueseReisMetrics },
  { info: { nicename: 'Käsespätzle', unit: 'Teller (ca. 450g)', gPerUnit: 450 }, metrics: KaeseSpaetzleMetrics },
  { info: { nicename: 'Spaghetti Bolognese', unit: 'Teller (ca. 450g)', gPerUnit: 450 }, metrics: SpaghettiBologneseMetrics },
  { info: { nicename: 'Paniertes Scheineschnitzel', unit: 'Stück (ca. 150g)', gPerUnit: 150 }, metrics: PaniertesSchnitzelMetrics },
  { info: { nicename: 'Rumpsteak mit Zwiebeln', unit: 'Stück (ca. 200g)', gPerUnit: 200 }, metrics: RumpsteakMetrics },
  { info: { nicename: 'Pommes Frites', unit: 'Portion (ca. 200g)', gPerUnit: 200 }, metrics: PommesFritesMetrics },
  { info: { nicename: 'Ketchup', unit: 'Portion (ca. 20g)', gPerUnit: 20 }, metrics: KetchupMetrics },
  { info: { nicename: 'Mayonaise', unit: 'Portion (ca. 20g)', gPerUnit: 20 }, metrics: MayonaiseMetrics },

  // Gemüse & Obst
  { info: { nicename: 'Apfel', unit: 'Stück (ca. 150g)', gPerUnit: 150 }, metrics: ApfelMetrics },
  { info: { nicename: 'Banane', unit: 'Stück (ca. 130g)', gPerUnit: 130 }, metrics: BananeMetrics },
  { info: { nicename: 'Avocado', unit: 'Stück (ca. 160g)', gPerUnit: 160 }, metrics: AvocadoMetrics },
  { info: { nicename: 'Salatgurke', unit: 'Stück (ca. 100g)', gPerUnit: 100 }, metrics: SalatgurkeMetrics },
  { info: { nicename: 'Tomate', unit: 'Stück (ca. 110g)', gPerUnit: 110 }, metrics: TomateMetrics },
  { info: { nicename: 'Karotte', unit: 'Stück (ca. 60g)', gPerUnit: 60 }, metrics: KarotteMetrics },

  // Getränke
  { info: { nicename: 'Wasser (still)', unit: 'Glas (250 ml)', gPerUnit: 250 }, metrics: MineralwasserMetrics },
  { info: { nicename: 'Sprudel', unit: 'Glas (250 ml)', gPerUnit: 250 }, metrics: SprudelMetrics },
  { info: { nicename: 'Kaffee', unit: 'Tasse (150 ml)', gPerUnit: 150 }, metrics: KaffeeMetrics },
  { info: { nicename: 'Kaffee mit Milch', unit: 'Tasse (150 ml)', gPerUnit: 150 }, metrics: KaffeeMilchMetrics },
  { info: { nicename: 'Apfelsaft', unit: 'Glas (250 ml)', gPerUnit: 250 }, metrics: ApfelsaftMetrics },
  { info: { nicename: 'Cola', unit: 'Glas (250 ml)', gPerUnit: 250 }, metrics: ColaMetrics },
  { info: { nicename: 'Bier (Export)', unit: 'Glas (330 ml)', gPerUnit: 330 }, metrics: BierExportMetrics },
  { info: { nicename: 'Bier (Pils)', unit: 'Glas (330 ml)', gPerUnit: 330 }, metrics: BierPilsMetrics },
  { info: { nicename: 'Bier (Hefe)', unit: 'Glas (500 ml)', gPerUnit: 500 }, metrics: BierHefeweizenMetrics }
];
