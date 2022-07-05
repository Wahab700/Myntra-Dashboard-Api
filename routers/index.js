const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  postCategories,
  getSingleCategorie,
  putSingleCategorie,
  deleteSingleCategorie,
} = require("../controllers/categoriesController");
const {
  getAllSubCategories,
  postSubCategories,
  getSingleSubCategorie,
  putSubCategorie,
  deleteSubCategorie,
} = require("../controllers/subCategoriesController");
const {
  getAllBrands,
  postBrands,
  putSingleBrands,
  deleteBrands,
} = require("../controllers/brandsController");
const {
  getAllColors,
  postAllColors,
  putSingleColors,
  getSingleColor,
  deleteSingleColor,
} = require("../controllers/colorsController");
const {
  getAllSizes,
  postSingleSizes,
  putSingleSizes,
  getSingleSizes,
  deleteSingleSizes,
} = require("../controllers/sizesController");
const {
  postSingleCoupens,
  putSingleCoupens,
  deleteSingleCoupens,
} = require("../controllers/coupensController");
const {
  getAllPaymentMethods,
  postPaymentMethods,
  putPaymentMethod,
  getSinglePaymentMethods,
} = require("../controllers/paymentMethodController");
const {
  getAllDeliveryClass,
  postSingleDeliveryClass,
  putSingleDeliveryClass,
  deleteSingleDeliveryClass,
} = require("../controllers/deliveryClassController");
const {
  postSimpleProduct,
  deleteSimpleProduct,
  putSimpleProducts,
} = require("../controllers/simpleProductsController");
const {
  getAllVariation,
  postSingleVariation,
  putVariation,
  deleteVariation,
} = require("../controllers/variationController");
const {
  postVariableProduct,
  putVariableProducts,
  deleteVariableProduct,
} = require("../controllers/variableProductsController");
const {
  postVariableProductVariation,
  putVariableProductVariation,
  deleteVariableProductVariation,
} = require("../controllers/variableProductVariationController");

const { getAllCustomer } = require("../controllers/customerController");

const { UploadMedia } = require("../middlewares/fileUploads");

// categories routes
router.get("/api/categories/all", getAllCategories);
router.post(
  "/api/categories/add",
  UploadMedia.fields([
    { name: "web_img", maxCount: 1 },
    { name: "mobile_img", maxCount: 1 },
    { name: "bg_img", maxCount: 1 },
  ]),
  postCategories
);
router.get("/api/categories/single/:id", getSingleCategorie);
router.put(
  "/api/categories/put/:id",
  UploadMedia.fields([
    { name: "web_img", maxCount: 1 },
    { name: "mobile_img", maxCount: 1 },
    { name: "bg_img", maxCount: 1 },
  ]),
  putSingleCategorie
);
router.delete("/api/categories/delete/:id", deleteSingleCategorie);

// sub categories routes
router.get("/api/subCategories/all", getAllSubCategories);
router.post(
  "/api/subCategories/add",
  UploadMedia.fields([
    { name: "feature_web_img", maxCount: 1 },
    { name: "feature_mob_img", maxCount: 1 },
  ]),
  postSubCategories
);

router.get("/api/subCategories/single/:id", getSingleSubCategorie);
router.put(
  "/api/subCategories/put/:id",
  UploadMedia.fields([
    { name: "feature_web_img", maxCount: 1 },
    { name: "feature_mob_img", maxCount: 1 },
  ]),
  putSubCategorie
);
router.delete("/api/subCategories/delete/:id", deleteSubCategorie);

// Brands routes
router.get("/api/brands/all", getAllBrands);
router.post(
  "/api/brands/add",
  UploadMedia.fields([
    { name: "web_feature_img", maxCount: 1 },
    { name: "mobile_feature_img", maxCount: 1 },
  ]),
  postBrands
);
router.put(
  "/api/brands/put/:id",
  UploadMedia.fields([
    { name: "web_feature_img", maxCount: 1 },
    { name: "mobile_feature_img", maxCount: 1 },
  ]),
  putSingleBrands
);
router.delete("/api/brands/delete/:id", deleteBrands);

