/// <reference types="node" />

declare module 'extract-file-icon' {
    function extractIcon(path: string, size?: number): Buffer;
    export = extractIcon;
} 