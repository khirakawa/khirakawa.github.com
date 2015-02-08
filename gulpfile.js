var gulp    = require('gulp'),
    git     = require('gulp-git'),
    rimraf  = require('rimraf');

gulp.task('clean', function (done) {
    rimraf('./_site/.git', done);
});

gulp.task('init-git', ['clean'], function (done) {
    process.chdir('./_site');
    git.init(done);
});

gulp.task('add-remote', ['init-git'], function (done) {
    git.addRemote('origin', 'https://github.com/khirakawa/khirakawa.github.com.git', done);
});

gulp.task('commit-site', ['init-git'], function () {
    return gulp.src('./*')
        .pipe(git.add())
        .pipe(git.commit('init'));
});

gulp.task('deploy', ['clean', 'init-git', 'add-remote', 'commit-site'], function (done) {
    git.push('origin', 'master:master', {args: " -f"}, done);
});
