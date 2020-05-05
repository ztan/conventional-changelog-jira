'use strict'

module.exports = {
  headerPattern: /^(?:\[{0,1}[A-Z]+-[0-9A-Z]+\]{0,1}:? ){0,1}(\w*)(?:\((.*)\))?: (.*)$/,
  headerCorrespondence: [
    'type',
    'scope',
    'subject'
  ],
  noteKeywords: ['BREAKING CHANGE'],
  revertPattern: /^(?:\[{0,1}[A-Z]+-[0-9A-Z]+\]{0,1}:? ){0,1}(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
  revertCorrespondence: ['header', 'hash']
}
