import remark from 'remark';
import remarkLintNoDeadUrls, { Markdown, Options } from 'remark-lint-no-dead-urls';

const processMarkdown = (md: Markdown, opts?: Options) => remark().use(remarkLintNoDeadUrls, opts).process(md);

export default processMarkdown
