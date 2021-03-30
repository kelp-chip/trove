import { getCollection } from '../../../../database';
export default (req, res) => {
  const {
    query: { collection_id },
  } = req

  getCollection({user_id: 1, collection_id: collection_id}, (collection) => res.send(collection));

  // res.send(`${collection_id}`)
  // res.send("HIIII")
  }
