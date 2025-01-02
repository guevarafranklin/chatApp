import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
      //this.element.textContent = "Hello World!"
      //console.log("Hello from form_controller.js")
    }
    resetComponent()
    {
      const form = this.element;
      const timer = setInterval(() => {
        form.reset();
      }, 100);
    }
}