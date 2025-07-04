import express from 'express'
import { createShortUrl, redirectUrl } from '../Controller/url.controller.js';

const router = express.Router();

router.post('/createShortUrl',createShortUrl);
router.get('/:shortId',redirectUrl)

export default router