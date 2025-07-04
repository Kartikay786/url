import { nanoid } from "nanoid";
import Url from "../Models/url.model.js";

const createShortUrl = async (req, res) => {
    const { orginalUrl } = req.body;
    const shortId = nanoid(6);
    const baseUrl = process.env.BASEURL;

    try {
        const newUrl = new Url({
            shortId,
            orginalUrl,
            shortUrl: `${baseUrl}/youtubeb/${shortId}`
        })

        await newUrl.save();
        res.status(200).json({ message: 'Url Generated', newUrl });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
}

const redirectUrl = async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const url = await Url.findOne({ shortId });
        if (!url) return res.status(400).json({ message: 'Url not found' });

        res.redirect(url.orginalUrl);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
}

export {createShortUrl,redirectUrl}