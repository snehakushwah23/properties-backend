"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builderCreateController = builderCreateController;
const response_messages_1 = require("../../constants/response.messages");
const mongodb_1 = require("../../services/mongodb");
const generate_random_string_1 = require("../../helpers/generate.random.string");
async function builderCreateController(req, res) {
    try {
        const { name, website, officeAddress, officeContactNumber, managerContactNumber, salesManagerContactNumber, memberOfSRO = [], yearOfExperience, completedProject, activeProjects } = req.body;
        const builderShortID = (0, generate_random_string_1.generateRandomString)(4);
        const createdBuilder = await mongodb_1.BUILDER.create({
            name,
            website,
            officeAddress,
            officeContactNumber,
            managerContactNumber,
            salesManagerContactNumber,
            memberOfSRO,
            yearOfExperience,
            completedProject,
            activeProjects,
            builderShortID,
            status: true,
        });
        return res.status(200).json({ message: response_messages_1.responseMessages.BUILDER_CREATED, payload: createdBuilder });
    }
    catch (err) {
        console.log("ERROR: " + __filename);
        console.log(err);
        return res.status(500).json({ error: response_messages_1.responseMessages.EXECUTION_FAILED });
    }
}
//# sourceMappingURL=builder.create.controller.js.map