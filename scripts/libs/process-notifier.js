(function ($window) {
    var $pn = function () {
        this.displayText = null;
        this.processNotificationArea = angular.element(document.querySelector('.process-notifier'));
        this.processInfo = angular.element(this.processNotificationArea.find('span')[0]);
    }
    $pn.prototype.hide = function () {
        this.processNotificationArea.css('left', '-100%');
    }  
    $pn.prototype.notify = function (displayText) {
        this.processInfo.html(displayText);
        this.processNotificationArea.css('left', '0%');
    }

    $window.$$pn = new $pn();
})(window);