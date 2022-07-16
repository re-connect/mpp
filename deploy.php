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
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts

host('155.133.130.39')
    ->set('remote_user', 'www-data')
    ->set('deploy_path', '~/mpp');

// Tasks

task('build', function () {
    cd('{{release_path}}');
    cd('./client');
    run('npm install');
    run('npm run build');
});

after('deploy:failed', 'deploy:unlock');
