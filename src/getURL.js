import url from 'url';

export const getPath = (req) => {
    return req.url;
}

export const getParamsURL = (req) => {
    let urlData = url.parse(req.url, true);
    return JSON.stringify(urlData.query);
}
