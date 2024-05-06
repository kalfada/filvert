import { writeFileSync } from 'fs'

interface Header {
    [key: string]: number
}

export class JSONToCSVWriter<T> {
    constructor(private columns: (keyof T)[]) {
        this.csv = this.columns.join(',') + '\n'
        this.header = {}
        columns.map((cell: keyof T, index) => this.header[(cell as string)] = index)
    }
    private csv: string
    private header: Header

    save(filename: string): void {
        writeFileSync(filename, this.csv)
        this.csv = '\n'
    }

    addRows(values: T[]): void {
        for (const value of values) {
            this.csv += this.formatRow(value) + '\n'
        }
    }

    private formatRow(value: T): string {

        const res = this.columns
            .map(column => String(value[column]).includes(',') ? '"' + String(value[column]) + '"' : value[column])
            .sort((a, b) => this.header[a as string] - this.header[b as string])
            .join(', ')
        return res
    }
}