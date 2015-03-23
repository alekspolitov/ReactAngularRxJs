/// <reference path="scripts/_references.ts" />
var MyDirective = (function () {
    function MyDirective(myFactory) {
        this.myFactory = myFactory;
        this.restrict = "A";
        this.require = "ngModel";
        this.scope = {
            ngModel: '='
        };
        this.link = this.unboundLink.bind(this);
    }
    MyDirective.prototype.unboundLink = function (scope, elem, attributes, ngModel) {
        //Now you should be able to access myFactory
        this.myFactory.doSomething();
        elem.bind('blur', function (evt) {
            //keyword this is also window here, so yeah bummer indeed
            validate();
        });
        function validate() {
            //I need to use my factory here, but I can seem to get it.
            //this is always window and I'm kinda stuck here
        }
    };
    return MyDirective;
})();
exports.MyDirective = MyDirective;
