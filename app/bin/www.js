"use strict";

const app = require("../app.js");
const logger = require("../src/config/logger");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`${PORT} 서버 가동`);
});