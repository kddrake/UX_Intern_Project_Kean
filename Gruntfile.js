module.exports = function(grunt) {
	var paths = {
		public: 'dist/',
		private: 'src/assets/',
		modules: 'node_modules/',
		temp: 'temp/'
	};
	var files = {
		js: [
			'<%= paths.private %>scripts/**/*.js',
		],
		css: [
			'<%= paths.private %>css/**/*.css',
		],
		fonts: [
			'<%= paths.private %>fonts/**/*'
		],
		img: [
			'<%= paths.private %>img/**/*'
		],
		dependencies : {
			js: [
				'<%= paths.modules %>angular/angular.min.js',
				'<%= paths.modules %>angular-bootstrap/dist/ui-bootstrap-tpls.min.js',
				'<%= paths.modules %>angular-messages/angular-messages.min.js',
				'<%= paths.modules %>angular-resource/angular-resource.min.js',
				'<%= paths.modules %>angular-ui-router/release/angular-ui-router.min.js',
			],
			css: [
				'<%= paths.modules %>dist/css/bootstrap.min.css'
			]
		}
	};
	grunt.initConfig({
		paths: paths,
		pkg: grunt.file.readJSON('package.json'),
		clean: ['<%= paths.public %>', '<%= paths.temp %>'],
		copy: {
			main: {
				files: [
					{
						expand: true,
						flatten: true,
						src: files.js,
						dest: '<%= paths.public %>js',
					}, {
						expand: true,
						flatten: true,
						src: files.css,
						dest: '<%= paths.public %>css',
					}, {
						expand: true,
						flatten: true,
						src: files.dependencies.css,
						dest: '<% paths.public %>css'

					},{
						expand: true,
						flatten: true,
						src: files.fonts,
						dest: '<%= paths.public %>fonts',
					}, {
						expand: true,
						flatten: true,
						src: files.img,
						dest: '<%= paths.public %>img',
					}, {
						expand: true,
						flatten: true,
						src: 'src/index.html',
						dest: '<%= paths.public %>'
					}
				]
			}
		},
		concat: {
			main: {
				files: [
					src: files.dependencies.js.concat(files.js),
					dest: '<%= paths.public %>js/app.js'
				]
			}
		},
		connect : {
			server: {
				options: {
					
				}
			}
		}


	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', []);
};