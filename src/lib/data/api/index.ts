import { countriesSchema, countrySchema, holidaysSchema } from '@/lib/data/schemas'
import { createHandler } from './create-handler'

const getCountryInfo = createHandler('/CountryInfo/', countrySchema)
const getCountries = createHandler('/AvailableCountries/', countriesSchema)
const getHolidays = createHandler('/PublicHolidays/', holidaysSchema)

export { getCountryInfo, getCountries, getHolidays }
