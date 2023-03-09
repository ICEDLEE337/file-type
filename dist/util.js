"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uint32SyncSafeToken = exports.tarHeaderChecksumMatches = exports.stringToBytes = void 0;
function stringToBytes(string) {
    return __spreadArray([], string, true).map(function (character) { return character.charCodeAt(0); }); // eslint-disable-line unicorn/prefer-code-point
}
exports.stringToBytes = stringToBytes;
/**
Checks whether the TAR checksum is valid.

@param {Buffer} buffer - The TAR header `[offset ... offset + 512]`.
@param {number} offset - TAR header offset.
@returns {boolean} `true` if the TAR checksum is valid, otherwise `false`.
*/
function tarHeaderChecksumMatches(buffer, offset) {
    if (offset === void 0) { offset = 0; }
    var readSum = Number.parseInt(buffer.toString('utf8', 148, 154).replace(/\0.*$/, '').trim(), 8); // Read sum in header
    if (Number.isNaN(readSum)) {
        return false;
    }
    var sum = 8 * 0x20; // Initialize signed bit sum
    for (var index = offset; index < offset + 148; index++) {
        sum += buffer[index];
    }
    for (var index = offset + 156; index < offset + 512; index++) {
        sum += buffer[index];
    }
    return readSum === sum;
}
exports.tarHeaderChecksumMatches = tarHeaderChecksumMatches;
/**
ID3 UINT32 sync-safe tokenizer token.
28 bits (representing up to 256MB) integer, the msb is 0 to avoid "false syncsignals".
*/
exports.uint32SyncSafeToken = {
    get: function (buffer, offset) { return (buffer[offset + 3] & 0x7F) | ((buffer[offset + 2]) << 7) | ((buffer[offset + 1]) << 14) | ((buffer[offset]) << 21); },
    len: 4,
};
