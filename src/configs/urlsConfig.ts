import { domainNameProd, domainNameDesv } from './sistemaConfig';
export const urlsServices = {
  SIGUWS: 'https://siguws.ssp.go.gov.br/',
  LEGADOWS: 'https://legadows.ssp.go.gov.br/',
  SSOWS: 'https://ssows.ssp.go.gov.br/',
  BACKENDWS: 'URLBACKENDPROD',
};
export let ambiente = '';

if (window.location.hostname.indexOf(domainNameProd) > -1) {
  urlsServices.SIGUWS = 'https://siguws.ssp.go.gov.br/';
  urlsServices.LEGADOWS = 'https://legadows.ssp.go.gov.br/';
  urlsServices.SSOWS = 'https://ssows.ssp.go.gov.br/';
  urlsServices.BACKENDWS = 'URLBACKENDPROD';
  ambiente = 'PROD';
} else {
  urlsServices.SIGUWS = 'https://siguws-h.ssp.go.gov.br/';
  urlsServices.LEGADOWS = 'https://legadows-h.ssp.go.gov.br/';
  urlsServices.SSOWS = 'https://ssows-h.ssp.go.gov.br/';
  urlsServices.BACKENDWS = 'URLBACKENDHOMO';
  ambiente = 'HOMO';
  if (window.location.hostname.indexOf(domainNameDesv) > -1) {
    //PARA DESENVOLVIMENTO
    urlsServices.BACKENDWS = 'http://localhost/';
    //urlsServices.BACKEND = 'URLBACKENDHOMO';
  }
}
