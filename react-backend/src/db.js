import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb) {
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASWORD}@cluster0.9igvbwv.mongodb.net/test`);
    await client.connect();
    db = client.db('react-blog-db');
    cb();
}

export {
    db,
    connectToDb,
};