/**
 *  Markdownlint → Headers
 *  @see Documentation URL
 */

module.exports = {
	"first-line-h1": false,
	"header-increment": true,
	"header-start-left": true,
	"header-style": { style: "atx" },
	"no-duplicate-header": { siblings_only: true },
	"no-missing-space-atx": true,
	"no-missing-space-closed-atx": true,
	"no-multiple-space-atx": true,
	"no-multiple-space-closed-atx": true,
	"no-trailing-punctuation ": { punctuation: ".,;:!。，；：！" },
	"required-headers": { headers: [] },
	"single-title": {
		level: 1,
		front_matter_title: "^\\s*title\\s*[:=]"
	}
};
