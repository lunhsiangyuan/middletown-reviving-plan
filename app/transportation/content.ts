import type { Language } from "@/lib/i18n/language-context";

const en = {
  header: {
    badge: "Transportation",
    title: "Transportation & Connectivity",
    desc: "Strategically located at the crossroads of major highways and transit routes, Middletown offers convenient access to New York City and the broader Northeast region.",
  },
  air: {
    title: "Air Travel",
    airports: [
      {
        name: "Stewart International Airport",
        code: "SWF",
        desc: "Located in nearby Newburgh, Stewart International Airport provides commercial air service to destinations across the United States. Breeze Airways operates flights to multiple cities, offering affordable travel options.",
        location: "Newburgh, NY (~20 min from Middletown)",
      },
      {
        name: "Orange County Airport",
        code: "MGJ",
        desc: "A general aviation airport serving private and charter flights, providing additional air access for the Middletown area.",
        location: "Montgomery, NY (~10 min from Middletown)",
      },
    ],
  },
  highway: {
    title: "Highway Access",
    roads: [
      {
        name: "Interstate 84 (I-84)",
        desc: "Major east-west interstate highway passing directly through Middletown, connecting to I-87 (New York State Thruway) heading south to NYC and north to Albany. Also connects east to Hartford, CT and beyond to Boston.",
      },
      {
        name: "Route 17 / Future I-86",
        desc: "Route 17 provides a quick connection south toward the New York State Thruway and northwestward to the Southern Tier region. The route is being upgraded to Interstate 86 standards.",
      },
    ],
  },
  transit: {
    title: "Public Transit",
    services: [
      {
        name: "Shortline Bus to NYC",
        desc: "Coach USA / Shortline operates regular bus service between Middletown and New York City's Port Authority Bus Terminal. Travel time is approximately 2 hours, with multiple daily departures.",
        detail: "~2 hours to Manhattan",
      },
      {
        name: "Metro-North Railroad",
        desc: "The Metro-North Harriman station provides commuter rail access to New York City via the Port Jervis line. While not directly in Middletown, it offers an additional transit option for commuters.",
        detail: "Harriman station (~15 min drive)",
      },
    ],
  },
  distances: {
    title: "Distance to Major Cities",
    cities: [
      { city: "New York City", time: "~90 min", method: "Bus / Car via I-84" },
      { city: "Philadelphia", time: "~2.5 hr", method: "Car via I-84 / I-78" },
      { city: "Albany", time: "~2 hr", method: "Car via I-87" },
      { city: "Hartford, CT", time: "~2 hr", method: "Car via I-84 East" },
    ],
  },
};

export type TransportationContent = typeof en;

const zhTW: TransportationContent = {
  header: {
    badge: "交通運輸",
    title: "交通與連結性",
    desc: "Middletown 位於主要高速公路與交通路線的交匯處，可便捷抵達紐約市及更廣闊的東北部地區。",
  },
  air: {
    title: "航空交通",
    airports: [
      {
        name: "Stewart International Airport",
        code: "SWF",
        desc: "位於鄰近的 Newburgh，Stewart International Airport 提供飛往全美各地的商業航班服務。Breeze Airways 營運多條航線，提供實惠的旅行選擇。",
        location: "Newburgh, NY（距 Middletown 約 20 分鐘）",
      },
      {
        name: "Orange County Airport",
        code: "MGJ",
        desc: "通用航空機場，服務私人及包機航班，為 Middletown 地區提供額外的航空通道。",
        location: "Montgomery, NY（距 Middletown 約 10 分鐘）",
      },
    ],
  },
  highway: {
    title: "高速公路",
    roads: [
      {
        name: "Interstate 84 (I-84)",
        desc: "東西向主要州際公路，直接穿越 Middletown，連接 I-87（New York State Thruway）向南通往紐約市、向北通往 Albany，向東連接 Hartford, CT 並可延伸至 Boston。",
      },
      {
        name: "Route 17 / Future I-86",
        desc: "Route 17 提供向南連接 New York State Thruway 以及向西北通往 Southern Tier 地區的快速通道。該路線正在升級至 Interstate 86 標準。",
      },
    ],
  },
  transit: {
    title: "大眾運輸",
    services: [
      {
        name: "Shortline Bus 往紐約市",
        desc: "Coach USA / Shortline 營運 Middletown 至紐約市 Port Authority Bus Terminal 的定期巴士服務，車程約 2 小時，每日多班次發車。",
        detail: "至曼哈頓約 2 小時",
      },
      {
        name: "Metro-North Railroad",
        desc: "Metro-North Harriman 車站提供經 Port Jervis Line 通勤鐵路前往紐約市的服務。雖然不直接位於 Middletown，但為通勤者提供了額外的交通選擇。",
        detail: "Harriman 車站（車程約 15 分鐘）",
      },
    ],
  },
  distances: {
    title: "至主要城市距離",
    cities: [
      { city: "New York City", time: "約 90 分鐘", method: "巴士 / 經 I-84 開車" },
      { city: "Philadelphia", time: "約 2.5 小時", method: "經 I-84 / I-78 開車" },
      { city: "Albany", time: "約 2 小時", method: "經 I-87 開車" },
      { city: "Hartford, CT", time: "約 2 小時", method: "經 I-84 East 開車" },
    ],
  },
};

