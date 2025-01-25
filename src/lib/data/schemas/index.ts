import { z } from 'zod'

export const countrySchema = z.object({
  commonName: z.string(),
  officialName: z.string(),
  region: z.string(),
  countryCode: z.string(),
})

export const countriesSchema = z.array(z.object({ name: z.string(), countryCode: z.string() }))

export const holidaySchema = z.object({
  date: z.string(),
  localName: z.string(),
  name: z.string(),
})

export const holidaysSchema = z.array(holidaySchema)
