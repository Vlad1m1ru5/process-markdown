import { PathLike } from "fs";
import { readFile } from "fs/promises";

const getMarkdown = (file: PathLike) => readFile(file, 'utf-8').then((buffer) => buffer.toString())

export default getMarkdown;
