
var Yike = angular.module('Yike', ['ngRoute']);


//导航显示与隐藏
Yike.run(['$rootScope', function ($rootScope) {

    $rootScope.collapsed = false;

    $rootScope.toggle = function () {
        $rootScope.collapsed = !$rootScope.collapsed;


        var navs = document.querySelectorAll('.navs dd');
        //处理dd的速度,进来的速度
        if($rootScope.collapsed){
            for(var i = 0, l = navs.length; i < l; i++){
                navs[i].style.transform = 'translate(0)';
                navs[i].style.transitionDuration = 0.15*(i + 1) + 's';
                navs[i].style.transitionDelay = '0.3s';
            }
        }
        //处理出去的速度
        else{
            for(var j = navs.length - 1; j >= 0 ;j--){
                navs[j].style.transform = 'translate(-100%)';
                navs[j].style.transitionDuration = (navs.length - j) * 0.15 + 's';
                navs[j].style.transitionDelay = '';
            }
        }
    }
}]);


//配置路由
Yike.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/today', {
        templateUrl: './view/today.html',
        controller: ''
    });
}])


Yike.controller('NavsCtrl', ['$scope', function ($scope) {
	//模拟从后台数据库获取数据
	$scope.navs = [
		{text: '今日一刻', icon: 'icon-home', link: '#/today'},
		{text: '往期内容', icon: 'icon-file-empty', link: '#/older'},
		{text: '热门作者', icon: 'icon-pencil', link: '#/author'},
		{text: '栏目浏览', icon: 'icon-menu', link: '#/category'},
		{text: '我的喜欢', icon: 'icon-heart', link: '#/like'},
		{text: '设置', icon: 'icon-cog', link: '#/settings'}
	];
}]);