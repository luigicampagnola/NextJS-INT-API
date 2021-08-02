import { people } from '../../../dataAPI'

export default function peopleAPI(req, res) {
  res.status(200).json(people)
}