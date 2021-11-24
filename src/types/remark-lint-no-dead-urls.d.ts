declare module 'remark-lint-no-dead-urls' {
    export interface Options {
        gotOptions?: {
            retry?: number;
        };
    };
    export type Markdown = string;
    export default remarkLintNoDeadUrls;
}
