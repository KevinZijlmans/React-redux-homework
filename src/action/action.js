export const SET_DATA = 'SET_DATA'


export function allData(manufacturer, year, origin) {
  return {
    type: SET_DATA,
    payload: {
      manufacturer,
      year,
      origin
    }
  }
}
