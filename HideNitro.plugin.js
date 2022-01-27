/**
 * @name HideNitro
 * @author malaow3
 * @description Hides the Gift Nitro button
 * @version 0.0.1
 * @source https://github.com/malaow3/HideNitro
 */

module.exports = class ExamplePlugin {
    load() { } // Optional function. Called when the plugin is loaded in to memory

    start() {
        let buttons = document.getElementsByTagName("button")
        // iterate over every button
        for (let i = 0; i < buttons.length; i++) {
            // if the button is a gift nitro button
            if (buttons[i].ariaLabel === "Send a gift") {
                buttons[i].style.display = "none"
                return
            }

        }
    } // Required function. Called when the plugin is activated (including after reloads)
    stop() {
        let buttons = document.getElementsByTagName("button")
        // iterate over every button
        for (let i = 0; i < buttons.length; i++) {
            // if the button is a gift nitro button
            if (buttons[i].ariaLabel === "Send a gift") {
                buttons[i].style = ""
                return
            }
        }
    } // Required function. Called when the plugin is deactivated

    observer(changes) { } // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}