// colors routes
router.get("/api/colors/all", getAllColors);
router.post("/api/colors/add", postAllColors);
router.put("/api/colors/put/:id", putSingleColors);
router.get("/api/colors/single/:id", getSingleColor);
router.delete("/api/colors/delete/:id", deleteSingleColor);

// sizes routes
router.get("/api/sizes/all", getAllSizes);
router.post("/api/sizes/add", postSingleSizes);
router.put("/api/sizes/put/:id", putSingleSizes);
router.get("/api/sizes/single/:id", getSingleSizes);
router.delete("/api/sizes/delete/:id", deleteSingleSizes);

// coupens routes
router.post("/api/coupen/add", postSingleCoupens);
router.put("/api/coupen/put/:id", putSingleCoupens);
router.delete("/api/coupen/delete/:id", deleteSingleCoupens);

// payment method routes
router.get("/api/paymentMethod/all", getAllPaymentMethods);
router.post(
  "/api/paymentMethod/add",
  UploadMedia.fields([{ name: "payment_img", maxCount: 1 }]),
  postPaymentMethods
);
router.put(
  "/api/paymentMethod/put/:id",
  UploadMedia.fields([{ name: "payment_img", maxCount: 1 }]),
  putPaymentMethod
);
router.get("/api/paymentMethod/single/:id", getSinglePaymentMethods);

// deliveryClass routes
router.get("/api/deliveryClass/all", getAllDeliveryClass);
router.post("/api/deliveryClass/add", postSingleDeliveryClass);
router.put("/api/deliveryClass/put/:id", putSingleDeliveryClass);
router.delete("/api/deliveryClass/delete/:id", deleteSingleDeliveryClass);

// customers routes
router.get("/api/customer/all", getAllCustomer);

// simpleProducts routes
router.post(
  "/api/simpleProducts/add",
  UploadMedia.fields([
    { name: "feature_image", maxCount: 1 },
    { name: "gallery_images", maxCount: 1 },
  ]),
  postSimpleProduct
);
router.put(
  "/api/simpleProducts/status/put/:id",
  UploadMedia.fields([
    { name: "feature_image", maxCount: 1 },
    { name: "gallery_images", maxCount: 1 },
  ]),
  putSimpleProducts
);
router.delete("/api/simpleProducts/delete/:id", deleteSimpleProduct);

// variation routes
router.get("/api/variation/all", getAllVariation);
router.post(
  "/api/variation/add",
  UploadMedia.fields([
    { name: "variation_feature_img", maxCount: 1 },
    { name: "variation_gallery_imgs", maxCount: 1 },
  ]),
  postSingleVariation
);
router.put(
  "/api/variation/put/:id",
  UploadMedia.fields([
    { name: "variation_feature_img", maxCount: 1 },
    { name: "variation_gallery_imgs", maxCount: 1 },
  ]),
  putVariation
);
router.delete("/api/variation/delete/:id", deleteVariation);

// variableProducts routes
router.post(
  "/api/variableProducts/add",
  UploadMedia.fields([
    { name: "variableProduct_feature_img", maxCount: 1 },
    { name: "variableProduct_gallery_imgs", maxCount: 1 },
  ]),
  postVariableProduct
);
router.put(
  "/api/variableProducts/put/:id",
  UploadMedia.fields([
    { name: "variableProduct_feature_img", maxCount: 1 },
    { name: "variableProduct_gallery_imgs", maxCount: 1 },
  ]),
  putVariableProducts
);
router.delete("/api/variableProducts/delete/:id", deleteVariableProduct);

// variable product variation routes
router.post(
  "/api/variableProductVariation/add",
  UploadMedia.fields([
    { name: "productVariation_feature_img", maxCount: 1 },
    { name: "productVariation_gallery_imgs", maxCount: 1 },
  ]),
  postVariableProductVariation
);
router.put(
  "/api/variableProductVariation/put/:id",
  UploadMedia.fields([
    { name: "productVariation_feature_img", maxCount: 1 },
    { name: "productVariation_gallery_imgs", maxCount: 1 },
  ]),
  putVariableProductVariation
);
router.delete(
  "/api/variableProductVariation/delete/:id",
  deleteVariableProductVariation
);

module.exports = router;
