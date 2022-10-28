import { IonicNativePlugin } from '@ionic-native/core';
interface FontOptions {
    name: string;
    size: number;
    italic: boolean;
    bold: boolean;
    align: 'left' | 'right' | 'center' | 'justified';
    color: string;
}
interface HeaderFooterLabelOptions {
    text: string;
    top: string;
    right: string;
    left: string;
    bottom: string;
    font: FontOptions;
    showPageIndex: boolean;
}
export interface PrintOptions {
    /**
     * The name of the print job and the document
     */
    name?: string;
    /**
     * The number of copies for the print task.
     * Only supported on iOS, Windows
     */
    copies?: number;
    /**
     * Limits the pages to print even the document contains more.
     * To skip the last n pages you can assign a negative value on iOS.
     * Only supported on iOS, Android
     */
    pageCount?: number;
    /**
     * Specifies the duplex mode to use for the print job.
     * Either double-sided on short site (duplex:'short'),
     * double-sided on long site (duplex:'long') or single-sided (duplex:'none').
     */
    duplex?: boolean;
    /**
     * The orientation of the printed content, portrait or landscape
     * Portrait by default.
     */
    orientation?: 'landscape' | 'portrait';
    /**
     * If your application only prints black text, setting this property to true can result in better performance in many cases.
     * False by default.
     */
    monochrome?: boolean;
    /**
     * If your application only prints black text, setting this property to true can result in better performance in many cases.
     * False by default.
     * Only supported on iOS, Windows
     */
    photo?: boolean;
    /**
     * Set to false to disable downscaling the image to fit into the content aread.
     * Only supported on Android
     */
    autoFit?: boolean;
    /**
     * The network URL to the printer.
     * Only supported on iOS
     */
    printer?: string;
    /**
     * Defines the maximum size of the content area.
     * Only supported on iOS
     */
    maxHeight?: string;
    /**
     * Defines the maximum size of the content area.
     * Only supported on iOS
     */
    maxWidth?: string;
    /**
     * Set to false to avoid margins.
     * The margins for each printed page. Each printer might have its own minimum margins depends on media type and paper format.
     */
    margin?: boolean | {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
    };
    ui?: {
        hideNumberOfCopies?: string;
        hidePaperFormat?: string;
        top?: number;
        left?: number;
        height?: number;
        width?: number;
    };
    paper?: {
        width: string;
        height: string;
        name: string;
        length: string;
    };
    font?: FontOptions;
    header?: {
        height: string;
        labels: string[];
        label: HeaderFooterLabelOptions;
    };
    footer?: {
        height: string;
        labels: string[];
        label: HeaderFooterLabelOptions;
    };
}
/**
 * @name Printer
 * @description Prints documents or HTML rendered content
 * @usage
 * ```typescript
 * import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
 *
 * constructor(private printer: Printer) { }
 *
 * ...
 *
 * this.printer.isAvailable().then(onSuccess, onError);
 *
 * let options: PrintOptions = {
 *      name: 'MyDocument',
 *      duplex: true,
 *      orientation: 'landscape',
 *      monochrome: true
 * }
 *
 * this.printer.print(content, options).then(onSuccess, onError);
 * ```
 * @interfaces
 * PrintOptions
 */
export declare class PrinterOriginal extends IonicNativePlugin {
    /**
     * Checks whether the device is capable of printing (uses `check()` internally)
     * @returns {Promise<boolean>}
     */
    isAvailable(): Promise<boolean>;
    /**
     * Checks To check if printing is supported in general
     * @return {Promise<any>} returns a promise that resolve with an object indicating whether printing is available
     */
    check(): Promise<any>;
    /**
     * Displays a system interface allowing the user to select an available printer. To speak with a printer directly you need to know the network address by picking them before via `printer.pick`.
     * @returns {Promise<any>}
     */
    pick(): Promise<any>;
    /**
     * Sends content to the printer.
     * @param content {string | HTMLElement} The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.
     * @param options {PrintOptions} optional. The options to pass to the printer
     * @returns {Promise<any>}
     */
    print(content?: string | HTMLElement, options?: PrintOptions): Promise<any>;
}
export {};

export declare const Printer: PrinterOriginal;