import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Role from '#models/role'
import Roles from '#enums/roles'
import MovieStatus from '#models/movie_status'
import MovieStatuses from '#enums/movie_statuses'

export default class extends BaseSeeder {
  async run() {
    await Role.createMany([
      {
        id: Roles.USER,
        name: 'User',
      },
      {
        id: Roles.ADMIN,
        name: 'Admin',
      },
    ])

    await MovieStatus.createMany([
      {
        id: MovieStatuses.WRITING,
        name: 'Writing',
      },
      {
        id: MovieStatuses.CASTING,
        name: 'Casting',
      },
      {
        id: MovieStatuses.PRODUCTION,
        name: 'Production',
      },
      {
        id: MovieStatuses.POST_PRODUCTION,
        name: 'Post Production',
      },
      {
        id: MovieStatuses.RELEASED,
        name: 'Released',
      },
    ])
  }
}