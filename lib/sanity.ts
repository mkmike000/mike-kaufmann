import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'gxcn7o30',  // aus deinem Sanity Dashboard
  dataset: 'production',  // oder der Name deines Datasets
  apiVersion: '2023-09-29',  // aktuelles API-Datum verwenden
  useCdn: false,  // true für schnellere Abrufe, false für stets aktuelle Inhalte
  token: 'skdlcvZq2CR6WsxR5zx32ebtcPkp0VD5oWMkbdVSdau2ndDZNSwNzoN1LuNFOmL4Lz0J924YYPscPGMYaEyecSpq569Qmb1ZmW7lTmVqQG0sckzWYtKPK8mKI1hrpRwaAgVRsqxY3PTY2eeM3Gn8qRxqz5i1pIJVi4QEJVZ6b30qZVt6PCAn',
});