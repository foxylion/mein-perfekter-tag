export interface FoodMetrics {
  kilokalorien: number; // kcal
  wasser: number; // g
  eiweiss_proteine: number; // g
  fett: number; // g
  kohlenhydrate: number; // g
  ballaststoffe: number; // g
  broteinheiten_de: number; // BE
  broteinheiten_ch: number; // BE
  carbohydrate_units_en: number; // CU
  mineralstoffe_rohasche: number; // g
  organische_saeuren: number; // g
  alkohol_ethanol: number; // g
  fett_gesamt: number; // g
  gesaettigte_fettsaeuren: number; // g
  zucker: number; // g
  salz: number; // g
  vitamin_a_retinolaequivalent: number; // µg
  vitamin_a_retinol: number; // µg
  vitamin_a_betacarotin: number; // µg
  vitamin_b1_thiamin: number; // µg
  vitamin_b2_riboflavin: number; // µg
  vitamin_b3_niacin_nicotinsaeure: number; // µg
  vitamin_b3_niacinaequivalent: number; // µg
  vitamin_b5_pantothensaeure: number; // µg
  vitamin_b6_pyridoxin: number; // µg
  vitamin_b7_biotin_vitamin_h: number; // µg
  vitamin_b9_gesamte_folsaeure: number; // µg
  vitamin_b12_cobalamin: number; // µg
  vitamin_c_ascorbinsaeure: number; // µg
  vitamin_d_calciferole: number; // µg
  vitamin_e_tocopherol: number; // µg
  vitamin_k_phyllochinon: number; // µg
  natrium: number; // mg
  kalium: number; // mg
  calcium: number; // mg
  magnesium: number; // mg
  phosphor: number; // mg
  schwefel: number; // mg
  chlorid: number; // mg
  eisen: number; // µg
  zink: number; // µg
  kupfer: number; // µg
  mangan: number; // µg
  fluorid: number; // µg
  iodid: number; // µg
}

export const getNiceName = (field: keyof FoodMetrics): string => {
  switch (field) {
    case 'kilokalorien':
      return 'Kalorien';
    case 'salz':
      return 'Salz';
    case 'zucker':
      return 'Zucker';
    case 'wasser':
      return 'Wasser';
    default:
      return '<< not-translated >>';
  }
};

export const formatValue = (value: number, field: keyof FoodMetrics): string => {
  switch (field) {
    case 'kilokalorien':
      return `${value.toFixed(0)} kcal`;
    case 'salz':
      return `${value.toFixed(1)} g`;
    case 'zucker':
      return `${value.toFixed(1)} g`;
    case 'wasser':
      return `${value.toFixed(0)} ml`;
    default:
      return `${value.toFixed(0)} ??`;
  }
};

export const getRecommendedDailyAmount = (field: keyof FoodMetrics): number => {
  switch (field) {
    case 'kilokalorien':
      return 2000;
    case 'salz':
      return 6;
    case 'zucker':
      return 50;
    case 'wasser':
      return 2650;
    default:
      return NaN;
  }
};
