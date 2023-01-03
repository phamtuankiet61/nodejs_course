module.exports = {
    mutipleMongooseToObject(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject())
    },
    mongooseToObject(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}