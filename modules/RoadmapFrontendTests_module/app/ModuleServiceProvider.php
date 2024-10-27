<?php

namespace Modules\RoadmapFrontendTests_module\App;

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
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'RoadmapFrontendTests_module');
    }

    protected function bootLoadRoutes(): void
    {
        if (file_exists(__DIR__ . '/../routes/web.php')) {
            $this->loadRoutesFrom(__DIR__ . '/../routes/web.php');
        }
    }
}
