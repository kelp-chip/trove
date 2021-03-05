import { getCollection } from '../../database';
export default (req, res) => {
  getCollection((collection) => res.send(collection));
};
