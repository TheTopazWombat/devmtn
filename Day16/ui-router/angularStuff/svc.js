angular.module('routerApp').service('mainService',function(){
this.getRecentProject = function(id) {
    console.log('service');
    console.log(id)
}
});
