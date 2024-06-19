import { Router } from "express";
const router = Router()
import {
  initializeDatabase,
  listTransactions,
  statistics,
  barChart,
  pieChart,
  combinedResponse,
} from "../controllers/api.js"


router.get("/api/initDatabase", initializeDatabase);
router.get("/api/transactions", listTransactions);
router.get("/api/statistics", statistics);
router.get("/api/barChart", barChart);
router.get("/api/pieChart", pieChart);
router.get("/api/combinedResponse", combinedResponse);

export default router
