/**
 *
 * @type {Control}
 */
var Control = require('derby-screed/lib/prototype/control');

/**
 *
 * @type {ScreedCheck|Control}
 */
module.exports = ScreedCheck;

/**
 * Must be empty - DerbyJS rule
 * @class ScreedCheck
 * @constructor
 */
function ScreedCheck() {
}

/**
 *
 * @type {Control.prototype}
 */
ScreedCheck.prototype = Object.create(Control.prototype);

ScreedCheck.prototype.view = __dirname;
ScreedCheck.prototype.name = 'd-screed-check';

/**
 *
 * @returns {string}
 */
ScreedCheck.prototype.getDataText = function () {

  if (!this.getData()) {

    return '☐';
  }
  return '☑';
};
