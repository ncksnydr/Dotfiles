module.exports = {
	"align_multiline_comment": { "comment_type": "all_multiline" },
	"general_phpdoc_annotation_remove": {},
	"general_phpdoc_tag_rename": {
		"fix_annotation": true,
		"fix_inline": true,
		"case_sensitive": true
	},
	"no_blank_lines_after_phpdoc": true,
	"no_empty_phpdoc": true,
	"no_superfluous_phpdoc_tags": {
		"allow_mixed": true,
		"allow_unused_params": true
	},
	"phpdoc_add_missing_param_annotation": true,
	"phpdoc_align": {"align": "left"},
	"phpdoc_annotation_without_dot": true,
	"phpdoc_indent": true,
	"phpdoc_inline_tag_normalizer": true,
	"phpdoc_line_span": true,
	"phpdoc_no_access": true,
	"phpdoc_no_alias_tag": true,
	"phpdoc_no_empty_return": true,
	"phpdoc_no_package": true,
	"phpdoc_no_useless_inheritdoc": true,
	"phpdoc_order_by_value": true,
	"phpdoc_order": true,
	"phpdoc_return_self_reference": true,
	"phpdoc_scalar": true,
	"phpdoc_separation": true,
	"phpdoc_single_line_var_spacing": true,
	"phpdoc_summary": true,
	"phpdoc_tag_casing": true,
	"phpdoc_tag_type": true,
	"phpdoc_to_comment": {"ignored_tags": ["TODO"]},
	"phpdoc_trim_consecutive_blank_line_separation": true,
	"phpdoc_trim": true,
	"phpdoc_types": true,
	"phpdoc_types_order": {
		"null_adjustment": "always_last",
		"sort_algorithm": "alpha"
	},
	"phpdoc_var_annotation_correct_order": true,
	"phpdoc_var_without_name": true
};