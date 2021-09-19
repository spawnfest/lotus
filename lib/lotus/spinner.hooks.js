import UIkit from "uikit"

const Spinner = {
    mounted() {
        this.spinner = UIkit.spinner(this.el);
    },
    updated() {
        let ratio = this.el.dataset.ratio;
        this.spinner.$emit("update", {ratio: ratio});
    }
}

export { Spinner }