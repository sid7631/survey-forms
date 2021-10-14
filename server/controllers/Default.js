'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.formAnswerGET = function formAnswerGET (req, res, next, formId) {
  Default.formAnswerGET(formId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.formAnswerPOST = function formAnswerPOST (req, res, next, body) {
  Default.formAnswerPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.formPOST = function formPOST (req, res, next, body) {
  Default.formPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
