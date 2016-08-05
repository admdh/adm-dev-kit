var stylelint		 = require('stylelint');
var reporter		 = require('postcss-reporter');

module.exports = function (gulp, plugins, src) {
	return function () {
		return gulp.src([src + '/**/*.css',
		'!' + src + '/__jspm_packages/**/*.js'])
		.pipe(plugins.changed(src + '/**/*.css'))
		.pipe(plugins.postcss([
			stylelint({
				configFile: './.stylelintrc'
			}),
			reporter({
				clearMessages: true,
				throwError: true
			})
		]));
	};
};
