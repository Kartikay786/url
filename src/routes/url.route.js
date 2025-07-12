import express from 'express'
import { allUrl, createShortUrl, redirectUrl } from '../Controller/url.controller.js';

const router = express.Router();

router.post('/createShortUrl',createShortUrl);
router.get('/:shortId',redirectUrl)
router.get('/allUrl',allUrl)

export default router