import { appendFileSync } from 'fs'

export class CSVWriter<T> {
    constructor(private columns: (keyof T)[]) {
        this.data = this.columns.join(',') + '\n'
    }
    private data: string

    save(filename: string): void {
        appendFileSync(filename, this.data)
        this.data = '\n'
        console.log('file saved to ' + filename);

    }

    addRows(values: T[]): void {
        for (const value of values) {
            this.data += this.formatRow(value) + '\n'
        }
        console.log(this.data);

    }

    private formatRow(value: T): string {
        return this.columns.map(column => value[column]).join(', ')
    }
}