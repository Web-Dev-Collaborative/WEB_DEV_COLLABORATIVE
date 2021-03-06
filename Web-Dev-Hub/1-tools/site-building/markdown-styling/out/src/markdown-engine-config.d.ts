export declare type MathRenderingOption = "None" | "KaTeX" | "MathJax";
export interface MarkdownEngineConfig {
    configPath?: string;
    usePandocParser?: boolean;
    breakOnSingleNewLine?: boolean;
    enableTypographer?: boolean;
    enableWikiLinkSyntax?: boolean;
    enableLinkify?: boolean;
    useGitHubStylePipedLink?: boolean;
    wikiLinkFileExtension?: string;
    enableEmojiSyntax?: boolean;
    enableExtendedTableSyntax?: boolean;
    enableCriticMarkupSyntax?: boolean;
    protocolsWhiteList?: string;
    mathRenderingOption?: MathRenderingOption;
    mathInlineDelimiters?: string[][];
    mathBlockDelimiters?: string[][];
    mathRenderingOnlineService?: string;
    codeBlockTheme?: string;
    previewTheme?: string;
    revealjsTheme?: string;
    mermaidTheme?: string;
    frontMatterRenderingOption?: string;
    imageFolderPath?: string;
    printBackground?: boolean;
    chromePath?: string;
    imageMagickPath?: string;
    pandocPath?: string;
    pandocMarkdownFlavor?: string;
    pandocArguments?: string[];
    latexEngine?: string;
    enableScriptExecution?: boolean;
    enableHTML5Embed?: boolean;
    HTML5EmbedUseImageSyntax?: boolean;
    HTML5EmbedUseLinkSyntax?: boolean;
    HTML5EmbedIsAllowedHttp?: boolean;
    HTML5EmbedAudioAttributes?: string;
    HTML5EmbedVideoAttributes?: string;
    puppeteerWaitForTimeout?: number;
    usePuppeteerCore?: boolean;
    puppeteerArgs?: string[];
}
export declare const defaultMarkdownEngineConfig: MarkdownEngineConfig;
