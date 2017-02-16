export default function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'indexCtrl',
                templateUrl: 'article/article.html'
            })
        .otherwise({ redirectTo: '/'});
};
