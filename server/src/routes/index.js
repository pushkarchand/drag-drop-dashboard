const userRoutes=require("./userRoutes");
const authRoutes=require("./authRoutes");
module.exports = (app) => {
    app.use('/user',userRoutes);
    app.use('/auth',authRoutes);
};
