<?php
/*
 * This document has been generated with
 * https://mlocati.github.io/php-cs-fixer-configurator/#version:3.22.0|configurator
 * you can change this configuration by importing this file.
 */
$config = new PhpCsFixer\Config();
return $config
    ->setIndent("\t")
    ->setRules([
        'blank_line_after_namespace' => true,
        'class_definition' => true,
        'constant_case' => ['case'=>'upper'],
        'control_structure_braces' => true,
        'control_structure_continuation_position' => true,
        'curly_braces_position' => ['allow_single_line_anonymous_functions'=>true,'anonymous_classes_opening_brace'=>'same_line','classes_opening_brace'=>'same_line','functions_opening_brace'=>'same_line'],
        'elseif' => true,
        'encoding' => true,
        'full_opening_tag' => true,
        'function_declaration' => true,
        'indentation_type' => true,
        'line_ending' => true,
        'lowercase_keywords' => true,
        'method_argument_space' => ['on_multiline'=>'ensure_fully_multiline'],
        'no_break_comment' => true,
        'no_closing_tag' => true,
        'no_multiple_statements_per_line' => true,
        'no_space_around_double_colon' => true,
        'no_spaces_after_function_name' => true,
        'no_spaces_inside_parenthesis' => true,
        'no_trailing_whitespace' => true,
        'no_trailing_whitespace_in_comment' => true,
        'single_blank_line_at_eof' => true,
        'single_class_element_per_statement' => true,
        'single_import_per_statement' => true,
        'single_line_after_imports' => true,
        'statement_indentation' => true,
        'switch_case_semicolon_to_colon' => true,
        'switch_case_space' => true,
        'visibility_required' => true,
    ])
    ->setFinder(PhpCsFixer\Finder::create()
        ->exclude('node_modules')
				->exclude('vendor')
        ->in(__DIR__)
    )
;
