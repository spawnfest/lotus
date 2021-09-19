import UIkit from "uikit"

const Tab = {
    mounted() {
        this.tab = UIkit.tab(this.el);
    },
    updated() {
        this.tab.$emit("update", {});
    }
}

export { Tab }