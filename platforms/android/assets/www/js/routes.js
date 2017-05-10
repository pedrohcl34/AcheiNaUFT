angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('menu.meuPerfil', {
    url: '/myprofile',
      views: {
      'side-menu21': {
        templateUrl: 'templates/meuPerfil.html',
        controller: 'meuPerfilCtrl'
      }
    }
  })

  .state('objeto', {
    url: '/objectshow',
    templateUrl: 'templates/objeto.html',
    controller: 'objetoCtrl'
  })

  .state('menu.listaDeObjetos', {
    url: '/list',
    views: {
      'side-menu21': {
        templateUrl: 'templates/listaDeObjetos.html',
        controller: 'listaDeObjetosCtrl'
      }
    }
  })

  .state('menu.buscarObjetos', {
    url: '/search',
    views: {
      'side-menu21': {
        templateUrl: 'templates/buscarObjetos.html',
        controller: 'buscarObjetosCtrl'
      }
    }
  })

  .state('menu.cadastrarObjeto', {
    url: '/newobject',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cadastrarObjeto.html',
        controller: 'cadastrarObjetoCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'


  })

  .state('novaConta', {
    url: '/signup',
    templateUrl: 'templates/novaConta.html',
    controller: 'novaContaCtrl'
  })

$urlRouterProvider.otherwise('/login')



});
