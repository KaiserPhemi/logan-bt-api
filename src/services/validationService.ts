import Joi from "joi";

// validates input
const validationService = {
  // validates data for adding a new user
  addUser: Joi.object({
    name: Joi.string().max(100).required(),
    email: Joi.string().email({ minDomainSegments: 2 }),
    password: Joi.string().min(8).required()
  })
}

export default validationService;
