angular.module('app.services',[])

.factory("LoggedUser", function($rootScope){
  var User = {
     name: {},
     username: {},
     contactNumber: {},
     profilePicture:{}
  }
  return User;
})
