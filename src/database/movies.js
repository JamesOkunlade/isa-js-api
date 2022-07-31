//src/database/movies.js
const {getDatabase} = require('./mongo');
const {ObjectId} = require('mongodb');


const collectionName = 'movies';

async function insertMovie(movie) {
  const database = await getDatabase();
  const {insertedId} = await database.collection(collectionName).insertOne(movie);
  return insertedId;
}

async function getMovies() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

async function deleteMovie(id) {
  const database = await getDatabase();
  await database.collection(collectionName).deleteOne({
    _id: new ObjectId(id),
  });
}

async function updateMovie(id, movie) {
  const database = await getDatabase();
  delete movie._id;
  await database.collection(collectionName).update(
    { _id: new ObjectID(id), },
    {
      $set: {
        ...movie,
      },
    },
  );
}

module.exports = {
  insertMovie,
  getMovies,
  deleteMovie,
  updateMovie,
};