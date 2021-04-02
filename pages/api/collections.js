import { getCollections } from '../../database';
export default (req, res) => {
  let id = req.query.id

  getCollections(id, (collection => res.send(collection)));
};

