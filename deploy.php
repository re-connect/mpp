<?php

namespace Deployer;

require 'recipe/symfony.php';

// Config

set('repository', 'git@github.com:re-connect/mpp.git');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts

host('155.133.130.39')
    ->set('remote_user', 'www-data')
    ->set('deploy_path', '~/mpp2');

// Tasks

task('build', function () {
    cd('{{release_path}}');
    cd('./client');
    run('npm run build');
});

after('deploy:failed', 'deploy:unlock');
