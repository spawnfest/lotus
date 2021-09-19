import UIkit from "uikit"

const Accordion = {
    mounted() {
        this.accordion = UIkit.accordion(this.el);
    },
    updated() {
        let collapsible = this.el.dataset.collapsible;
        let multiple = this.el.dataset.multiple;
        this.accordion.$emit("update", {collapsible, multiple});
    }
}

export { Accordion }