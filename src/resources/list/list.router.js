import expressRouter from "express";
import controllers from "./list.controller.js";

const router = expressRouter.Router();

// /api/list
router.route("/").post(controllers.createOne);

// /api/list/:id
router
  .route("/:id")
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);

export default router;
