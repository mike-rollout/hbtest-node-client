/**
 * This file was auto-generated by Fern from our API Definition.
 */
export interface ErrorDetail {
    /** A specific category that contains more specific detail about the error */
    subCategory?: string;
    /** The status code associated with the error detail */
    code?: string;
    /** The name of the field or parameter in which the error was found. */
    in?: string;
    /** Context about the error condition */
    context?: Record<string, string[]>;
    /** A human readable message describing the error along with remediation steps where appropriate */
    message: string;
}
