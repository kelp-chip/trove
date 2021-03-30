import { getCollections } from '../../database';
export default (req, res) => {
  let id = req.query.id
  console.log("id: ", id)
  getCollections(id, (collection => res.send(collection)));
};

