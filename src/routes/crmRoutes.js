const controller = require("../controllers/crmController")

const routes = (app) => {
    app.route("/contact")
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next()
        }, controller.getContacts)

        // Post endpoint
        .post(controller.addNewContact)

    app.route("/contact/:contactID")
        // Get specific contact
        .get(controller.getContactsWithId)
        // Updating specific contact
        .put(controller.updateContact)
        // Delete specific contact
        .delete(controller.deleteContact)
}

module.exports = routes