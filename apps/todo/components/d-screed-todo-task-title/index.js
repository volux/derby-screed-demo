/**
 *
 * @type {ScreedInline}
 */
var ScreedInline = require('derby-screed/d-screed/inline');

/**
 *
 * @type {ScreedTodoTaskTitle}
 */
module.exports = ScreedTodoTaskTitle;

/**
 * Must be empty - DerbyJS rule
 * @class ScreedTodoTaskTitle
 * @constructor
 */
function ScreedTodoTaskTitle() {
}

/**
 *
 * @type {ScreedInline.prototype}
 */
ScreedTodoTaskTitle.prototype = Object.create(ScreedInline.prototype);

ScreedTodoTaskTitle.prototype.name = 'd-screed-todo-task-title';

ScreedTodoTaskTitle.prototype.getNextEditable = function () {

  var nextEditable = this.getNextBlockEditable();

  if (!nextEditable || !nextEditable.isEditable) {

    return null;
  }
  return nextEditable;
};

ScreedTodoTaskTitle.prototype.glueWithNext = function () {

  var nextTask = this.parent.getNextComponent();

  if (!nextTask) {

    return false;
  }

  var nextLine = nextTask.getChild(0);

  if (nextLine) {

    var self = this;
    var nextText = nextLine.getDataText();
    var elText = this.getDataText();

    this.setDataText((elText + nextText) || this.getPlaceholder(), false, function () {

      nextTask.remove();
      self.moveCursorTo(elText.length); // not exactly to end
    });

    return true;
  }
  return false;
};

ScreedTodoTaskTitle.prototype.newLineAfterCaret = function (caret, cbFn) {

  var nextText = this.cropText(caret, true);
  var nextIndex = this.parent.getIndex() + 1;

  this.parent.parent.insertBlankChild(nextIndex);
  var nextTask = this.parent.getNextComponent();
  var nextTaskTitle = nextTask.getChild(0);

  nextTaskTitle.setDataText(nextText);

  if (!cbFn) {

    return nextTaskTitle;
  }
  cbFn();
  return this;
};
