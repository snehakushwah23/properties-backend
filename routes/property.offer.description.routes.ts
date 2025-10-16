import { Router } from "express";
import { getPropertyOfferDescriptionController } from "../controllers/property.offer.description/property.offer.description.get.controller";
import { createPropertyOfferDescriptionController } from "../controllers/property.offer.description/property.offer.description.create.controller";
import { getAccessTokenInfo } from "../middlewares/token.middleware";

export const propertyOfferDescriptionRouter = Router({ caseSensitive: true, strict: true });

propertyOfferDescriptionRouter.get("/get", getPropertyOfferDescriptionController);
propertyOfferDescriptionRouter.post("/create/offerDescription", getAccessTokenInfo, createPropertyOfferDescriptionController);