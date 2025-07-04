import { nanoid } from "nanoid";
import Url from "../Models/url.model.js";

const createShortUrl = async (req, res) => {
    const { orignalUrl } = req.body;
    const shortId = nanoid(6);
    const baseUrl = process.env.BASEURL;

    try {
        const newUrl = new Url({
            shortId,
            orignalUrl,
            shortUrl: `${baseUrl}/youtubeb/${shortId}`
        })

        await newUrl.save();
        res.status(200).json({ message: 'Url Generated', newUrl });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error',err });
    }
}

const redirectUrl = async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const url = await Url.findOne({ shortId });
        if (!url) return res.status(400).json({ message: 'Url not found' });

        res.redirect(url.orignalUrl);
    }
    catch (err) {
        
        console.log(err)
        res.status(500).json({ message: 'Server error',err });
    }
}

export {createShortUrl,redirectUrl}