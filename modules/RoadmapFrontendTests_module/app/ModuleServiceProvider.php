<?php

namespace Modules\DevelopGames_module\App;

class ModuleServiceProvider extends \App\Providers\ModuleServiceProvider
{
    /**
     * TODO REFACTOR BOOT LOAD.
     *
     * @return void
     */
    public function boot(): void
    {
        $this->bootLoadRoutes();
    }

    protected function bootLoadRoutes(): void
    {
        if (file_exists(__DIR__ . '/../routes/web.php')) {
            $this->loadRoutesFrom(__DIR__ . '/../routes/web.php');
        }

        if (file_exists(__DIR__ . '/../routes/api.php')) {
            $this->loadRoutesFrom(__DIR__ . '/../routes/api.php');
        }
    }
}
