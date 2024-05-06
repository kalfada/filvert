import { getFormat } from './../../functions';
import { cError, cGreen } from "../../chalkThemes"
import { JSONToCSVWriter } from "./JsonToCsvWriter"

interface Data {
    [key: string]: string
}

export const jsonConverter = (sourceFile: string, output: string) => {
    const data = JSON.parse(sourceFile)
    const columns: string[] = []
    for (const entry of Object.entries(data[0])) {
        if (typeof entry[1] === 'string' || typeof entry[1] === 'number' || typeof entry[1] === 'boolean') columns.push(entry[0])
    }
    const writer = new JSONToCSVWriter<Data>(columns)

    switch (getFormat(output)) {
        case 'csv':
            writer.addRows(data)
            writer.save(output)
            break;
        default:
            throw cError(`Can't convert JSON to ${getFormat(output).toUpperCase()}`)
    }


    console.log(cGreen(`File saved successfully to ${output}`));
}