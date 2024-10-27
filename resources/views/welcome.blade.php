<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>Welcome module</title>
    </head>
    @vite('resources/js/modules/base-platform/index.js')
    <body>
    <div id="app"></div>
    </body>
</html>
