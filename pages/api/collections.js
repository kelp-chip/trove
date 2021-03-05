import db from '../../database';

export default (req, res) => {
  db.getCollection((collection) => res.send(collection));
}
