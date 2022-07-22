<?php

namespace Deployer;

require 'recipe/symfony.php';

// Config

set('repository', 'git@github.com:re-connect/mpp.git');
set('symfony_env', 'prod');
set('env', [
    'SYMFONY_ENV' => get('symfony_env'),
]);
add('shared_files', [
    '.env',
    '.env.local',
    '.env.local.php',
]);
add('shared_dirs', [
    'var/oauth',
    'var/log',
    'client/public',
]);
add('writable_dirs', []);

// Hosts

host('155.133.130.39')
    ->set('remote_user', 'www-data')
    ->set('deploy_path', '~/mpp');

// Tasks

task('deploy:build_frontend', function () {
    run('cd {{release_path}} && cd client && npm install && npm run build');
});

before('deploy:cache:clear', 'deploy:build_frontend');
before('deploy:symlink', 'database:migrate');

after('deploy:failed', 'deploy:unlock');
