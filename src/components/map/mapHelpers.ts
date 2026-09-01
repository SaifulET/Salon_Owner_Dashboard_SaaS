export const nameMapping: Record<string, string> = {
  "Piemonte": "Piedmont",
  "Lombardia": "Lombardy",
  "Toscana": "Tuscany",
  "Sicilia": "Sicily",
  "Sardegna": "Sardinia",
  "Liguria": "Liguria",
  "Campania": "Campania",
  "Lazio": "Lazio",
  "Veneto": "Veneto",
  "Puglia": "Puglia",
  "Basilicata": "Basilicata",
  "Molise": "Molise",
  "Abruzzo": "Abruzzo",
  "Umbria": "Umbria",
  "Marche": "Marche",
  "Emilia-Romagna": "Emilia-Romagna",
  "Friuli-Venezia Giulia": "Friuli-Venezia Giulia",
  "Trentino-Alto Adige/Südtirol": "Trentino-Alto Adige",
  "Valle d'Aosta/Vallée d'Aoste": "Valle d'Aosta",
  "Calabria": "Calabria"
};

export const getRegionColor = (italianName: string, activeMetric: string): string => {
  const englishName = nameMapping[italianName] || italianName;
  const grey = "#B2B2B2", green = "#36C76C", red = "#FF3B30", yellow = "#FFCC00", teal = "#30B0C7";

  if (activeMetric === "MRR") {
    return ["Lombardy", "Tuscany", "Sicily", "Sardinia", "Campania", "Veneto", "Puglia"].includes(englishName) ? green : grey;
  }
  if (activeMetric === "Subscribers" || activeMetric === "ARPA") {
    return ["Lombardy", "Tuscany", "Sicily", "Sardinia", "Campania", "Veneto", "Lazio", "Piemonte", "Piedmont"].includes(englishName) ? green : grey;
  }
  if (activeMetric === "Customer Churn") {
    if (["Lombardy", "Lazio", "Campania", "Sicily"].includes(englishName)) return red;
    if (["Tuscany", "Sardinia", "Piedmont", "Veneto"].includes(englishName)) return green;
    return grey;
  }
  if (activeMetric === "NET MRR Churn") {
    if (["Lombardy", "Piedmont", "Veneto", "Tuscany", "Emilia-Romagna", "Sardinia"].includes(englishName)) return green;
    if (["Lazio", "Campania"].includes(englishName)) return red;
    if (["Sicily"].includes(englishName)) return yellow;
    if (["Puglia"].includes(englishName)) return teal;
    return grey;
  }
  if (activeMetric === "LTV") {
    if (["Lombardy", "Veneto", "Piedmont", "Tuscany", "Lazio", "Sardinia"].includes(englishName)) return green;
    if (["Campania"].includes(englishName)) return red;
    if (["Sicily"].includes(englishName)) return yellow;
    return grey;
  }
  return grey;
};
