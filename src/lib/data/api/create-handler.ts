import { z } from 'zod'

const API_BASE_URL = 'https://date.nager.at/api/v3'

/**
 * Creates an asynchronous handler function to fetch and validate data from a specified API resource.
 *
 * @template S - The type of the data expected from the API response.
 * @param {string} resource - The API resource endpoint to fetch data from.
 * @param {z.ZodType<S>} schema - The Zod schema used to validate the fetched data.
 * @returns {Function} An asynchronous function that takes an optional parameter string and returns the validated data.
 *
 * @throws {Error} If the data fetching fails or the data validation fails.
 */

export function createHandler<S>(resource: string, schema: z.ZodType<S>) {
  return async (parameter: string = '') => {
    try {
      const response = await fetch(`${API_BASE_URL}${resource}${parameter}`)

      if (!response.ok) {
        throw new Error('Data fetching failed.')
      }

      const data = await response.json()

      const { success, data: parsedData } = schema.safeParse(data)

      if (!success) {
        throw new Error('Data could not be validated.')
      }

      return parsedData
    } catch (error) {
      throw error
    }
  }
}
