import { cError, cGreen } from "./chalkThemes";
import { getFormat, isValidArg } from "./functions";
import { jsonConverter } from "./converters/json";
import fs from 'fs'

export const convert = (source: string, output: string) => {
    if (!isValidArg(source)) throw cError("You must specify the source file data type")
    if (!isValidArg(output)) throw cError("You must specify the output file data type")

    let sourceFormat = getFormat(source)
    let outputFormat = getFormat(output)

    if (sourceFormat == outputFormat) throw cError(`Cannot convert ${sourceFormat} to ${outputFormat}`)

    console.log(cGreen(`Converting ${sourceFormat.toUpperCase()} to ${outputFormat.toUpperCase()}...`));

    let sourceFile: string = ''

    // MARK: Reading the source file
    try {
        sourceFile = fs.readFileSync(source, 'utf-8')
    } catch (error) {
        throw cError('Error while reading the source file, maybe wrong path')
    }

    // console.log(JSON.parse(sourceFile));

    switch (sourceFormat) {
        case 'json':
            // console.log(`This is a ${sourceFormat.toUpperCase()} file`);
            jsonConverter(sourceFile, output)
            break;
        case 'csv':
            console.log(`This is a ${sourceFormat.toUpperCase()} file`);
            break;
        default:
            throw cError(`Doesn't support converting from ${sourceFormat.toUpperCase()} yet`)
    }
}