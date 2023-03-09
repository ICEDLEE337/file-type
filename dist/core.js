"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportedMimeTypes = exports.supportedExtensions = exports.fileTypeStream = exports.fileTypeFromTokenizer = exports.fileTypeFromBuffer = exports.fileTypeFromStream = void 0;
var node_buffer_1 = require("node:buffer");
var Token = __importStar(require("token-types"));
var strtok3 = __importStar(require("strtok3/core")); // eslint-disable-line n/file-extension-in-import
var util_js_1 = require("./util.js");
var supported_js_1 = require("./supported.js");
var minimumBytes = 4100; // A fair amount of file-types are detectable within this range.
function fileTypeFromStream(stream) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenizer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, strtok3.fromStream(stream)];
                case 1:
                    tokenizer = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, , 4, 6]);
                    return [4 /*yield*/, fileTypeFromTokenizer(tokenizer)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [4 /*yield*/, tokenizer.close()];
                case 5:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.fileTypeFromStream = fileTypeFromStream;
function fileTypeFromBuffer(input) {
    return __awaiter(this, void 0, void 0, function () {
        var buffer;
        return __generator(this, function (_a) {
            if (!(input instanceof Uint8Array || input instanceof ArrayBuffer)) {
                throw new TypeError("Expected the `input` argument to be of type `Uint8Array` or `Buffer` or `ArrayBuffer`, got `".concat(typeof input, "`"));
            }
            buffer = input instanceof Uint8Array ? input : new Uint8Array(input);
            if (!((buffer === null || buffer === void 0 ? void 0 : buffer.length) > 1)) {
                return [2 /*return*/];
            }
            return [2 /*return*/, fileTypeFromTokenizer(strtok3.fromBuffer(buffer))];
        });
    });
}
exports.fileTypeFromBuffer = fileTypeFromBuffer;
function _check(buffer, headers, options) {
    options = __assign({ offset: 0 }, options);
    for (var _i = 0, _a = headers.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], index = _b[0], header = _b[1];
        // If a bitmask is set
        if (options.mask) {
            // If header doesn't equal `buf` with bits masked off
            if (header !== (options.mask[index] & buffer[index + options.offset])) {
                return false;
            }
        }
        else if (header !== buffer[index + options.offset]) {
            return false;
        }
    }
    return true;
}
function fileTypeFromTokenizer(tokenizer) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                return [2 /*return*/, new FileTypeParser().parse(tokenizer)];
            }
            catch (error) {
                if (!(error instanceof strtok3.EndOfStreamError)) {
                    throw error;
                }
            }
            return [2 /*return*/];
        });
    });
}
exports.fileTypeFromTokenizer = fileTypeFromTokenizer;
var FileTypeParser = /** @class */ (function () {
    function FileTypeParser() {
    }
    FileTypeParser.prototype.check = function (header, options) {
        return _check(this.buffer, header, options);
    };
    FileTypeParser.prototype.checkString = function (header, options) {
        return this.check((0, util_js_1.stringToBytes)(header), options);
    };
    FileTypeParser.prototype.parse = function (tokenizer) {
        return __awaiter(this, void 0, void 0, function () {
            function readField() {
                return __awaiter(this, void 0, void 0, function () {
                    var msb, mask, ic, id;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, tokenizer.peekNumber(Token.UINT8)];
                            case 1:
                                msb = _a.sent();
                                mask = 0x80;
                                ic = 0;
                                // = D
                                while ((msb & mask) === 0 && mask !== 0) {
                                    ++ic;
                                    mask >>= 1;
                                }
                                id = node_buffer_1.Buffer.alloc(ic + 1);
                                return [4 /*yield*/, tokenizer.readBuffer(id)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/, id];
                        }
                    });
                });
            }
            function readElement() {
                return __awaiter(this, void 0, void 0, function () {
                    var id, lengthField, nrLength;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, readField()];
                            case 1:
                                id = _a.sent();
                                return [4 /*yield*/, readField()];
                            case 2:
                                lengthField = _a.sent();
                                lengthField[0] ^= 0x80 >> (lengthField.length - 1);
                                nrLength = Math.min(6, lengthField.length);
                                return [2 /*return*/, {
                                        id: id.readUIntBE(0, id.length),
                                        len: lengthField.readUIntBE(lengthField.length - nrLength, nrLength),
                                    }];
                        }
                    });
                });
            }
            function readChildren(children) {
                return __awaiter(this, void 0, void 0, function () {
                    var element, rawValue;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(children > 0)) return [3 /*break*/, 5];
                                return [4 /*yield*/, readElement()];
                            case 1:
                                element = _a.sent();
                                if (!(element.id === 17026)) return [3 /*break*/, 3];
                                return [4 /*yield*/, tokenizer.readToken(new Token.StringType(element.len, 'utf-8'))];
                            case 2:
                                rawValue = _a.sent();
                                return [2 /*return*/, rawValue.replace(/\00.*$/g, '')]; // Return DocType
                            case 3: return [4 /*yield*/, tokenizer.ignore(element.len)];
                            case 4:
                                _a.sent(); // ignore payload
                                --children;
                                return [3 /*break*/, 0];
                            case 5: return [2 /*return*/];
                        }
                    });
                });
            }
            function readChunkHeader() {
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = {};
                                return [4 /*yield*/, tokenizer.readToken(Token.INT32_BE)];
                            case 1:
                                _a.length = _b.sent();
                                return [4 /*yield*/, tokenizer.readToken(new Token.StringType(4, 'binary'))];
                            case 2: return [2 /*return*/, (_a.type = _b.sent(),
                                    _a)];
                        }
                    });
                });
            }
            function readHeader() {
                return __awaiter(this, void 0, void 0, function () {
                    var guid, _a;
                    var _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                guid = node_buffer_1.Buffer.alloc(16);
                                return [4 /*yield*/, tokenizer.readBuffer(guid)];
                            case 1:
                                _c.sent();
                                _b = {
                                    id: guid
                                };
                                _a = Number;
                                return [4 /*yield*/, tokenizer.readToken(Token.UINT64_LE)];
                            case 2: return [2 /*return*/, (_b.size = _a.apply(void 0, [_c.sent()]),
                                    _b)];
                        }
                    });
                });
            }
            var id3HeaderLength, zipHeader, _a, type, mimeType, nextHeaderIndex, error_1, type, brandMajor, maxBufferSize, buffer, error_2, fileType, fileType, re, docType, version, string, chunk, _b, header, payload, typeId, _c, type, jsonSize, header, json;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.buffer = node_buffer_1.Buffer.alloc(minimumBytes);
                        // Keep reading until EOF if the file size is unknown.
                        if (tokenizer.fileInfo.size === undefined) {
                            tokenizer.fileInfo.size = Number.MAX_SAFE_INTEGER;
                        }
                        this.tokenizer = tokenizer;
                        return [4 /*yield*/, tokenizer.peekBuffer(this.buffer, { length: 12, mayBeLess: true })];
                    case 1:
                        _d.sent();
                        // -- 2-byte signatures --
                        if (this.check([0x42, 0x4D])) {
                            return [2 /*return*/, {
                                    ext: 'bmp',
                                    mime: 'image/bmp',
                                }];
                        }
                        if (this.check([0x0B, 0x77])) {
                            return [2 /*return*/, {
                                    ext: 'ac3',
                                    mime: 'audio/vnd.dolby.dd-raw',
                                }];
                        }
                        if (this.check([0x78, 0x01])) {
                            return [2 /*return*/, {
                                    ext: 'dmg',
                                    mime: 'application/x-apple-diskimage',
                                }];
                        }
                        if (this.check([0x4D, 0x5A])) {
                            return [2 /*return*/, {
                                    ext: 'exe',
                                    mime: 'application/x-msdownload',
                                }];
                        }
                        if (!this.check([0x25, 0x21])) return [3 /*break*/, 3];
                        return [4 /*yield*/, tokenizer.peekBuffer(this.buffer, { length: 24, mayBeLess: true })];
                    case 2:
                        _d.sent();
                        if (this.checkString('PS-Adobe-', { offset: 2 })
                            && this.checkString(' EPSF-', { offset: 14 })) {
                            return [2 /*return*/, {
                                    ext: 'eps',
                                    mime: 'application/eps',
                                }];
                        }
                        return [2 /*return*/, {
                                ext: 'ps',
                                mime: 'application/postscript',
                            }];
                    case 3:
                        if (this.check([0x1F, 0xA0])
                            || this.check([0x1F, 0x9D])) {
                            return [2 /*return*/, {
                                    ext: 'Z',
                                    mime: 'application/x-compress',
                                }];
                        }
                        // -- 3-byte signatures --
                        if (this.check([0xEF, 0xBB, 0xBF])) { // UTF-8-BOM
                            // Strip off UTF-8-BOM
                            this.tokenizer.ignore(3);
                            return [2 /*return*/, this.parse(tokenizer)];
                        }
                        if (this.check([0x47, 0x49, 0x46])) {
                            return [2 /*return*/, {
                                    ext: 'gif',
                                    mime: 'image/gif',
                                }];
                        }
                        if (this.check([0x49, 0x49, 0xBC])) {
                            return [2 /*return*/, {
                                    ext: 'jxr',
                                    mime: 'image/vnd.ms-photo',
                                }];
                        }
                        if (this.check([0x1F, 0x8B, 0x8])) {
                            return [2 /*return*/, {
                                    ext: 'gz',
                                    mime: 'application/gzip',
                                }];
                        }
                        if (this.check([0x42, 0x5A, 0x68])) {
                            return [2 /*return*/, {
                                    ext: 'bz2',
                                    mime: 'application/x-bzip2',
                                }];
                        }
                        if (!this.checkString('ID3')) return [3 /*break*/, 7];
                        return [4 /*yield*/, tokenizer.ignore(6)];
                    case 4:
                        _d.sent(); // Skip ID3 header until the header size
                        return [4 /*yield*/, tokenizer.readToken(util_js_1.uint32SyncSafeToken)];
                    case 5:
                        id3HeaderLength = _d.sent();
                        if (tokenizer.position + id3HeaderLength > tokenizer.fileInfo.size) {
                            // Guess file type based on ID3 header for backward compatibility
                            return [2 /*return*/, {
                                    ext: 'mp3',
                                    mime: 'audio/mpeg',
                                }];
                        }
                        return [4 /*yield*/, tokenizer.ignore(id3HeaderLength)];
                    case 6:
                        _d.sent();
                        return [2 /*return*/, fileTypeFromTokenizer(tokenizer)]; // Skip ID3 header, recursion
                    case 7:
                        // Musepack, SV7
                        if (this.checkString('MP+')) {
                            return [2 /*return*/, {
                                    ext: 'mpc',
                                    mime: 'audio/x-musepack',
                                }];
                        }
                        if ((this.buffer[0] === 0x43 || this.buffer[0] === 0x46)
                            && this.check([0x57, 0x53], { offset: 1 })) {
                            return [2 /*return*/, {
                                    ext: 'swf',
                                    mime: 'application/x-shockwave-flash',
                                }];
                        }
                        // -- 4-byte signatures --
                        // Requires a sample size of 4 bytes
                        if (this.check([0xFF, 0xD8, 0xFF])) {
                            if (this.check([0xF7], { offset: 3 })) { // JPG7/SOF55, indicating a ISO/IEC 14495 / JPEG-LS file
                                return [2 /*return*/, {
                                        ext: 'jls',
                                        mime: 'image/jls',
                                    }];
                            }
                            return [2 /*return*/, {
                                    ext: 'jpg',
                                    mime: 'image/jpeg',
                                }];
                        }
                        if (this.checkString('FLIF')) {
                            return [2 /*return*/, {
                                    ext: 'flif',
                                    mime: 'image/flif',
                                }];
                        }
                        if (this.checkString('8BPS')) {
                            return [2 /*return*/, {
                                    ext: 'psd',
                                    mime: 'image/vnd.adobe.photoshop',
                                }];
                        }
                        if (this.checkString('WEBP', { offset: 8 })) {
                            return [2 /*return*/, {
                                    ext: 'webp',
                                    mime: 'image/webp',
                                }];
                        }
                        // Musepack, SV8
                        if (this.checkString('MPCK')) {
                            return [2 /*return*/, {
                                    ext: 'mpc',
                                    mime: 'audio/x-musepack',
                                }];
                        }
                        if (this.checkString('FORM')) {
                            return [2 /*return*/, {
                                    ext: 'aif',
                                    mime: 'audio/aiff',
                                }];
                        }
                        if (this.checkString('icns', { offset: 0 })) {
                            return [2 /*return*/, {
                                    ext: 'icns',
                                    mime: 'image/icns',
                                }];
                        }
                        if (!this.check([0x50, 0x4B, 0x3, 0x4])) return [3 /*break*/, 25];
                        _d.label = 8;
                    case 8:
                        _d.trys.push([8, 23, , 24]);
                        _d.label = 9;
                    case 9:
                        if (!(tokenizer.position + 30 < tokenizer.fileInfo.size)) return [3 /*break*/, 22];
                        return [4 /*yield*/, tokenizer.readBuffer(this.buffer, { length: 30 })];
                    case 10:
                        _d.sent();
                        zipHeader = {
                            compressedSize: this.buffer.readUInt32LE(18),
                            uncompressedSize: this.buffer.readUInt32LE(22),
                            filenameLength: this.buffer.readUInt16LE(26),
                            extraFieldLength: this.buffer.readUInt16LE(28),
                        };
                        _a = zipHeader;
                        return [4 /*yield*/, tokenizer.readToken(new Token.StringType(zipHeader.filenameLength, 'utf-8'))];
                    case 11:
                        _a.filename = _d.sent();
                        return [4 /*yield*/, tokenizer.ignore(zipHeader.extraFieldLength)];
                    case 12:
                        _d.sent();
                        // Assumes signed `.xpi` from addons.mozilla.org
                        if (zipHeader.filename === 'META-INF/mozilla.rsa') {
                            return [2 /*return*/, {
                                    ext: 'xpi',
                                    mime: 'application/x-xpinstall',
                                }];
                        }
                        if (zipHeader.filename.endsWith('.rels') || zipHeader.filename.endsWith('.xml')) {
                            type = zipHeader.filename.split('/')[0];
                            switch (type) {
                                case '_rels':
                                    break;
                                case 'word':
                                    return [2 /*return*/, {
                                            ext: 'docx',
                                            mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                                        }];
                                case 'ppt':
                                    return [2 /*return*/, {
                                            ext: 'pptx',
                                            mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                        }];
                                case 'xl':
                                    return [2 /*return*/, {
                                            ext: 'xlsx',
                                            mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                                        }];
                                default:
                                    break;
                            }
                        }
                        if (zipHeader.filename.startsWith('xl/')) {
                            return [2 /*return*/, {
                                    ext: 'xlsx',
                                    mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                                }];
                        }
                        if (zipHeader.filename.startsWith('3D/') && zipHeader.filename.endsWith('.model')) {
                            return [2 /*return*/, {
                                    ext: '3mf',
                                    mime: 'model/3mf',
                                }];
                        }
                        if (!(zipHeader.filename === 'mimetype' && zipHeader.compressedSize === zipHeader.uncompressedSize)) return [3 /*break*/, 14];
                        return [4 /*yield*/, tokenizer.readToken(new Token.StringType(zipHeader.compressedSize, 'utf-8'))];
                    case 13:
                        mimeType = _d.sent();
                        mimeType = mimeType.trim();
                        switch (mimeType) {
                            case 'application/epub+zip':
                                return [2 /*return*/, {
                                        ext: 'epub',
                                        mime: 'application/epub+zip',
                                    }];
                            case 'application/vnd.oasis.opendocument.text':
                                return [2 /*return*/, {
                                        ext: 'odt',
                                        mime: 'application/vnd.oasis.opendocument.text',
                                    }];
                            case 'application/vnd.oasis.opendocument.spreadsheet':
                                return [2 /*return*/, {
                                        ext: 'ods',
                                        mime: 'application/vnd.oasis.opendocument.spreadsheet',
                                    }];
                            case 'application/vnd.oasis.opendocument.presentation':
                                return [2 /*return*/, {
                                        ext: 'odp',
                                        mime: 'application/vnd.oasis.opendocument.presentation',
                                    }];
                            default:
                        }
                        _d.label = 14;
                    case 14:
                        if (!(zipHeader.compressedSize === 0)) return [3 /*break*/, 19];
                        nextHeaderIndex = -1;
                        _d.label = 15;
                    case 15:
                        if (!(nextHeaderIndex < 0 && (tokenizer.position < tokenizer.fileInfo.size))) return [3 /*break*/, 18];
                        return [4 /*yield*/, tokenizer.peekBuffer(this.buffer, { mayBeLess: true })];
                    case 16:
                        _d.sent();
                        nextHeaderIndex = this.buffer.indexOf('504B0304', 0, 'hex');
                        // Move position to the next header if found, skip the whole buffer otherwise
                        return [4 /*yield*/, tokenizer.ignore(nextHeaderIndex >= 0 ? nextHeaderIndex : this.buffer.length)];
                    case 17:
                        // Move position to the next header if found, skip the whole buffer otherwise
                        _d.sent();
                        return [3 /*break*/, 15];
                    case 18: return [3 /*break*/, 21];
                    case 19: return [4 /*yield*/, tokenizer.ignore(zipHeader.compressedSize)];
                    case 20:
                        _d.sent();
                        _d.label = 21;
                    case 21: return [3 /*break*/, 9];
                    case 22: return [3 /*break*/, 24];
                    case 23:
                        error_1 = _d.sent();
                        if (!(error_1 instanceof strtok3.EndOfStreamError)) {
                            throw error_1;
                        }
                        return [3 /*break*/, 24];
                    case 24: return [2 /*return*/, {
                            ext: 'zip',
                            mime: 'application/zip',
                        }];
                    case 25:
                        if (!this.checkString('OggS')) return [3 /*break*/, 28];
                        // This is an OGG container
                        return [4 /*yield*/, tokenizer.ignore(28)];
                    case 26:
                        // This is an OGG container
                        _d.sent();
                        type = node_buffer_1.Buffer.alloc(8);
                        return [4 /*yield*/, tokenizer.readBuffer(type)];
                    case 27:
                        _d.sent();
                        // Needs to be before `ogg` check
                        if (_check(type, [0x4F, 0x70, 0x75, 0x73, 0x48, 0x65, 0x61, 0x64])) {
                            return [2 /*return*/, {
                                    ext: 'opus',
                                    mime: 'audio/opus',
                                }];
                        }
                        // If ' theora' in header.
                        if (_check(type, [0x80, 0x74, 0x68, 0x65, 0x6F, 0x72, 0x61])) {
                            return [2 /*return*/, {
                                    ext: 'ogv',
                                    mime: 'video/ogg',
                                }];
                        }
                        // If '\x01video' in header.
                        if (_check(type, [0x01, 0x76, 0x69, 0x64, 0x65, 0x6F, 0x00])) {
                            return [2 /*return*/, {
                                    ext: 'ogm',
                                    mime: 'video/ogg',
                                }];
                        }
                        // If ' FLAC' in header  https://xiph.org/flac/faq.html
                        if (_check(type, [0x7F, 0x46, 0x4C, 0x41, 0x43])) {
                            return [2 /*return*/, {
                                    ext: 'oga',
                                    mime: 'audio/ogg',
                                }];
                        }
                        // 'Speex  ' in header https://en.wikipedia.org/wiki/Speex
                        if (_check(type, [0x53, 0x70, 0x65, 0x65, 0x78, 0x20, 0x20])) {
                            return [2 /*return*/, {
                                    ext: 'spx',
                                    mime: 'audio/ogg',
                                }];
                        }
                        // If '\x01vorbis' in header
                        if (_check(type, [0x01, 0x76, 0x6F, 0x72, 0x62, 0x69, 0x73])) {
                            return [2 /*return*/, {
                                    ext: 'ogg',
                                    mime: 'audio/ogg',
                                }];
                        }
                        // Default OGG container https://www.iana.org/assignments/media-types/application/ogg
                        return [2 /*return*/, {
                                ext: 'ogx',
                                mime: 'application/ogg',
                            }];
                    case 28:
                        if (this.check([0x50, 0x4B])
                            && (this.buffer[2] === 0x3 || this.buffer[2] === 0x5 || this.buffer[2] === 0x7)
                            && (this.buffer[3] === 0x4 || this.buffer[3] === 0x6 || this.buffer[3] === 0x8)) {
                            return [2 /*return*/, {
                                    ext: 'zip',
                                    mime: 'application/zip',
                                }];
                        }
                        //
                        // File Type Box (https://en.wikipedia.org/wiki/ISO_base_media_file_format)
                        // It's not required to be first, but it's recommended to be. Almost all ISO base media files start with `ftyp` box.
                        // `ftyp` box must contain a brand major identifier, which must consist of ISO 8859-1 printable characters.
                        // Here we check for 8859-1 printable characters (for simplicity, it's a mask which also catches one non-printable character).
                        if (this.checkString('ftyp', { offset: 4 })
                            && (this.buffer[8] & 0x60) !== 0x00 // Brand major, first character ASCII?
                        ) {
                            brandMajor = this.buffer.toString('binary', 8, 12).replace('\0', ' ').trim();
                            switch (brandMajor) {
                                case 'avif':
                                case 'avis':
                                    return [2 /*return*/, { ext: 'avif', mime: 'image/avif' }];
                                case 'mif1':
                                    return [2 /*return*/, { ext: 'heic', mime: 'image/heif' }];
                                case 'msf1':
                                    return [2 /*return*/, { ext: 'heic', mime: 'image/heif-sequence' }];
                                case 'heic':
                                case 'heix':
                                    return [2 /*return*/, { ext: 'heic', mime: 'image/heic' }];
                                case 'hevc':
                                case 'hevx':
                                    return [2 /*return*/, { ext: 'heic', mime: 'image/heic-sequence' }];
                                case 'qt':
                                    return [2 /*return*/, { ext: 'mov', mime: 'video/quicktime' }];
                                case 'M4V':
                                case 'M4VH':
                                case 'M4VP':
                                    return [2 /*return*/, { ext: 'm4v', mime: 'video/x-m4v' }];
                                case 'M4P':
                                    return [2 /*return*/, { ext: 'm4p', mime: 'video/mp4' }];
                                case 'M4B':
                                    return [2 /*return*/, { ext: 'm4b', mime: 'audio/mp4' }];
                                case 'M4A':
                                    return [2 /*return*/, { ext: 'm4a', mime: 'audio/x-m4a' }];
                                case 'F4V':
                                    return [2 /*return*/, { ext: 'f4v', mime: 'video/mp4' }];
                                case 'F4P':
                                    return [2 /*return*/, { ext: 'f4p', mime: 'video/mp4' }];
                                case 'F4A':
                                    return [2 /*return*/, { ext: 'f4a', mime: 'audio/mp4' }];
                                case 'F4B':
                                    return [2 /*return*/, { ext: 'f4b', mime: 'audio/mp4' }];
                                case 'crx':
                                    return [2 /*return*/, { ext: 'cr3', mime: 'image/x-canon-cr3' }];
                                default:
                                    if (brandMajor.startsWith('3g')) {
                                        if (brandMajor.startsWith('3g2')) {
                                            return [2 /*return*/, { ext: '3g2', mime: 'video/3gpp2' }];
                                        }
                                        return [2 /*return*/, { ext: '3gp', mime: 'video/3gpp' }];
                                    }
                                    return [2 /*return*/, { ext: 'mp4', mime: 'video/mp4' }];
                            }
                        }
                        if (this.checkString('MThd')) {
                            return [2 /*return*/, {
                                    ext: 'mid',
                                    mime: 'audio/midi',
                                }];
                        }
                        if (this.checkString('wOFF')
                            && (this.check([0x00, 0x01, 0x00, 0x00], { offset: 4 })
                                || this.checkString('OTTO', { offset: 4 }))) {
                            return [2 /*return*/, {
                                    ext: 'woff',
                                    mime: 'font/woff',
                                }];
                        }
                        if (this.checkString('wOF2')
                            && (this.check([0x00, 0x01, 0x00, 0x00], { offset: 4 })
                                || this.checkString('OTTO', { offset: 4 }))) {
                            return [2 /*return*/, {
                                    ext: 'woff2',
                                    mime: 'font/woff2',
                                }];
                        }
                        if (this.check([0xD4, 0xC3, 0xB2, 0xA1]) || this.check([0xA1, 0xB2, 0xC3, 0xD4])) {
                            return [2 /*return*/, {
                                    ext: 'pcap',
                                    mime: 'application/vnd.tcpdump.pcap',
                                }];
                        }
                        // Sony DSD Stream File (DSF)
                        if (this.checkString('DSD ')) {
                            return [2 /*return*/, {
                                    ext: 'dsf',
                                    mime: 'audio/x-dsf', // Non-standard
                                }];
                        }
                        if (this.checkString('LZIP')) {
                            return [2 /*return*/, {
                                    ext: 'lz',
                                    mime: 'application/x-lzip',
                                }];
                        }
                        if (this.checkString('fLaC')) {
                            return [2 /*return*/, {
                                    ext: 'flac',
                                    mime: 'audio/x-flac',
                                }];
                        }
                        if (this.check([0x42, 0x50, 0x47, 0xFB])) {
                            return [2 /*return*/, {
                                    ext: 'bpg',
                                    mime: 'image/bpg',
                                }];
                        }
                        if (this.checkString('wvpk')) {
                            return [2 /*return*/, {
                                    ext: 'wv',
                                    mime: 'audio/wavpack',
                                }];
                        }
                        if (!this.checkString('%PDF')) return [3 /*break*/, 34];
                        _d.label = 29;
                    case 29:
                        _d.trys.push([29, 32, , 33]);
                        return [4 /*yield*/, tokenizer.ignore(1350)];
                    case 30:
                        _d.sent();
                        maxBufferSize = 10 * 1024 * 1024;
                        buffer = node_buffer_1.Buffer.alloc(Math.min(maxBufferSize, tokenizer.fileInfo.size));
                        return [4 /*yield*/, tokenizer.readBuffer(buffer, { mayBeLess: true })];
                    case 31:
                        _d.sent();
                        // Check if this is an Adobe Illustrator file
                        if (buffer.includes(node_buffer_1.Buffer.from('AIPrivateData'))) {
                            return [2 /*return*/, {
                                    ext: 'ai',
                                    mime: 'application/postscript',
                                }];
                        }
                        return [3 /*break*/, 33];
                    case 32:
                        error_2 = _d.sent();
                        // Swallow end of stream error if file is too small for the Adobe AI check
                        if (!(error_2 instanceof strtok3.EndOfStreamError)) {
                            throw error_2;
                        }
                        return [3 /*break*/, 33];
                    case 33: 
                    // Assume this is just a normal PDF
                    return [2 /*return*/, {
                            ext: 'pdf',
                            mime: 'application/pdf',
                        }];
                    case 34:
                        if (this.check([0x00, 0x61, 0x73, 0x6D])) {
                            return [2 /*return*/, {
                                    ext: 'wasm',
                                    mime: 'application/wasm',
                                }];
                        }
                        if (!this.check([0x49, 0x49])) return [3 /*break*/, 36];
                        return [4 /*yield*/, this.readTiffHeader(false)];
                    case 35:
                        fileType = _d.sent();
                        if (fileType) {
                            return [2 /*return*/, fileType];
                        }
                        _d.label = 36;
                    case 36:
                        if (!this.check([0x4D, 0x4D])) return [3 /*break*/, 38];
                        return [4 /*yield*/, this.readTiffHeader(true)];
                    case 37:
                        fileType = _d.sent();
                        if (fileType) {
                            return [2 /*return*/, fileType];
                        }
                        _d.label = 38;
                    case 38:
                        if (this.checkString('MAC ')) {
                            return [2 /*return*/, {
                                    ext: 'ape',
                                    mime: 'audio/ape',
                                }];
                        }
                        if (!this.check([0x1A, 0x45, 0xDF, 0xA3])) return [3 /*break*/, 41];
                        return [4 /*yield*/, readElement()];
                    case 39:
                        re = _d.sent();
                        return [4 /*yield*/, readChildren(re.len)];
                    case 40:
                        docType = _d.sent();
                        switch (docType) {
                            case 'webm':
                                return [2 /*return*/, {
                                        ext: 'webm',
                                        mime: 'video/webm',
                                    }];
                            case 'matroska':
                                return [2 /*return*/, {
                                        ext: 'mkv',
                                        mime: 'video/x-matroska',
                                    }];
                            default:
                                return [2 /*return*/];
                        }
                        _d.label = 41;
                    case 41:
                        // RIFF file format which might be AVI, WAV, QCP, etc
                        if (this.check([0x52, 0x49, 0x46, 0x46])) {
                            if (this.check([0x41, 0x56, 0x49], { offset: 8 })) {
                                return [2 /*return*/, {
                                        ext: 'avi',
                                        mime: 'video/vnd.avi',
                                    }];
                            }
                            if (this.check([0x57, 0x41, 0x56, 0x45], { offset: 8 })) {
                                return [2 /*return*/, {
                                        ext: 'wav',
                                        mime: 'audio/vnd.wave',
                                    }];
                            }
                            // QLCM, QCP file
                            if (this.check([0x51, 0x4C, 0x43, 0x4D], { offset: 8 })) {
                                return [2 /*return*/, {
                                        ext: 'qcp',
                                        mime: 'audio/qcelp',
                                    }];
                            }
                        }
                        if (this.checkString('SQLi')) {
                            return [2 /*return*/, {
                                    ext: 'sqlite',
                                    mime: 'application/x-sqlite3',
                                }];
                        }
                        if (this.check([0x4E, 0x45, 0x53, 0x1A])) {
                            return [2 /*return*/, {
                                    ext: 'nes',
                                    mime: 'application/x-nintendo-nes-rom',
                                }];
                        }
                        if (this.checkString('Cr24')) {
                            return [2 /*return*/, {
                                    ext: 'crx',
                                    mime: 'application/x-google-chrome-extension',
                                }];
                        }
                        if (this.checkString('MSCF')
                            || this.checkString('ISc(')) {
                            return [2 /*return*/, {
                                    ext: 'cab',
                                    mime: 'application/vnd.ms-cab-compressed',
                                }];
                        }
                        if (this.check([0xED, 0xAB, 0xEE, 0xDB])) {
                            return [2 /*return*/, {
                                    ext: 'rpm',
                                    mime: 'application/x-rpm',
                                }];
                        }
                        if (this.check([0xC5, 0xD0, 0xD3, 0xC6])) {
                            return [2 /*return*/, {
                                    ext: 'eps',
                                    mime: 'application/eps',
                                }];
                        }
                        if (this.check([0x28, 0xB5, 0x2F, 0xFD])) {
                            return [2 /*return*/, {
                                    ext: 'zst',
                                    mime: 'application/zstd',
                                }];
                        }
                        if (this.check([0x7F, 0x45, 0x4C, 0x46])) {
                            return [2 /*return*/, {
                                    ext: 'elf',
                                    mime: 'application/x-elf',
                                }];
                        }
                        if (this.check([0x21, 0x42, 0x44, 0x4E])) {
                            return [2 /*return*/, {
                                    ext: 'pst',
                                    mime: 'application/vnd.ms-outlook',
                                }];
                        }
                        if (this.checkString('PAR1')) {
                            return [2 /*return*/, {
                                    ext: 'parquet',
                                    mime: 'application/x-parquet',
                                }];
                        }
                        // -- 5-byte signatures --
                        if (this.check([0x4F, 0x54, 0x54, 0x4F, 0x00])) {
                            return [2 /*return*/, {
                                    ext: 'otf',
                                    mime: 'font/otf',
                                }];
                        }
                        if (this.checkString('#!AMR')) {
                            return [2 /*return*/, {
                                    ext: 'amr',
                                    mime: 'audio/amr',
                                }];
                        }
                        if (this.checkString('{\\rtf')) {
                            return [2 /*return*/, {
                                    ext: 'rtf',
                                    mime: 'application/rtf',
                                }];
                        }
                        if (this.check([0x46, 0x4C, 0x56, 0x01])) {
                            return [2 /*return*/, {
                                    ext: 'flv',
                                    mime: 'video/x-flv',
                                }];
                        }
                        if (this.checkString('IMPM')) {
                            return [2 /*return*/, {
                                    ext: 'it',
                                    mime: 'audio/x-it',
                                }];
                        }
                        if (this.checkString('-lh0-', { offset: 2 })
                            || this.checkString('-lh1-', { offset: 2 })
                            || this.checkString('-lh2-', { offset: 2 })
                            || this.checkString('-lh3-', { offset: 2 })
                            || this.checkString('-lh4-', { offset: 2 })
                            || this.checkString('-lh5-', { offset: 2 })
                            || this.checkString('-lh6-', { offset: 2 })
                            || this.checkString('-lh7-', { offset: 2 })
                            || this.checkString('-lzs-', { offset: 2 })
                            || this.checkString('-lz4-', { offset: 2 })
                            || this.checkString('-lz5-', { offset: 2 })
                            || this.checkString('-lhd-', { offset: 2 })) {
                            return [2 /*return*/, {
                                    ext: 'lzh',
                                    mime: 'application/x-lzh-compressed',
                                }];
                        }
                        // MPEG program stream (PS or MPEG-PS)
                        if (this.check([0x00, 0x00, 0x01, 0xBA])) {
                            //  MPEG-PS, MPEG-1 Part 1
                            if (this.check([0x21], { offset: 4, mask: [0xF1] })) {
                                return [2 /*return*/, {
                                        ext: 'mpg',
                                        mime: 'video/MP1S',
                                    }];
                            }
                            // MPEG-PS, MPEG-2 Part 1
                            if (this.check([0x44], { offset: 4, mask: [0xC4] })) {
                                return [2 /*return*/, {
                                        ext: 'mpg',
                                        mime: 'video/MP2P',
                                    }];
                            }
                        }
                        if (this.checkString('ITSF')) {
                            return [2 /*return*/, {
                                    ext: 'chm',
                                    mime: 'application/vnd.ms-htmlhelp',
                                }];
                        }
                        // -- 6-byte signatures --
                        if (this.check([0xFD, 0x37, 0x7A, 0x58, 0x5A, 0x00])) {
                            return [2 /*return*/, {
                                    ext: 'xz',
                                    mime: 'application/x-xz',
                                }];
                        }
                        if (this.checkString('<?xml ')) {
                            return [2 /*return*/, {
                                    ext: 'xml',
                                    mime: 'application/xml',
                                }];
                        }
                        if (this.check([0x37, 0x7A, 0xBC, 0xAF, 0x27, 0x1C])) {
                            return [2 /*return*/, {
                                    ext: '7z',
                                    mime: 'application/x-7z-compressed',
                                }];
                        }
                        if (this.check([0x52, 0x61, 0x72, 0x21, 0x1A, 0x7])
                            && (this.buffer[6] === 0x0 || this.buffer[6] === 0x1)) {
                            return [2 /*return*/, {
                                    ext: 'rar',
                                    mime: 'application/x-rar-compressed',
                                }];
                        }
                        if (this.checkString('solid ')) {
                            return [2 /*return*/, {
                                    ext: 'stl',
                                    mime: 'model/stl',
                                }];
                        }
                        if (this.checkString('AC')) {
                            version = this.buffer.toString('binary', 2, 6);
                            if (version.match('^d*') && version >= 1000 && version <= 1050) {
                                return [2 /*return*/, {
                                        ext: 'dwg',
                                        mime: 'image/vnd.dwg',
                                    }];
                            }
                        }
                        // -- 7-byte signatures --
                        if (this.checkString('BLENDER')) {
                            return [2 /*return*/, {
                                    ext: 'blend',
                                    mime: 'application/x-blender',
                                }];
                        }
                        if (!this.checkString('!<arch>')) return [3 /*break*/, 44];
                        return [4 /*yield*/, tokenizer.ignore(8)];
                    case 42:
                        _d.sent();
                        return [4 /*yield*/, tokenizer.readToken(new Token.StringType(13, 'ascii'))];
                    case 43:
                        string = _d.sent();
                        if (string === 'debian-binary') {
                            return [2 /*return*/, {
                                    ext: 'deb',
                                    mime: 'application/x-deb',
                                }];
                        }
                        return [2 /*return*/, {
                                ext: 'ar',
                                mime: 'application/x-unix-archive',
                            }];
                    case 44:
                        if (!this.check([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])) return [3 /*break*/, 54];
                        // APNG format (https://wiki.mozilla.org/APNG_Specification)
                        // 1. Find the first IDAT (image data) chunk (49 44 41 54)
                        // 2. Check if there is an "acTL" chunk before the IDAT one (61 63 54 4C)
                        // Offset calculated as follows:
                        // - 8 bytes: PNG signature
                        // - 4 (length) + 4 (chunk type) + 13 (chunk data) + 4 (CRC): IHDR chunk
                        return [4 /*yield*/, tokenizer.ignore(8)];
                    case 45:
                        // APNG format (https://wiki.mozilla.org/APNG_Specification)
                        // 1. Find the first IDAT (image data) chunk (49 44 41 54)
                        // 2. Check if there is an "acTL" chunk before the IDAT one (61 63 54 4C)
                        // Offset calculated as follows:
                        // - 8 bytes: PNG signature
                        // - 4 (length) + 4 (chunk type) + 13 (chunk data) + 4 (CRC): IHDR chunk
                        _d.sent(); // ignore PNG signature
                        _d.label = 46;
                    case 46: return [4 /*yield*/, readChunkHeader()];
                    case 47:
                        chunk = _d.sent();
                        if (chunk.length < 0) {
                            return [2 /*return*/]; // Invalid chunk length
                        }
                        _b = chunk.type;
                        switch (_b) {
                            case 'IDAT': return [3 /*break*/, 48];
                            case 'acTL': return [3 /*break*/, 49];
                        }
                        return [3 /*break*/, 50];
                    case 48: return [2 /*return*/, {
                            ext: 'png',
                            mime: 'image/png',
                        }];
                    case 49: return [2 /*return*/, {
                            ext: 'apng',
                            mime: 'image/apng',
                        }];
                    case 50: return [4 /*yield*/, tokenizer.ignore(chunk.length + 4)];
                    case 51:
                        _d.sent(); // Ignore chunk-data + CRC
                        _d.label = 52;
                    case 52:
                        if (tokenizer.position + 8 < tokenizer.fileInfo.size) return [3 /*break*/, 46];
                        _d.label = 53;
                    case 53: return [2 /*return*/, {
                            ext: 'png',
                            mime: 'image/png',
                        }];
                    case 54:
                        if (this.check([0x41, 0x52, 0x52, 0x4F, 0x57, 0x31, 0x00, 0x00])) {
                            return [2 /*return*/, {
                                    ext: 'arrow',
                                    mime: 'application/x-apache-arrow',
                                }];
                        }
                        if (this.check([0x67, 0x6C, 0x54, 0x46, 0x02, 0x00, 0x00, 0x00])) {
                            return [2 /*return*/, {
                                    ext: 'glb',
                                    mime: 'model/gltf-binary',
                                }];
                        }
                        // `mov` format variants
                        if (this.check([0x66, 0x72, 0x65, 0x65], { offset: 4 }) // `free`
                            || this.check([0x6D, 0x64, 0x61, 0x74], { offset: 4 }) // `mdat` MJPEG
                            || this.check([0x6D, 0x6F, 0x6F, 0x76], { offset: 4 }) // `moov`
                            || this.check([0x77, 0x69, 0x64, 0x65], { offset: 4 }) // `wide`
                        ) {
                            return [2 /*return*/, {
                                    ext: 'mov',
                                    mime: 'video/quicktime',
                                }];
                        }
                        // -- 9-byte signatures --
                        if (this.check([0x49, 0x49, 0x52, 0x4F, 0x08, 0x00, 0x00, 0x00, 0x18])) {
                            return [2 /*return*/, {
                                    ext: 'orf',
                                    mime: 'image/x-olympus-orf',
                                }];
                        }
                        if (this.checkString('gimp xcf ')) {
                            return [2 /*return*/, {
                                    ext: 'xcf',
                                    mime: 'image/x-xcf',
                                }];
                        }
                        // -- 12-byte signatures --
                        if (this.check([0x49, 0x49, 0x55, 0x00, 0x18, 0x00, 0x00, 0x00, 0x88, 0xE7, 0x74, 0xD8])) {
                            return [2 /*return*/, {
                                    ext: 'rw2',
                                    mime: 'image/x-panasonic-rw2',
                                }];
                        }
                        if (!this.check([0x30, 0x26, 0xB2, 0x75, 0x8E, 0x66, 0xCF, 0x11, 0xA6, 0xD9])) return [3 /*break*/, 62];
                        return [4 /*yield*/, tokenizer.ignore(30)];
                    case 55:
                        _d.sent();
                        _d.label = 56;
                    case 56:
                        if (!(tokenizer.position + 24 < tokenizer.fileInfo.size)) return [3 /*break*/, 61];
                        return [4 /*yield*/, readHeader()];
                    case 57:
                        header = _d.sent();
                        payload = header.size - 24;
                        if (!_check(header.id, [0x91, 0x07, 0xDC, 0xB7, 0xB7, 0xA9, 0xCF, 0x11, 0x8E, 0xE6, 0x00, 0xC0, 0x0C, 0x20, 0x53, 0x65])) return [3 /*break*/, 59];
                        typeId = node_buffer_1.Buffer.alloc(16);
                        _c = payload;
                        return [4 /*yield*/, tokenizer.readBuffer(typeId)];
                    case 58:
                        payload = _c - _d.sent();
                        if (_check(typeId, [0x40, 0x9E, 0x69, 0xF8, 0x4D, 0x5B, 0xCF, 0x11, 0xA8, 0xFD, 0x00, 0x80, 0x5F, 0x5C, 0x44, 0x2B])) {
                            // Found audio:
                            return [2 /*return*/, {
                                    ext: 'asf',
                                    mime: 'audio/x-ms-asf',
                                }];
                        }
                        if (_check(typeId, [0xC0, 0xEF, 0x19, 0xBC, 0x4D, 0x5B, 0xCF, 0x11, 0xA8, 0xFD, 0x00, 0x80, 0x5F, 0x5C, 0x44, 0x2B])) {
                            // Found video:
                            return [2 /*return*/, {
                                    ext: 'asf',
                                    mime: 'video/x-ms-asf',
                                }];
                        }
                        return [3 /*break*/, 61];
                    case 59: return [4 /*yield*/, tokenizer.ignore(payload)];
                    case 60:
                        _d.sent();
                        return [3 /*break*/, 56];
                    case 61: 
                    // Default to ASF generic extension
                    return [2 /*return*/, {
                            ext: 'asf',
                            mime: 'application/vnd.ms-asf',
                        }];
                    case 62:
                        if (this.check([0xAB, 0x4B, 0x54, 0x58, 0x20, 0x31, 0x31, 0xBB, 0x0D, 0x0A, 0x1A, 0x0A])) {
                            return [2 /*return*/, {
                                    ext: 'ktx',
                                    mime: 'image/ktx',
                                }];
                        }
                        if ((this.check([0x7E, 0x10, 0x04]) || this.check([0x7E, 0x18, 0x04])) && this.check([0x30, 0x4D, 0x49, 0x45], { offset: 4 })) {
                            return [2 /*return*/, {
                                    ext: 'mie',
                                    mime: 'application/x-mie',
                                }];
                        }
                        if (this.check([0x27, 0x0A, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], { offset: 2 })) {
                            return [2 /*return*/, {
                                    ext: 'shp',
                                    mime: 'application/x-esri-shape',
                                }];
                        }
                        if (!this.check([0x00, 0x00, 0x00, 0x0C, 0x6A, 0x50, 0x20, 0x20, 0x0D, 0x0A, 0x87, 0x0A])) return [3 /*break*/, 65];
                        // JPEG-2000 family
                        return [4 /*yield*/, tokenizer.ignore(20)];
                    case 63:
                        // JPEG-2000 family
                        _d.sent();
                        return [4 /*yield*/, tokenizer.readToken(new Token.StringType(4, 'ascii'))];
                    case 64:
                        type = _d.sent();
                        switch (type) {
                            case 'jp2 ':
                                return [2 /*return*/, {
                                        ext: 'jp2',
                                        mime: 'image/jp2',
                                    }];
                            case 'jpx ':
                                return [2 /*return*/, {
                                        ext: 'jpx',
                                        mime: 'image/jpx',
                                    }];
                            case 'jpm ':
                                return [2 /*return*/, {
                                        ext: 'jpm',
                                        mime: 'image/jpm',
                                    }];
                            case 'mjp2':
                                return [2 /*return*/, {
                                        ext: 'mj2',
                                        mime: 'image/mj2',
                                    }];
                            default:
                                return [2 /*return*/];
                        }
                        _d.label = 65;
                    case 65:
                        if (this.check([0xFF, 0x0A])
                            || this.check([0x00, 0x00, 0x00, 0x0C, 0x4A, 0x58, 0x4C, 0x20, 0x0D, 0x0A, 0x87, 0x0A])) {
                            return [2 /*return*/, {
                                    ext: 'jxl',
                                    mime: 'image/jxl',
                                }];
                        }
                        if (this.check([0xFE, 0xFF])) { // UTF-16-BOM-LE
                            if (this.check([0, 60, 0, 63, 0, 120, 0, 109, 0, 108], { offset: 2 })) {
                                return [2 /*return*/, {
                                        ext: 'xml',
                                        mime: 'application/xml',
                                    }];
                            }
                            return [2 /*return*/, undefined]; // Some unknown text based format
                        }
                        // -- Unsafe signatures --
                        if (this.check([0x0, 0x0, 0x1, 0xBA])
                            || this.check([0x0, 0x0, 0x1, 0xB3])) {
                            return [2 /*return*/, {
                                    ext: 'mpg',
                                    mime: 'video/mpeg',
                                }];
                        }
                        if (this.check([0x00, 0x01, 0x00, 0x00, 0x00])) {
                            return [2 /*return*/, {
                                    ext: 'ttf',
                                    mime: 'font/ttf',
                                }];
                        }
                        if (this.check([0x00, 0x00, 0x01, 0x00])) {
                            return [2 /*return*/, {
                                    ext: 'ico',
                                    mime: 'image/x-icon',
                                }];
                        }
                        if (this.check([0x00, 0x00, 0x02, 0x00])) {
                            return [2 /*return*/, {
                                    ext: 'cur',
                                    mime: 'image/x-icon',
                                }];
                        }
                        if (this.check([0xD0, 0xCF, 0x11, 0xE0, 0xA1, 0xB1, 0x1A, 0xE1])) {
                            // Detected Microsoft Compound File Binary File (MS-CFB) Format.
                            return [2 /*return*/, {
                                    ext: 'cfb',
                                    mime: 'application/x-cfb',
                                }];
                        }
                        // Increase sample size from 12 to 256.
                        return [4 /*yield*/, tokenizer.peekBuffer(this.buffer, { length: Math.min(256, tokenizer.fileInfo.size), mayBeLess: true })];
                    case 66:
                        // Increase sample size from 12 to 256.
                        _d.sent();
                        // -- 15-byte signatures --
                        if (this.checkString('BEGIN:')) {
                            if (this.checkString('VCARD', { offset: 6 })) {
                                return [2 /*return*/, {
                                        ext: 'vcf',
                                        mime: 'text/vcard',
                                    }];
                            }
                            if (this.checkString('VCALENDAR', { offset: 6 })) {
                                return [2 /*return*/, {
                                        ext: 'ics',
                                        mime: 'text/calendar',
                                    }];
                            }
                        }
                        // `raf` is here just to keep all the raw image detectors together.
                        if (this.checkString('FUJIFILMCCD-RAW')) {
                            return [2 /*return*/, {
                                    ext: 'raf',
                                    mime: 'image/x-fujifilm-raf',
                                }];
                        }
                        if (this.checkString('Extended Module:')) {
                            return [2 /*return*/, {
                                    ext: 'xm',
                                    mime: 'audio/x-xm',
                                }];
                        }
                        if (this.checkString('Creative Voice File')) {
                            return [2 /*return*/, {
                                    ext: 'voc',
                                    mime: 'audio/x-voc',
                                }];
                        }
                        if (this.check([0x04, 0x00, 0x00, 0x00]) && this.buffer.length >= 16) { // Rough & quick check Pickle/ASAR
                            jsonSize = this.buffer.readUInt32LE(12);
                            if (jsonSize > 12 && this.buffer.length >= jsonSize + 16) {
                                try {
                                    header = this.buffer.slice(16, jsonSize + 16).toString();
                                    json = JSON.parse(header);
                                    // Check if Pickle is ASAR
                                    if (json.files) { // Final check, assuring Pickle/ASAR format
                                        return [2 /*return*/, {
                                                ext: 'asar',
                                                mime: 'application/x-asar',
                                            }];
                                    }
                                }
                                catch (_e) { }
                            }
                        }
                        if (this.check([0x06, 0x0E, 0x2B, 0x34, 0x02, 0x05, 0x01, 0x01, 0x0D, 0x01, 0x02, 0x01, 0x01, 0x02])) {
                            return [2 /*return*/, {
                                    ext: 'mxf',
                                    mime: 'application/mxf',
                                }];
                        }
                        if (this.checkString('SCRM', { offset: 44 })) {
                            return [2 /*return*/, {
                                    ext: 's3m',
                                    mime: 'audio/x-s3m',
                                }];
                        }
                        // Raw MPEG-2 transport stream (188-byte packets)
                        if (this.check([0x47]) && this.check([0x47], { offset: 188 })) {
                            return [2 /*return*/, {
                                    ext: 'mts',
                                    mime: 'video/mp2t',
                                }];
                        }
                        // Blu-ray Disc Audio-Video (BDAV) MPEG-2 transport stream has 4-byte TP_extra_header before each 188-byte packet
                        if (this.check([0x47], { offset: 4 }) && this.check([0x47], { offset: 196 })) {
                            return [2 /*return*/, {
                                    ext: 'mts',
                                    mime: 'video/mp2t',
                                }];
                        }
                        if (this.check([0x42, 0x4F, 0x4F, 0x4B, 0x4D, 0x4F, 0x42, 0x49], { offset: 60 })) {
                            return [2 /*return*/, {
                                    ext: 'mobi',
                                    mime: 'application/x-mobipocket-ebook',
                                }];
                        }
                        if (this.check([0x44, 0x49, 0x43, 0x4D], { offset: 128 })) {
                            return [2 /*return*/, {
                                    ext: 'dcm',
                                    mime: 'application/dicom',
                                }];
                        }
                        if (this.check([0x4C, 0x00, 0x00, 0x00, 0x01, 0x14, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x46])) {
                            return [2 /*return*/, {
                                    ext: 'lnk',
                                    mime: 'application/x.ms.shortcut', // Invented by us
                                }];
                        }
                        if (this.check([0x62, 0x6F, 0x6F, 0x6B, 0x00, 0x00, 0x00, 0x00, 0x6D, 0x61, 0x72, 0x6B, 0x00, 0x00, 0x00, 0x00])) {
                            return [2 /*return*/, {
                                    ext: 'alias',
                                    mime: 'application/x.apple.alias', // Invented by us
                                }];
                        }
                        if (this.check([0x4C, 0x50], { offset: 34 })
                            && (this.check([0x00, 0x00, 0x01], { offset: 8 })
                                || this.check([0x01, 0x00, 0x02], { offset: 8 })
                                || this.check([0x02, 0x00, 0x02], { offset: 8 }))) {
                            return [2 /*return*/, {
                                    ext: 'eot',
                                    mime: 'application/vnd.ms-fontobject',
                                }];
                        }
                        if (this.check([0x06, 0x06, 0xED, 0xF5, 0xD8, 0x1D, 0x46, 0xE5, 0xBD, 0x31, 0xEF, 0xE7, 0xFE, 0x74, 0xB7, 0x1D])) {
                            return [2 /*return*/, {
                                    ext: 'indd',
                                    mime: 'application/x-indesign',
                                }];
                        }
                        // Increase sample size from 256 to 512
                        return [4 /*yield*/, tokenizer.peekBuffer(this.buffer, { length: Math.min(512, tokenizer.fileInfo.size), mayBeLess: true })];
                    case 67:
                        // Increase sample size from 256 to 512
                        _d.sent();
                        // Requires a buffer size of 512 bytes
                        if ((0, util_js_1.tarHeaderChecksumMatches)(this.buffer)) {
                            return [2 /*return*/, {
                                    ext: 'tar',
                                    mime: 'application/x-tar',
                                }];
                        }
                        if (this.check([0xFF, 0xFE])) { // UTF-16-BOM-BE
                            if (this.check([60, 0, 63, 0, 120, 0, 109, 0, 108, 0], { offset: 2 })) {
                                return [2 /*return*/, {
                                        ext: 'xml',
                                        mime: 'application/xml',
                                    }];
                            }
                            if (this.check([0xFF, 0x0E, 0x53, 0x00, 0x6B, 0x00, 0x65, 0x00, 0x74, 0x00, 0x63, 0x00, 0x68, 0x00, 0x55, 0x00, 0x70, 0x00, 0x20, 0x00, 0x4D, 0x00, 0x6F, 0x00, 0x64, 0x00, 0x65, 0x00, 0x6C, 0x00], { offset: 2 })) {
                                return [2 /*return*/, {
                                        ext: 'skp',
                                        mime: 'application/vnd.sketchup.skp',
                                    }];
                            }
                            return [2 /*return*/, undefined]; // Some text based format
                        }
                        if (this.checkString('-----BEGIN PGP MESSAGE-----')) {
                            return [2 /*return*/, {
                                    ext: 'pgp',
                                    mime: 'application/pgp-encrypted',
                                }];
                        }
                        // Check MPEG 1 or 2 Layer 3 header, or 'layer 0' for ADTS (MPEG sync-word 0xFFE)
                        if (this.buffer.length >= 2 && this.check([0xFF, 0xE0], { offset: 0, mask: [0xFF, 0xE0] })) {
                            if (this.check([0x10], { offset: 1, mask: [0x16] })) {
                                // Check for (ADTS) MPEG-2
                                if (this.check([0x08], { offset: 1, mask: [0x08] })) {
                                    return [2 /*return*/, {
                                            ext: 'aac',
                                            mime: 'audio/aac',
                                        }];
                                }
                                // Must be (ADTS) MPEG-4
                                return [2 /*return*/, {
                                        ext: 'aac',
                                        mime: 'audio/aac',
                                    }];
                            }
                            // MPEG 1 or 2 Layer 3 header
                            // Check for MPEG layer 3
                            if (this.check([0x02], { offset: 1, mask: [0x06] })) {
                                return [2 /*return*/, {
                                        ext: 'mp3',
                                        mime: 'audio/mpeg',
                                    }];
                            }
                            // Check for MPEG layer 2
                            if (this.check([0x04], { offset: 1, mask: [0x06] })) {
                                return [2 /*return*/, {
                                        ext: 'mp2',
                                        mime: 'audio/mpeg',
                                    }];
                            }
                            // Check for MPEG layer 1
                            if (this.check([0x06], { offset: 1, mask: [0x06] })) {
                                return [2 /*return*/, {
                                        ext: 'mp1',
                                        mime: 'audio/mpeg',
                                    }];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FileTypeParser.prototype.readTiffTag = function (bigEndian) {
        return __awaiter(this, void 0, void 0, function () {
            var tagId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tokenizer.readToken(bigEndian ? Token.UINT16_BE : Token.UINT16_LE)];
                    case 1:
                        tagId = _a.sent();
                        this.tokenizer.ignore(10);
                        switch (tagId) {
                            case 50341:
                                return [2 /*return*/, {
                                        ext: 'arw',
                                        mime: 'image/x-sony-arw',
                                    }];
                            case 50706:
                                return [2 /*return*/, {
                                        ext: 'dng',
                                        mime: 'image/x-adobe-dng',
                                    }];
                            default:
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FileTypeParser.prototype.readTiffIFD = function (bigEndian) {
        return __awaiter(this, void 0, void 0, function () {
            var numberOfTags, n, fileType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tokenizer.readToken(bigEndian ? Token.UINT16_BE : Token.UINT16_LE)];
                    case 1:
                        numberOfTags = _a.sent();
                        n = 0;
                        _a.label = 2;
                    case 2:
                        if (!(n < numberOfTags)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.readTiffTag(bigEndian)];
                    case 3:
                        fileType = _a.sent();
                        if (fileType) {
                            return [2 /*return*/, fileType];
                        }
                        _a.label = 4;
                    case 4:
                        ++n;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FileTypeParser.prototype.readTiffHeader = function (bigEndian) {
        return __awaiter(this, void 0, void 0, function () {
            var version, ifdOffset, fileType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        version = (bigEndian ? Token.UINT16_BE : Token.UINT16_LE).get(this.buffer, 2);
                        ifdOffset = (bigEndian ? Token.UINT32_BE : Token.UINT32_LE).get(this.buffer, 4);
                        if (!(version === 42)) return [3 /*break*/, 3];
                        // TIFF file header
                        if (ifdOffset >= 6) {
                            if (this.checkString('CR', { offset: 8 })) {
                                return [2 /*return*/, {
                                        ext: 'cr2',
                                        mime: 'image/x-canon-cr2',
                                    }];
                            }
                            if (ifdOffset >= 8 && (this.check([0x1C, 0x00, 0xFE, 0x00], { offset: 8 }) || this.check([0x1F, 0x00, 0x0B, 0x00], { offset: 8 }))) {
                                return [2 /*return*/, {
                                        ext: 'nef',
                                        mime: 'image/x-nikon-nef',
                                    }];
                            }
                        }
                        return [4 /*yield*/, this.tokenizer.ignore(ifdOffset)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.readTiffIFD(bigEndian)];
                    case 2:
                        fileType = _a.sent();
                        return [2 /*return*/, fileType !== null && fileType !== void 0 ? fileType : {
                                ext: 'tif',
                                mime: 'image/tiff',
                            }];
                    case 3:
                        if (version === 43) { // Big TIFF file header
                            return [2 /*return*/, {
                                    ext: 'tif',
                                    mime: 'image/tiff',
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return FileTypeParser;
}());
function fileTypeStream(readableStream, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.sampleSize, sampleSize = _c === void 0 ? minimumBytes : _c;
    return __awaiter(this, void 0, void 0, function () {
        var stream;
        var _this = this;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('node:stream')); })];
                case 1:
                    stream = (_d.sent()).default;
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            readableStream.on('error', reject);
                            readableStream.once('readable', function () {
                                (function () { return __awaiter(_this, void 0, void 0, function () {
                                    var pass, outputStream, chunk, fileType, error_3, error_4;
                                    var _a, _b;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                _c.trys.push([0, 5, , 6]);
                                                pass = new stream.PassThrough();
                                                outputStream = stream.pipeline ? stream.pipeline(readableStream, pass, function () { }) : readableStream.pipe(pass);
                                                chunk = (_b = (_a = readableStream.read(sampleSize)) !== null && _a !== void 0 ? _a : readableStream.read()) !== null && _b !== void 0 ? _b : node_buffer_1.Buffer.alloc(0);
                                                _c.label = 1;
                                            case 1:
                                                _c.trys.push([1, 3, , 4]);
                                                return [4 /*yield*/, fileTypeFromBuffer(chunk)];
                                            case 2:
                                                fileType = _c.sent();
                                                pass.fileType = fileType;
                                                return [3 /*break*/, 4];
                                            case 3:
                                                error_3 = _c.sent();
                                                if (error_3 instanceof strtok3.EndOfStreamError) {
                                                    pass.fileType = undefined;
                                                }
                                                else {
                                                    reject(error_3);
                                                }
                                                return [3 /*break*/, 4];
                                            case 4:
                                                resolve(outputStream);
                                                return [3 /*break*/, 6];
                                            case 5:
                                                error_4 = _c.sent();
                                                reject(error_4);
                                                return [3 /*break*/, 6];
                                            case 6: return [2 /*return*/];
                                        }
                                    });
                                }); })();
                            });
                        })];
            }
        });
    });
}
exports.fileTypeStream = fileTypeStream;
exports.supportedExtensions = new Set(supported_js_1.extensions);
exports.supportedMimeTypes = new Set(supported_js_1.mimeTypes);
