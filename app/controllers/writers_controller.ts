import type { HttpContext } from '@adonisjs/core/http'

import Cineast from '#models/cineast'

export default class WritersController {
  async index({ view }: HttpContext) {
    const writers = await Cineast.query()
      .whereHas('moviesWritten', (query) => query)
      .withCount('moviesWritten', (query) =>
        query.apply((scope) => scope.released()).as('releasedCount')
      )
      .withCount('moviesWritten', (query) =>
        query.apply((scope) => scope.notReleased()).as('notReleasedCount')
      )
      .orderBy([
        { column: 'firstName', order: 'asc' },
        { column: 'lastName', order: 'asc' },
      ])
    return view.render('pages/writers/index', { writers })
  }

  async show({ view, params }: HttpContext) {
    const writer = await Cineast.findOrFail(params.id)
    const movies = await writer.related('moviesWritten').query().orderBy('title')
    return view.render('pages/writers/show', { writer, movies })
  }
}
