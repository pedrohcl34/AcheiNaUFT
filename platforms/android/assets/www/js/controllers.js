angular.module('app.controllers', [])

.controller('meuPerfilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('objetoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('listaDeObjetosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('buscarObjetosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('cadastrarObjetoCtrl', function ($scope, $state, $http) {
  $scope.selectedCategory = null;
      $scope.categories = [];

      $http.get('http://192.168.158.3:8080/MobileDevices/MyServer?category=all').success(function(data) {
          $scope.categories = data;
      });


      var data = {name: 'pedro',
            id:  89,
            description: 'nice'};
        $scope.addObject= function(){
          $http({
            url: 'http://192.168.158.3:8080/MobileDevices/MyServer',
            method: 'POST',
              params: data,
            crossDomain: true,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }

      });
        }

  })


.controller('menuCtrl',function ($scope, $state,LoggedUser) {
    $scope.LoggedUser = LoggedUser;

    if(LoggedUser.profilePicture.indexOf("nothingHere")>-1){
        $scope.LoggedUser.profilePicture = "img/person-button.png"
    }else{
        $scope.LoggedUser.profilePicture = "data:image/jpeg;base64,"+LoggedUser.profilePicture;
    }
    //console.log("Imagem quantidade: "+$scope.LoggedUser.profilePicture);
})
.controller('loginCtrl', function ($scope, $http, $state, LoggedUser ,$log) {
  $scope.result = "json";
  console.log("User: "+ $scope.user);
  $scope.doLogin = function() {
    $http.get('http://192.168.158.3:8080/MobileDevices/MyServer?username='+$scope.user+'&password='+$scope.pass).success(function(data){
        $scope.$log = $log;
        if (data !=null){
          $state.go("menu.meuPerfil");
          console.log(data.foundObjects);
          LoggedUser.username = data.username;
          LoggedUser.name = data.name;
          LoggedUser.contactNumber = data.contactNumber;
          //console.log(data.profilePicture);
          if(data.profilePicture==null){
              console.log("Sem imagem");
              LoggedUser.profilePicture = "nothingHere";
          }else{
              console.log("Com imagem");
              LoggedUser.profilePicture = data.profilePicture;
          }


        }

    })
    .error(function(data) {
        console.log($scope.$log);
    });
    //console.log($scope.result);
    console.log($scope.user);
    console.log($scope.pass);
    console.log(LoggedUser.profilePicture);


  }

})


.controller('novaContaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
