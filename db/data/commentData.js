import faker from 'faker'
import Country from '../../models/country.js'

const createDummyComment = (userId, countryId) => {

  const wordCount = 5 + (Math.floor(Math.random() * 20))

  return {
    text: faker.random.words(wordCount),
    user: userId,
    country: countryId,
    likes: []
  }
}

export default function createManyComments (count, users, countries) {
  const comments = []
  for (let i = 0; i < count; i++) {
    const randomUserIndex = (Math.floor(Math.random() * users.length))
    const randomCountryIndex = (Math.floor(Math.random() * countries.length))
    const comment = createDummyComment(users[randomUserIndex]._id, countries[randomCountryIndex]._id)
    comments.push(comment)

  }
  return comments
}
