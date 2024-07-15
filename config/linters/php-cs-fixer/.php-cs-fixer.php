<?php

/**
 * --------------------------------------------------------------------------
 *   Linters → PHP CS Fixer
 *   Configuration file for PHP CS Fixer
 * --------------------------------------------------------------------------
*/

$finder = (new PhpCsFixer\Finder())
    ->in(__DIR__)
    ->exclude([
        '*test*',
        'build',
        'dist',
        'node_modules',
        'vendor'
    ]);

return (new PhpCsFixer\Config())
    ->setRules([
        '@PSR2' => true,
        '@PHP82Migration' => true
    ])
    ->setFinder($finder)
    ->setIndent("\t")
    ->setLineEnding("\n");
