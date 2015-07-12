/**
 * @link https://gist.github.com/taivo/fd08f6c960aacc11af6f
 */
app
.directive('tabsSwipable', ['$ionicGesture', function($ionicGesture){
	//
	// make ionTabs swipable. leftswipe -> nextTab, rightswipe -> prevTab
	// Usage: just add this as an attribute in the ionTabs tag
	// <ion-tabs tabs-swipable> ... </ion-tabs>
	//
	return {
		restrict: 'A',
		require: 'ionTabs',
		link: function(scope, elm, attrs, tabsCtrl){
			var onSwipeLeft = function(){
				var target = tabsCtrl.selectedIndex() + 1;
				if(target < tabsCtrl.tabs.length){
					scope.$apply(tabsCtrl.select(target));
				}
			};
			var onSwipeRight = function(){
				var target = tabsCtrl.selectedIndex() - 1;
				if(target >= 0){
					scope.$apply(tabsCtrl.select(target));
				}
			};
		    
		    var swipeGesture = $ionicGesture.on('swipeleft', onSwipeLeft, elm).on('swiperight', onSwipeRight);
		    scope.$on('$destroy', function() {
		        $ionicGesture.off(swipeGesture, 'swipeleft', onSwipeLeft);
		        $ionicGesture.off(swipeGesture, 'swiperight', onSwipeRight);
		    });
		}
	};
}]);