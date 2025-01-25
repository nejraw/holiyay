import type { z } from 'zod'
import type {
  countriesSchema,
  countrySchema,
  holidaySchema,
  holidaysSchema,
} from '@/lib/data/schemas'

export type Countries = z.infer<typeof countriesSchema>
export type Country = z.infer<typeof countrySchema>
export type Holiday = z.infer<typeof holidaySchema>
export type Holidays = z.infer<typeof holidaysSchema>
