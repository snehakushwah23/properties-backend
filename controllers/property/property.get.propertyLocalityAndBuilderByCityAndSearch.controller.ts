import { Request, Response } from "express";
import { PROPERTY, PROPERTY_LOCATION_CITY, PROPERTY_LOCATION_REGION, BUILDER } from "../../services/mongodb";
import { responseMessages } from "../../constants/response.messages";

export async function propertyGetLocalityAndBuilderController(req: Request, res: Response) {
    try {
        const { city, search, page = 1, limit = 10 } = req.query;
        const searchTerm = search ? search.toString().trim() : "";
        const skip = (Number(page) - 1) * Number(limit);

        const propertyQuery: any = {};
        const strictRegionQuery: any = {};
        const strictRegionWithoutCityQuery: any = {};
        const builderQuery: any = {};
        const cityQuery: any = {};

        if (city) {
            strictRegionQuery.city = city;
            propertyQuery.city = city;
        }

        if (searchTerm) {
            propertyQuery.name = { $regex: new RegExp(searchTerm, "i") };
        }

        if (searchTerm) {
            strictRegionQuery.region = { $regex: new RegExp("^" + searchTerm, "i") };
        }

        if (searchTerm) {
            strictRegionWithoutCityQuery.region = { $regex: new RegExp("^" + searchTerm, "i") };
        }

        if (searchTerm) {
            builderQuery.name = { $regex: new RegExp("^" + searchTerm, "i") };
        }

        if (searchTerm) {
            cityQuery.city = { $regex: new RegExp(searchTerm, "i") };
        }

        const [properties, strictRegions, strictRegionsWithoutCity, builders, cities] = await Promise.all([
            PROPERTY.find(propertyQuery).skip(skip).limit(Number(limit)),
            PROPERTY_LOCATION_REGION.find(strictRegionQuery).skip(skip).limit(Number(limit)),
            PROPERTY_LOCATION_REGION.find(strictRegionWithoutCityQuery).skip(skip).limit(Number(limit)), 
            BUILDER.find(builderQuery).skip(skip).limit(Number(limit)),
            PROPERTY_LOCATION_CITY.find(cityQuery).skip(skip).limit(Number(limit)),
        ]);

        const payload = [
            ...properties.map(p => ({ _id: p._id, name: p.name, city: p.city, type: "P" })), 
            ...strictRegions.map(loc => ({ _id: loc._id, name: loc.region, city: loc.city, type: "L" })), 
            ...builders.map(builder => ({ _id: builder._id, name: builder.name, city: null, type: "B" })), 
            ...cities.map(ct => ({ _id: ct._id, name: ct.city, city: ct.city, type: "C" })), 
            ...strictRegionsWithoutCity.map(region => ({ _id: region._id, name: region.region, city: region.city, type: "R" })),
        ];

        return res.status(200).json({
            message: "Property Locality And Builder List By City Fetched",
            payload,
        });

    } catch (err) {
        console.error("❌ ERROR in propertyGetLocalityAndBuilderController:", err);
        return res.status(500).json({ error: responseMessages.EXECUTION_FAILED });
    }
}
