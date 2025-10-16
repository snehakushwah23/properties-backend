import { v4 as UUID } from 'uuid'

export function generateRandomString(length: number): String {
   return String(UUID().replaceAll("-", '')).substring(0, length).toUpperCase()
}