const es: TransportationContent = {
  header: {
    badge: "Transporte",
    title: "Transporte y Conectividad",
    desc: "Estrategicamente ubicada en el cruce de autopistas principales y rutas de transito, Middletown ofrece acceso conveniente a la ciudad de Nueva York y la region noreste en general.",
  },
  air: {
    title: "Transporte Aereo",
    airports: [
      {
        name: "Stewart International Airport",
        code: "SWF",
        desc: "Ubicado en la cercana Newburgh, Stewart International Airport ofrece servicio aereo comercial a destinos en todo Estados Unidos. Breeze Airways opera vuelos a multiples ciudades, ofreciendo opciones de viaje asequibles.",
        location: "Newburgh, NY (~20 min desde Middletown)",
      },
      {
        name: "Orange County Airport",
        code: "MGJ",
        desc: "Un aeropuerto de aviacion general que sirve vuelos privados y charter, proporcionando acceso aereo adicional para el area de Middletown.",
        location: "Montgomery, NY (~10 min desde Middletown)",
      },
    ],
  },
  highway: {
    title: "Acceso a Autopistas",
    roads: [
      {
        name: "Interstate 84 (I-84)",
        desc: "Autopista interestatal principal este-oeste que pasa directamente por Middletown, conectando con la I-87 (New York State Thruway) hacia el sur a NYC y al norte a Albany. Tambien conecta al este con Hartford, CT y mas alla hacia Boston.",
      },
      {
        name: "Route 17 / Future I-86",
        desc: "La Route 17 proporciona una conexion rapida hacia el sur hacia el New York State Thruway y hacia el noroeste hacia la region Southern Tier. La ruta esta siendo mejorada a estandares de Interstate 86.",
      },
    ],
  },
  transit: {
    title: "Transporte Publico",
    services: [
      {
        name: "Shortline Bus a NYC",
        desc: "Coach USA / Shortline opera servicio regular de autobus entre Middletown y la Port Authority Bus Terminal de la ciudad de Nueva York. El tiempo de viaje es de aproximadamente 2 horas, con multiples salidas diarias.",
        detail: "~2 horas a Manhattan",
      },
      {
        name: "Metro-North Railroad",
        desc: "La estacion Metro-North Harriman proporciona acceso ferroviario de cercanias a la ciudad de Nueva York via la linea Port Jervis. Aunque no esta directamente en Middletown, ofrece una opcion de transito adicional para los viajeros.",
        detail: "Estacion Harriman (~15 min en auto)",
      },
    ],
  },
  distances: {
    title: "Distancia a Ciudades Principales",
    cities: [
      { city: "New York City", time: "~90 min", method: "Autobus / Auto via I-84" },
      { city: "Philadelphia", time: "~2.5 hr", method: "Auto via I-84 / I-78" },
      { city: "Albany", time: "~2 hr", method: "Auto via I-87" },
      { city: "Hartford, CT", time: "~2 hr", method: "Auto via I-84 East" },
    ],
  },
};

export const content: Record<Language, TransportationContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
