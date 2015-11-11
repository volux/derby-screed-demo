/**
 *
 * @type {Section}
 */
var Section = require('derby-screed/lib/prototype/section');

/**
 *
 * @type {ScreedTodoTask|Section}
 */
module.exports = ScreedTodoTask;

/**
 * Must be empty - DerbyJS rule
 * @class ScreedTodoTask
 * @constructor
 */
function ScreedTodoTask() {
}

/**
 *
 * @type {Section.prototype}
 */
ScreedTodoTask.prototype = Object.create(Section.prototype);

ScreedTodoTask.prototype.view = __dirname;
ScreedTodoTask.prototype.name = 'd-screed-todo-task';

