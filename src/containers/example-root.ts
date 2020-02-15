export function exampleRoot() {
    return {
        restrict: "E",
        scope: {},
        bindToController: {},
        controller: function () {
            this.countries = {
                name: "Table1",
                europa: [
                    {title: "Finland", src: "src/img/finland.svg"},
                    {title: "Estonia", src: "src/img/estonia.svg"},
                    {title: "Russia", src: "src/img/russia.svg"}],
                asia: [
                    {title: "China", src: "src/img/china.svg"},
                    {title: "Japan", src: "src/img/japan.svg"},
                    {title: "Thailand", src: "src/img/thailand.svg"}]
            };
            this.searchBy = "europa";
            this.activeState = false;
            this.clickItem = function (val) {
                this.yourChoice = val;
                this.activeState = !this.activeState;
            };
        },
        controllerAs: "exampleRoot",
        template: `
    <div>
    <div>
        <input ng-checked="true" checked ng-model="exampleRoot.searchBy" value="europa" type="radio" id="europa" name="chose">
        <label
                for="europa">Europa</label>
        <input ng-model="exampleRoot.searchBy" value="asia" type="radio" id="asia" name="chose"> <label for="asia">Asia</label>
    </div>
    <div>
        this answer: {{exampleRoot.searchBy}} <br>
    </div>
    <br/>
    <div class="block">
        <div class="block__heading">Chose your country:</div>
        <div class="block-input" ng-click="exampleRoot.activeState = !exampleRoot.activeState">
            <input placeholder="Enter your country" ng-change="exampleRoot.activeState = true" class="form-control" type="text" ng-model="exampleRoot.yourChoice" ng-value="exampleRoot.yourChoice">
        </div>
       <div ng-show="exampleRoot.activeState" class="block__list">
    <ul class="list-group">
        <li class="list-group-item list-group-item-action"
            ng-repeat="el in exampleRoot.countries[exampleRoot.searchBy] | filter:exampleRoot.yourChoice" ng-click="exampleRoot.clickItem(el.title)">
            <span ng-show="el.src"><img src="{{el.src}}" alt=""></span>
            {{el.title}}</li>
    </ul>
</div>
    </div>
</div>
    `
    };
}

