
export const isValidArg = (arg: string): boolean => {
    const arr = arg.split('.')
    if (arr.length < 2) return false
    // if (!Object.values(validFormats).includes(arr.at(-1) as string)) return false
    return true
}

export const getFormat = (filename: string): string => {
    const format = filename.split('.').at(-1)
    return format || ''
}