interface Converter<T> {
    data: T
    save(fileName: string): void

}
enum validFormats {
    'json',
    'csv'
}