import DiscoverClass from "../samples/DiscoverClass.vue"
import DiscoverComponent from "../samples/DiscoverComponent.vue"
import DiscoverComputed from "../samples/DiscoverComputed.vue"
import DiscoverCondition from "../samples/DiscoverCondition.vue"
import DiscoverEvent from "../samples/DiscoverEvent.vue"
import DiscoverEventHandlerWithParameters from "../samples/DiscoverEventHandlerWithParameters.vue"
import DiscoverHelloWorld from "../samples/DiscoverHelloWorld.vue"
import DiscoverListFiltering from "../samples/DiscoverListFiltering.vue"
import DiscoverListMutation from "../samples/DiscoverListMutation.vue"
import DiscoverLoop from "../samples/DiscoverLoop.vue"
import DiscoverProp from "../samples/DiscoverProp.vue"
import DiscoverPropLoop from "../samples/DiscoverPropLoop.vue"
import DiscoverReactivity from "../samples/DiscoverReactivity.vue"
import DiscoverStyle from "../samples/DiscoverStyle.vue"
import DiscoverTemplate from "../samples/DiscoverTemplate.vue"
import DiscoverVforIndexed from "../samples/DiscoverVforIndexed.vue"
import DiscoverVmodel from "../samples/DiscoverVmodel.vue"

export default [
    { path: "/DiscoverHelloWorld", component: DiscoverHelloWorld },
    { path: "/DiscoverReactivity", component: DiscoverReactivity },
    { path: "/DiscoverTemplate", component: DiscoverTemplate },
    { path: "/DiscoverCondition", component: DiscoverCondition },
    { path: "/DiscoverLoop", component: DiscoverLoop },
    { path: "/DiscoverVforIndexed", component: DiscoverVforIndexed },
    { path: "/DiscoverEvent", component: DiscoverEvent },
    { path: "/DiscoverEventHandlerWithParameters", component: DiscoverEventHandlerWithParameters },
    { path: "/DiscoverVmodel", component: DiscoverVmodel },
    { path: "/DiscoverStyle", component: DiscoverStyle },
    { path: "/DiscoverClass", component: DiscoverClass },
    { path: "/DiscoverComponent", component: DiscoverComponent },
    { path: "/DiscoverProp", component: DiscoverProp },
    { path: "/DiscoverPropLoop", component: DiscoverPropLoop },
    { path: "/DiscoverComputed", component: DiscoverComputed },
    { path: "/DiscoverListFiltering", component: DiscoverListFiltering },
    { path: "/DiscoverListMutation", component: DiscoverListMutation }
]