//Descrição
/*export const sistemaNameSSO = 'NOMESISTEMA';
export const domainNameProd = 'URLDOSISTEMAEMPROD';
export const domainNameHomo = 'URLDOSISTEMAEMHOMO';
export const domainNameDesv = 'localhost';
*/

export const sistemaNameSSO = 'GMOSPC';
export const sistemaDescricao = 'Plataforma para gerenciamento de materias.';
export const sistemaVersao = '1.0.0-00';
export const domainNameProd = 'gmospc.ssp.go.gov.br';
export const domainNameHomo = 'gmospc-homo.ssp.go.gov.br';

export const domainNameDesv = 'localhost';

export const perfisSistema = {
  ADM: 'ADM',
  ATENDENTE: 'ATENDENTE',
  SUPORTE: 'SUPORTE',
  BASICO: 'BASICO',
  ALL: 'QUALQUER_PERFIL',
};

export const getConfig = (type: string) => {
  const configPub = {
    headers: {
      'Access-Control-Allow-Origin': `${window.location.origin}`,
      'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTION',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };

  const configPriv = {
    headers: {
      'Access-Control-Allow-Origin': `${window.location.origin}`,
      'Access-Control-Allow-Headers': 'Authorization',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTION',
      'Content-Type': 'application/json;charset=UTF-8',
      Autorization: `Bearer ${localStorage.getItem('token_sso')}`,
    },
  };

  if (type === 'priv') {
    return configPriv;
  }

  return configPub;
};
