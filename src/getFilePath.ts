import * as nodePath from 'path';

export function getRelativePath({ path, filename, lineno, columnno}: IDocletMeta){
	return `${nodePath.relative(process.cwd(), nodePath.join(path, filename))}:${lineno}:${columnno}`;
}