import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY } from "../../services/mongodb"
import { generateRandomString } from "../../helpers/generate.random.string";

export async function propertyUpdateController(req: Request, res: Response) {

    try {

        const {
            propertyID, name, shortIntroduction, shortDescription, propertyType, projectStatus, 
            propertyShortID, assistantManager, bankAPFBankNames, builder, isHotProperty, 
            listing, propertyOptions, propertyVariation, address, city, region, 
            completedTower, contactRelationshipManagerName, contactRelationshipManagerPhoneNumber, 
            contactSaleName, contactSalePhoneNumber, googleMapsSalesOfficeLink, googleMapsSiteLink, 
            gpsSite, isBankAPF, launchedTower, numberOfFloor, partner, plotArea, 
            price, propertyTier, reraID, reraStatus, salesOfficeAddress, salesOfficeGPS, 
            shortAddress, shortOffer, shortVariant, showLikes, showRelationshipManagerContacts, 
            showShortOffer, showWhatsappLink, sroPromoter, totalTower, websiteLink, 
            possession, latitude, longitude, whatsappLink, status
        } = req.body;

        const property = await PROPERTY.findById(propertyID)

        if (!property) {
            return res.status(404).json({ message: responseMessages.PROPERTY_NOT_FOUND })
        }

        const updatedProperty = await PROPERTY.findByIdAndUpdate(
            propertyID,
            {
                name, shortIntroduction, shortDescription, propertyType, projectStatus, 
                propertyShortID: propertyShortID || property.propertyShortID || generateRandomString(5),  // Keep existing or generate
                assistantManager, bankAPFBankNames, builderID: builder, isHotProperty, 
                listing, propertyOptions, propertyVariation, address, city, region, 
                completedTower, contactRelationshipManagerName, contactRelationshipManagerPhoneNumber, 
                contactSaleName, contactSalePhoneNumber, googleMapsSalesOfficeLink, googleMapsSiteLink, 
                gpsSite, isBankAPF, launchedTower, numberOfFloor, partner, plotArea, 
                price, propertyTier, reraID: reraID || property.reraID || generateRandomString(8),  // Keep existing or generate
                reraStatus, salesOfficeAddress, salesOfficeGPS, shortAddress, 
                shortOffer, shortVariant, showLikes, showRelationshipManagerContacts, 
                showShortOffer, showWhatsappLink, sroPromoter, totalTower, websiteLink, 
                possession, latitude, longitude, whatsappLink, status
            },
            { new: true }
        );

        return res.status(200).json({ message: responseMessages.PROPERTY_UPDATED, payload: updatedProperty })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}