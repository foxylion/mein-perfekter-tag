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

export const relevantMetrics: Array<keyof FoodMetrics> = [
  'kilokalorien',
  'salz',
  'zucker',
  'wasser',
  'vitamin_c_ascorbinsaeure',
  'vitamin_d_calciferole',
  'vitamin_b1_thiamin',
  'vitamin_b2_riboflavin',
  'vitamin_b6_pyridoxin',
  'vitamin_b12_cobalamin',
  'vitamin_b9_gesamte_folsaeure'
];

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
    case 'vitamin_c_ascorbinsaeure':
      return 'Vitamin C';
    case 'vitamin_d_calciferole':
      return 'Vitamin D';
    case 'vitamin_b1_thiamin':
      return 'Vitamin B1';
    case 'vitamin_b2_riboflavin':
      return 'Vitamin B2';
    case 'vitamin_b6_pyridoxin':
      return 'Vitamin B6';
    case 'vitamin_b12_cobalamin':
      return 'Vitamin B12';
    case 'vitamin_b9_gesamte_folsaeure':
      return 'Folsäure';

    default:
      return '<< not-translated >>';
  }
};

export const getDescription = (field: keyof FoodMetrics): string => {
  switch (field) {
    case 'salz':
      return `Kochsalz und der größte Teil des verkauften Meersalzes bestehen aus den Bausteinen Natrium und Chlorid, woraus wiederum Natriumchlorid (NaCl) entsteht – ein
      unverzichtbares Lebenselement und essentiell für den Organismus. Natrium regelt den Wasserhaushalt, die Reizübertragung von Muskel- und Nervenzellen und aktiviert
      viele Stoffwechselvorgänge. Chlorid ist unter anderem ein wichtiger Bestandteil der Verdauungssäfte. Es bewirkt die Bildung von Salzsäure im Magen, die als eine
      Komponente des Magensafts Proteine aus der Nahrung aufspaltet und unerwünschte Mikroorganismen unschädlich macht.`;
    case 'zucker':
      return `Damit der Mensch Überleben kann, braucht er große Mengen an Energie. Als Treibstoff dafür dient in erste Linie Zucker – genauer gesagt, brauchen wir zum Atmen,
      Laufen und Denken den Einfachzucker Glucose. Glucose ist unser wichtigster Energie-Lieferant – allein unser Gehirn verbrennt etwa 130-140 Gramm Glucose pro Tag!
      ABER! Das bedeutet aber NICHT, dass wir unserem Körper raffinierten Haushaltszucker geben und Süßigkeiten essen und Softdrinks trinken müssen! Unser Körper kann den
      „Treibstoff“ Glucose auch selbst herstellen, indem er die Glucose aus Polysacchariden (Stärke) im Darm aufspaltet, die beispielsweise in Gemüse und (Pseudo-) Getreide enthalten ist.`;
    case 'wasser':
      return `Es ist die Grundlage allen Lebens und sogar unser Körper besteht zu mehr als der Hälfte daraus: Wasser ist das wichtigste Lebensmittel des Menschen.
      Nehmen wir zu wenig Flüssigkeit auf, ist der Stoffwechsel gestört und unsere körperliche wie geistige Leistungsfähigkeit lässt nach.
      Als Urin schwemmt Wasser Schadstoffe aus, als Schweiß kühlt es unseren Körper.`;
    case 'vitamin_c_ascorbinsaeure':
      return `Vitamin C (Ascorbinsäure) wird benötigt für Wachstum und Gesunderhaltung von Knochen, Zahnfleisch und Zähnen, Sehnen und Blutgefäßen.
      Sehr wichtig ist Vitamin C für die Abwehr von Infektionen, für die Aufnahme von Eisen und für die Wundheilung.`;
    case 'vitamin_d_calciferole':
      return `Die Stoffe der Vitamin D-Gruppe (Calciferole) sind notwendig für die Regelung des Kalzium- und Phosphatgleichgewichts im Körper.
      Vitamin D unterstützt die Aufnahme von Kalzium aus dem Darm und ist wichtig für die Stärkung von Knochen und Zähnen.`;
    case 'vitamin_b1_thiamin':
      return `Vitamin B1 (Thiamin) spielt eine wichtige Rolle bei der Verwertung von Kohlenhydraten und ist damit wichtig für alle Funktionen von Muskeln, Herz und Nerven.`;
    case 'vitamin_b2_riboflavin':
      return `Vitamin B2 (Riboflavin) ist wichtig für den Abbau und die Verwertung der Nährstoffe Kohlenhydrate, Eiweiß und Fett.
        Die Zellen benötigen es zur Energierzeugung sowie zur Verwertung anderer B-Vitamine und zur Hormonerzeugung durch die Nebennieren.`;
    case 'vitamin_b6_pyridoxin':
      return `Ein Vitamin, dass für den Abbau und die Verwertung von Kohlenhydraten, Eiweiß und Fetten benötigt wird.
      Wichtig auch für die Gesunderhaltung der Haut, die Bildung von roten Blutkörperchen und Antikörpern und die Funktion des Verdauungs- und Nervensystems.`;
    case 'vitamin_b12_cobalamin':
      return `Vitamin B12 (Cyanocobalamin) spielt eine wichtige Rolle bei der Produktion von roten Blutkörperchen im Knochenmark, bei der Verwertung von Folsäure und von Kohlenhydraten sowie für die Funktion des Nervensystems.`;
    case 'vitamin_b9_gesamte_folsaeure':
      return `Vitamin B9 (Folsäure) benötigen wir für das Wachstum und Reproduktion. Zudem ist Folsäure wichtig für die Erzeugung roter Blutkörperchen und trägt wesentlich bei zur Funktion des Nervensystems.`;
    default:
      return '';
  }
};

export const formatValue = (value: number, field: keyof FoodMetrics): string => {
  switch (field) {
    case 'kilokalorien':
      return `${value.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} kcal`;
    case 'salz':
      return `${value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} g`;
    case 'zucker':
      return `${value.toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} g`;
    case 'wasser':
      return `${value.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} ml`;
    case 'vitamin_b1_thiamin':
    case 'vitamin_b2_riboflavin':
    case 'vitamin_b6_pyridoxin':
    case 'vitamin_c_ascorbinsaeure':
    case 'vitamin_b9_gesamte_folsaeure':
      return `${value.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} µg`;
    case 'vitamin_d_calciferole':
      return `${value.toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} µg`;
    case 'vitamin_b12_cobalamin':
      return `${value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} µg`;
    default:
      return `${value.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} ??`;
  }
};

export const getRecommendedDailyAmount = (field: keyof FoodMetrics): number => {
  switch (field) {
    case 'salz':
      return 6;
    case 'zucker':
      return 65;
    case 'wasser':
      return 2650;
    case 'vitamin_c_ascorbinsaeure':
      return 100000;
    case 'vitamin_d_calciferole':
      return 20;
    case 'vitamin_e_tocopherol':
      return 12000;
    case 'vitamin_b1_thiamin':
      return 1100;
    case 'vitamin_b2_riboflavin':
      return 1200;
    case 'vitamin_b6_pyridoxin':
      return 1500;
    case 'vitamin_b12_cobalamin':
      return 3;
    case 'vitamin_b9_gesamte_folsaeure':
      return 400;
    default:
      return NaN;
  }
};
