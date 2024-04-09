
import { API_DOMAIN } from './../assets/utils/helper'

export const endpointAll = (country, category) =>
  `${API_DOMAIN}articles?lang=en`
  
export const endpointSearch = (search, selectedDateRange, selectedSource) =>
  `${API_DOMAIN}articles/search/${search}/${selectedDateRange}/${selectedSource}`

export const endpointCategory = (category, selectedDateRange, selectedSource) =>
  `${API_DOMAIN}articles/category/${category}/${selectedDateRange}/${selectedSource}`
  
export const endpointUserPreferences = (category, source) =>
`${API_DOMAIN}userpreferences/${category}/${source}`