/**
 *
 * @see https://github.com/larsenwork/postcss-easing-gradients
 *
 */

module.exports = {
	// A lower number creates a more "low poly" gradient with less code but a higher risk of banding.
	colorStops: 18,

	//A lower number can result in banding.
	alphaDecimals: 9,

	// Options are 'rgb', 'hsl', 'lab', 'lrgb', and 'lch'.
	colorMode: 'hsl'
};

