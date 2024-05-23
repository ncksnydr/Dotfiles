
/**
 *  Babel::Presets::Env
 * @see https://babeljs.io/docs/en/babel-preset-env
 */

// TODO: Dynamically import .browserslistrc and add to `targets`.
module.exports = {
	presets: [
		['@babel/preset-env', {
			debug: true,
			forceAllTransforms: true,
			modules: false,
			targets: 'last 3 versions and >0.72%',
			useBuiltIns: 'usage'
		}]
	]
};
