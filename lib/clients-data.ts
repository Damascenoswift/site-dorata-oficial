// lib/clients-data.ts
export type ClientType = 'comercial' | 'industria' | 'saude' | 'alimentacao' | 'servicos'

export interface Client {
  name: string
  lat: number
  lng: number
  type: ClientType
}

export const clients: Client[] = [
  { name: "Ford Disbrava", lat: -11.8510, lng: -55.5295, type: "comercial" },
  { name: "Uniclínica", lat: -11.8680, lng: -55.5170, type: "saude" },
  { name: "Sinop Boulevard", lat: -11.8555, lng: -55.5080, type: "comercial" },
  { name: "Tratormax", lat: -11.8820, lng: -55.5010, type: "comercial" },
  { name: "Mineração Campagnolo", lat: -11.8900, lng: -55.4850, type: "industria" },
  { name: "Velog Caminhões", lat: -11.8490, lng: -55.5320, type: "comercial" },
  { name: "Nortão Parafusos", lat: -11.8600, lng: -55.4920, type: "comercial" },
  { name: "Grupo Gardim", lat: -11.8570, lng: -55.5010, type: "servicos" },
  { name: "Bussolaro Empreendimentos", lat: -11.8530, lng: -55.5050, type: "servicos" },
  { name: "Agropel Sementes", lat: -11.8840, lng: -55.4970, type: "comercial" },
  { name: "Arenop", lat: -11.8620, lng: -55.4760, type: "industria" },
  { name: "Rosul Auto Peças", lat: -11.8590, lng: -55.5130, type: "comercial" },
  { name: "Grafpel", lat: -11.8545, lng: -55.5065, type: "servicos" },
  { name: "Encore Empreendimentos", lat: -11.8515, lng: -55.5020, type: "servicos" },
  { name: "Bonfanti Telhas", lat: -11.8750, lng: -55.4890, type: "industria" },
  { name: "Pienezza", lat: -11.8560, lng: -55.5090, type: "alimentacao" },
  { name: "Fortepar", lat: -11.8650, lng: -55.5040, type: "comercial" },
  { name: "Serranas Churrascaria", lat: -11.8700, lng: -55.5155, type: "alimentacao" },
  { name: "Barbosa Ribs", lat: -11.8575, lng: -55.5100, type: "alimentacao" },
  { name: "AGN Empreendimentos", lat: -11.8540, lng: -55.5035, type: "servicos" },
  { name: "ASX", lat: -11.8610, lng: -55.5000, type: "servicos" },
  { name: "Transterra", lat: -11.8800, lng: -55.5020, type: "servicos" },
  { name: "MyBroker", lat: -11.8565, lng: -55.5075, type: "comercial" },
  { name: "Sinoblocos", lat: -11.8710, lng: -55.4830, type: "industria" },
  { name: "Frialto", lat: -11.8730, lng: -55.4950, type: "industria" },
]

export const logoClients: string[] = [
  "ASX", "Transterra", "Granja", "Arenop", "Zico", "Agropel Sementes",
  "Sinoblocos", "Flora Sinop", "Tratormax", "Brustolon Máquinas",
  "Encore", "Sementes Lara", "Rosul Auto Peças", "Pro-Med",
  "Catarinense", "Grafpel", "MT Painéis", "Bonfanti",
  "Nortão Parafusos", "Min. Campagnolo", "Pienezza", "Pré-Dileta",
  "Grupo Gardim", "Usinop", "Velog", "Uniclínica",
  "MyBroker", "Fortepar", "Sinop Boulevard", "Frialto",
  "Bussolaro", "Serranas", "Barbosa Ribs", "Frigobom",
  "AGN", "Ford Disbrava", "Urbano Norte",
]
