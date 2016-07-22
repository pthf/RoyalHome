angular.module('rhome.directives', [])

    .directive('menuheader', function(){
        return{
			restrict: 'E',
			templateUrl: './pages/header.html',
			controller: function($document){

			}
		}
    })
    .directive('quienesomos', function(){
        return{
			restrict: 'E',
			templateUrl: './pages/quinesomos.html',
			controller: function($document){

			}
		}
    })
    .directive('proyectos', function(){
        return{
			restrict: 'E',
			templateUrl: './pages/proyectos/grid.html',
			controller: function($document){

			}
		}
    })
    .directive('desarrollos', function(){
        return{
			restrict: 'E',
			templateUrl: './pages/desarrollos/grid.html',
			controller: function($document){

			}
		}
    })
    .directive('contacto', function(){
        return{
			restrict: 'E',
			templateUrl: './pages/contacto.html',
			controller: function($document){

			}
		}
    })

    .directive('footer', function(){
        return{
			restrict: 'E',
			templateUrl: './pages/footer.html',
			controller: function($document){

			}
		}
    })
