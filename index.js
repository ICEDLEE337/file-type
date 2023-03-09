const strtok3 = await import('strtok3/core'); // eslint-disable-line n/file-extension-in-import
import {fileTypeFromTokenizer} from './core.js';

export async function fileTypeFromFile(path) {
	const tokenizer = await strtok3.fromFile(path);
	try {
		return await fileTypeFromTokenizer(tokenizer);
	} finally {
		await tokenizer.close();
	}
}

export * from './core.js';
