/**
 *  Stylelint → Rules → Avoid errors → Duplicate
 *  @see https://stylelint.io/user-guide/rules/#duplicate
 */
module.exports = {
	rules: {
		'declaration-block-no-duplicate-custom-properties': true,
		'declaration-block-no-duplicate-properties': true,
		'font-family-no-duplicate-names': true,
		'keyframe-block-no-duplicate-selectors': true,
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true
	}
};
