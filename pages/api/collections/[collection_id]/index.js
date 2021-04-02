import { getCollection } from '../../../../database';
export default (req, res) => {

  const { collection_id } = req.query;
  getCollection(1, collection_id, (collection) => res.send(collection));
};
