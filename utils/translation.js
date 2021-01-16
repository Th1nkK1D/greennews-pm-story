const fs = require('fs')
const CSV = require('csv-string')

export const parseTranslation = (filePath) => {
  const csvString = fs.readFileSync(filePath).toString()
  const [, ...contentRows] = CSV.parse(csvString)

  return contentRows.reduce(
    ({ en, th }, [section, key, thai, english]) => ({
      th: { ...th, [key]: thai },
      en: { ...en, [key]: english },
    }),
    {
      th: {},
      en: {},
    }
  )
}
