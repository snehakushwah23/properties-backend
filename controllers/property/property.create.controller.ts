import { Request, Response } from "express"
import { responseMessages } from "../../constants/response.messages"
import { PROPERTY } from "../../services/mongodb"
import { generateRandomString } from "../../helpers/generate.random.string"

export async function propertyCreateController(req: Request, res: Response) {

    try {

        const {
            name, shortIntroduction, shortDescription, propertyType, projectStatus, 
            propertyShortID, assistantManager, bankAPFBankNames, builderID, isHotProperty, 
            listing, propertyOptions, propertyVariation, address, city, region, 
            completedTower, contactRelationshipManagerName, contactRelationshipManagerPhoneNumber, 
            contactSaleName, contactSalePhoneNumber, googleMapsSalesOfficeLink, googleMapsSiteLink, 
            gpsSite, isBankAPF, launchedTower, numberOfFloor, partner, plotArea, 
            price, propertyTier, reraID, reraStatus, salesOfficeAddress, salesOfficeGPS, 
            shortAddress, shortOffer, shortVariant, showLikes, showRelationshipManagerContacts, 
            showShortOffer, showWhatsappLink, sroPromoter, totalTower, websiteLink, 
            possession, latitude, longitude, whatsappLink, status
        } = req.body;

        const createdProperty = await PROPERTY.create({
            name, shortIntroduction, shortDescription, propertyType, projectStatus, 
            propertyShortID: propertyShortID || generateRandomString(5),  
            assistantManager, bankAPFBankNames, builderID, isHotProperty, 
            listing, propertyOptions, propertyVariation, address, city, region, 
            completedTower, contactRelationshipManagerName, contactRelationshipManagerPhoneNumber, 
            contactSaleName, contactSalePhoneNumber, googleMapsSalesOfficeLink, googleMapsSiteLink, 
            gpsSite, isBankAPF, launchedTower, numberOfFloor, partner, plotArea, 
            price, propertyTier, reraID: reraID || generateRandomString(8),  
            reraStatus, salesOfficeAddress, salesOfficeGPS, shortAddress, 
            shortOffer, shortVariant, showLikes, showRelationshipManagerContacts, 
            showShortOffer, showWhatsappLink, sroPromoter, totalTower, websiteLink, 
            possession, latitude, longitude, whatsappLink, status
        });

        return res.status(200).json({ message: responseMessages.PROPERTY_CREATED, payload: createdProperty })

    } catch (err) {

        console.log("ERROR: " + __filename)
        console.log(err)
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED })

    }
}