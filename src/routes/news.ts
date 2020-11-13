import { Router } from 'express';
import { newsController } from '../controllers/NewsController';

const router = Router();

router.get("/", newsController.all);
router.get("/:id", newsController.getArticle);

export default router;