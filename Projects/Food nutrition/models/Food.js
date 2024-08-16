const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    foodGroup: { type: String, required: true },
    description: { type: String },
    nutritionalInformation: {
        calories: { type: Number },
        macronutrients: {
            proteins: { type: Number },
            fats: { type: Number },
            carbohydrates: { type: Number },
        },
        micronutrients: {
            vitamins: { type: Map, of: Number }, // Map to hold multiple vitamins
            minerals: { type: Map, of: Number }, // Map to hold multiple minerals
        },
        fiber: { type: Number },
        sodium: { type: Number },
        cholesterol: { type: Number },
    },
    servingSize: { type: String },
    allergens: { type: [String] },
    ingredients: { type: [String] },
    preparationMethods: { type: String },
    certifications: { type: [String] },
    countryOfOrigin: { type: String },
    brandOrManufacturer: { type: String },
    dietaryRestrictions: { type: [String] },
    healthBenefits: { type: String },
    bestPractices: { type: String },
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
