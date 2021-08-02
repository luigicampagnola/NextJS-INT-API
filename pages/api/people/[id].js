import { people } from "../../../dataAPI";

export default function personHandler({ query: { id } }, res) {
  const filterId = people.filter((p) => p.id === id);

  if (filterId.length > 0) {
    res.status(200).json(filterId[0]);
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` });
  }
}
