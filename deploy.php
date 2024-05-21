<?php

namespace Deployer;

require 'recipe/symfony.php';

// Config

set('repository', 'git@github.com:re-connect/mpp.git');
set('branch', 'prod');
set('symfony_env', 'prod');
set('env', [
    'SYMFONY_ENV' => get('symfony_env'),
]);
add('shared_files', [
    '.env',
    '.env.local',
    '.env.local.php',
    'config/secrets/prod/prod.decrypt.private.php',
]);
add('shared_dirs', [
    'var/oauth',
    'var/log',
]);
add('writable_dirs', []);

// Hosts

host('155.133.130.39')
    ->set('remote_user', 'www-data')
    ->set('deploy_path', '~/mpp')
    ->set('flush_cache_file_name', 'flush-cache.php')
    ->set('flush_cache_file_path', '{{current_path}}/public/{{flush_cache_file_name}}')
    ->set('api_url', 'https://api.mpp.reconnect.fr');

// Tasks

task('deploy:install_frontend', function () {
    run('cd {{release_path}}/client && npm install');
});
task('deploy:build_frontend', function () {
    run('cd {{release_path}}/client && npm run build', ['timeout' => null]);
});
task('deploy:reset-opcache', function () {
    run('sleep 5');
    run('echo "<?php opcache_reset(); ?>" >> {{flush_cache_file_path}}');
    run('sleep 5');
    run('wget "{{api_url}}/{{flush_cache_file_name}}" --spider --retry-connrefused -t 5');
    run('rm {{flush_cache_file_path}}');
});

before('deploy:build_frontend', 'deploy:install_frontend');
before('deploy:cache:clear', 'deploy:build_frontend');
before('deploy:symlink', 'deploy:reset-opcache');
after('deploy:reset-opcache', 'database:migrate');

after('deploy:failed', 'deploy:unlock');
