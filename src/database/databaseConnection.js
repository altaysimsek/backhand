const mongoose = require("mongoose");
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB bağlantısı başarılı.");
    })
    .catch((err) => {
        console.log("MongoDB bağlantısı başarısız.");
    });
