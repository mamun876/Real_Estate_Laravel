<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        {{-- css --}}
        <!-- Stylesheets -->
        <link href="assets/css/font-awesome-all.css" rel="stylesheet">
        <link href="assets/css/flaticon.css" rel="stylesheet">
        <link href="assets/css/owl.css" rel="stylesheet">
        <link href="assets/css/bootstrap.css" rel="stylesheet">
        <link href="assets/css/jquery.fancybox.min.css" rel="stylesheet">
        <link href="assets/css/animate.css" rel="stylesheet">
        <link href="assets/css/jquery-ui.css" rel="stylesheet">
        <link href="assets/css/nice-select.css" rel="stylesheet">
        <link href="assets/css/color/theme-color.css" id="jssDefault" rel="stylesheet">
        <link href="assets/css/switcher-style.css" rel="stylesheet">
        <link href="assets/css/style.css" rel="stylesheet">
        <link href="assets/css/responsive.css" rel="stylesheet">
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

        {{-- js --}}
        <!-- jequery plugins -->
        <script src="assets/js/jquery.js"></script>
        <script src="assets/js/popper.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/owl.js"></script>
        <script src="assets/js/wow.js"></script>
        <script src="assets/js/validation.js"></script>
        <script src="assets/js/jquery.fancybox.js"></script>
        <script src="assets/js/appear.js"></script>
        <script src="assets/js/scrollbar.js"></script>
        <script src="assets/js/isotope.js"></script>
        <script src="assets/js/jquery.nice-select.min.js"></script>
        <script src="assets/js/jQuery.style.switcher.min.js"></script>
        <script src="assets/js/jquery-ui.js"></script>
        <script src="assets/js/nav-tool.js"></script>

        <!-- main-js -->
        <script src="assets/js/script.js"></script>
    </body>
</html>
