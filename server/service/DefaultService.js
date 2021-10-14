'use strict';


/**
 *
 * formId String form id to query
 * returns inline_response_200
 **/
exports.formAnswerGET = function(formId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "metaData" : {
    "name" : "Untitled Form",
    "responses" : 3
  },
  "data" : [ {
    "options" : [ {
      "text" : "option 1"
    }, {
      "text" : "option 1"
    } ],
    "answers" : [ "Option 1", "Option 2" ],
    "text" : "Enter your question",
    "type" : "checkbox"
  }, {
    "options" : [ {
      "text" : "option 1"
    }, {
      "text" : "option 1"
    } ],
    "answers" : [ "Option 1", "Option 2" ],
    "text" : "Enter your question",
    "type" : "checkbox"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Submit Form Answer
 *
 * body Form_answer_body  (optional)
 * no response value expected for this operation
 **/
exports.formAnswerPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add a new form
 *
 * body Form_body  (optional)
 * no response value expected for this operation
 **/
exports.formPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

