export function stringToBytes(string: any): any[];
/**
Checks whether the TAR checksum is valid.

@param {Buffer} buffer - The TAR header `[offset ... offset + 512]`.
@param {number} offset - TAR header offset.
@returns {boolean} `true` if the TAR checksum is valid, otherwise `false`.
*/
export function tarHeaderChecksumMatches(buffer: Buffer, offset?: number): boolean;
export namespace uint32SyncSafeToken {
    function get(buffer: any, offset: any): number;
    const len: number;
}
//# sourceMappingURL=util.d.ts.map