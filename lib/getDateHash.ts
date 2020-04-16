import moment from 'moment'

const DATE_HASH_FORMAT = 'YYYY-MM-DD'

export const getDateHash = () => moment().format(DATE_HASH_FORMAT)
