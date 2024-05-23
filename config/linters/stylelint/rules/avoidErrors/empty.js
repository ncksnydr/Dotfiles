/**
 *  Stylelint → Rules → Avoid errors → Empty
 *  @see https://stylelint.io/user-guide/rules/#empty
 */

module.exports = {
	rules: {
		'block-no-empty': [true, {
			ignore: ['comments']
		}],
		'comment-no-empty': true,
		'no-empty-source': null
	}
};
