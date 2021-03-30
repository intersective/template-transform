/* tslint:disable no-var-requires */
const transformJson = require('qewd-transform-json');

export function transform(versionFrom: string, versionTo: string, data: {}) : {} {
  if (versionFrom === versionTo) {
    return data;
  }
  let templateObj;
  switch (versionFrom + versionTo) {
    case 'email':
      templateObj = {
        contentsHtml: '{{message.body.html}}',
        contentsText: '{{message.body.text}}',
      };
      break;
    case 'sms':
      templateObj = {
        title: '{{message.title}}',
        contents: '{{message.body}}',
      };
      break;
    default:
      templateObj = {};
  }
  return transformJson.transform(templateObj, data);
}
