<?php

$json = file_get_contents("./.php-cs-fixer-rules.json", FILE_USE_INCLUDE_PATH);
$phpCsFixerRules = json_decode($json, true);

return (new PhpCsFixer\Config())
	->setRules($phpCsFixerRules)
	->setIndent("\t")
	->setLineEnding("\n");
