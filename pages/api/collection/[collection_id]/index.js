import { getCollection } from '../../../../database';
export default (req, res) => {
  const {
    query: { collection_id },
  } = req

  console.log("hey")
  getCollection(1, collection_id, (collection) => res.send(collection));
  }
