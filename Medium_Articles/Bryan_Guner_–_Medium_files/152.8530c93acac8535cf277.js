(window.webpackJsonp = window.webpackJsonp || []).push([
  [152],
  {
    WNtD(e) {
      e.exports = JSON.parse(
        '[{"languages":["typescript","replit-ts"],"name":"jsxSyntaxWorker","version":5},{"languages":["reason"],"name":"prismSyntaxWorker","version":5},{"languages":["haskell","elixir","kotlin","forth","erlang","dart","perl","perl6","ocaml","nim","python","makefile","coffee","d","ejs","elm","fortran","golang","glsl","gitignore","html_ruby","lisp","lua","pascal","prolog","rust","scheme","toml","replit-python","replit-js"],"name":"aceSyntaxWorker","version":5}]'
      );
    },
    lX4r(e, o, t) {
      "use strict";
      t.r(o);
      const r = t("hfKm");
      const n = t.n(r);
      const a = t("2Eek");
      const i = t.n(a);
      const s = t("XoMD");
      const d = t.n(s);
      const c = t("Jo+v");
      const l = t.n(c);
      const m = t("4mXO");
      const g = t.n(m);
      const u = t("pLtp");
      const p = t.n(u);
      const f = t("vYYK");
      const v = t("0iUn");
      const k = t("sLSF");
      const b = t("MI3g");
      const x = t("a7VT");
      const y = t("Tit0");
      const h = t("MX0m");
      const w = t.n(h);
      const C = t("q1tI");
      const j = t("wsa1");
      const L = t("PGsk");
      const O = t("0VEe");
      const A = t("cR/2");
      const E = t("XXOK");
      const M = t.n(E);
      const N = t("yz3v");
      const S = t("WNtD");

      const D = function e(o) {
        const t = this;
        Object(v.a)(this, e),
          Object(f.a)(this, "editor", void 0),
          Object(f.a)(this, "disposables", void 0),
          Object(f.a)(this, "modeWorkers", void 0),
          Object(f.a)(this, "lastDecorations", void 0),
          Object(f.a)(this, "dispose", () => {
            t.modeWorkers.forEach(e => {
              e.worker &&
                ((e.worker.onmessage = null),
                (e.worker.onerror = null),
                e.worker.terminate(),
                (e.worker = null));
            }),
              t.disposables.forEach(e => {
                e.dispose();
              });
          }),
          Object(f.a)(this, "updateDecorations", e => {
            const o = e.map(e => {
              return {
                range: new j.Range(e.startLine, e.start, e.endLine, e.end),
                options: { inlineClassName: e.kind },
              };
            });
            t.lastDecorations = t.editor.deltaDecorations(
              t.lastDecorations || [],
              o
            );
          }),
          Object(f.a)(this, "registerModeWorker", e => {
            (e.worker = e.Ctor()),
              e.worker.postMessage({ init: !0, aceVersion: N.version }),
              (e.worker.onmessage = ({data}) => {
                const o = data.classifications;
                window.requestAnimationFrame(() => {
                  t.updateDecorations(o);
                });
              });
          }),
          Object(f.a)(this, "triggerHighlight", e => {
            const o = t.editor;
            const r = t.modeWorkers;
            if (!o)
              throw new Error("No editor setup for syntax highlighting");
            const n = o.getModel();
            if (n) {
              const a = n.getModeId();
              const i = n.uri.toString();
              let s = !0;
              let d = !1;
              let c = void 0;
              try {
                for (var l, m = M()(r); !(s = (l = m.next()).done); s = !0) {
                  const g = l.value;
                  if (g.languages.includes(a.replace(/-v\d+$/, ""))) {
                    let u = g.worker;
                    u || (t.registerModeWorker(g), (u = g.worker));

                    const p = o.getVisibleRanges().reduce(
                        (e, {startLineNumber, endLineNumber}) => {
                          return e.startLineNumber > startLineNumber &&
                            (e.startLineNumber = startLineNumber),
                          e.endLineNumber < endLineNumber &&
                            (e.endLineNumber = endLineNumber),
                          e
                        ;
                        },
                        { startLineNumber: 1, endLineNumber: 1 }
                      );

                    let f = null;
                    e &&
                      "changes" in e &&
                      (f = e.changes.reduce((e, {range}) => {
                        const t = range;
                        return null == e || e >= t.startLineNumber
                          ? t.startLineNumber - 1
                          : e;
                      }, null)),
                      u.postMessage({
                        code: o.getValue(),
                        visibleRange: [
                          Math.max(p.startLineNumber - 10, 0),
                          p.endLineNumber + 10,
                        ],
                        mode: a,
                        changeStartRow: f,
                        documentId: i,
                      });
                    break;
                  }
                }
              } catch (v) {
                (d = !0), (c = v);
              } finally {
                try {
                  s || null == m.return || m.return();
                } finally {
                  if (d) throw c;
                }
              }
            }
          }),
          (this.editor = o),
          (this.lastDecorations = []),
          (this.disposables = []),
          (this.modeWorkers = S.map(({languages, name, version}) => {
          const o = languages;
          const t = name;
          const r = version;
          return {
            languages: o,
            Ctor() {
              return new window.Worker(
                "/public/".concat(t).concat(r, ".js")
              );
            },
            worker: null,
          };
        })),
          this.disposables.push(
            o.onDidChangeModelContent(this.triggerHighlight)
          ),
          this.disposables.push(o.onDidChangeModel(this.triggerHighlight)),
          this.disposables.push(o.onDidScrollChange(this.triggerHighlight)),
          window.requestAnimationFrame(() => {
            return t.triggerHighlight();
          });
      };

      const I = t("IjuC");
      const R = t("RNdq");

      const T = {
        scrollBeyondLastLine: !0,
        acceptSuggestionOnCommitCharacter: !1,
        autoIndent: !0,
        codeLens: !1,
        multiCursorModifier: "ctrlCmd",
        minimap: { enabled: !1 },
        renderIndentGuides: !0,
        useTabStops: !0,
        renderLineHighlight: "all",
        hideCursorInOverviewRuler: !0,
        wrappingIndent: "same",
        fixedOverflowWidgets: !0,
        links: !1,
      };

      const K = t("uLgn");
      t.d(o, "default", () => {
        return H;
      });
      const P = C.createElement;
      function W(e, o) {
        const t = p()(e);
        if (g.a) {
          let r = g()(e);
          o &&
            (r = r.filter(o => {
              return l()(e, o).enumerable;
            })),
            t.push(...r);
        }
        return t;
      }
      Object(R.b)(j), Object(R.a)(j), (() => {
        const e = [
          { token: "string.escape", foreground: "ff69b4" },
          { token: "regexp.escape", foreground: "ff69b4" },
          { token: "constant.escape", foreground: "ff69b4" },
          { token: "primitive", foreground: "4864aa" },
          { token: "builtin", foreground: "4864aa" },
        ];
        j.editor.defineTheme("replit-light", {
          base: "vs",
          inherit: !0,
          rules: [
            { token: "attribute.name.html", foreground: "984e9c" },
            { token: "attribute.value.html", foreground: "ac9037" },
            { token: "delimiter.html", foreground: "1F217D" },
            { token: "tag.html", foreground: "4d7fe2" },
            { token: "metatag.content.html", foreground: "3953A4" },
            {
              token: "comment.content",
              foreground: "AAAAAA",
              fontStyle: "italic",
            },
            { token: "comment", foreground: "AAAAAA" },
            { token: "predefined", foreground: "000080" },
            { token: "namespace", foreground: "000080" },
            { token: "constructor", foreground: "7b2cb3" },
            { token: "function", foreground: "7b2cb3" },
          ].concat(e),
          colors: { "editor.lineHighlightBackground": "#f5f5f5" },
        }),
          j.editor.defineTheme("replit-dark", {
            base: "vs-dark",
            inherit: !0,
            rules: [
              { token: "predefined", foreground: "9932CC" },
              { token: "namespace", foreground: "B0C4DE" },
              { token: "constructor", foreground: "EEE8AA" },
              { token: "function", foreground: "dcdcaa" },
            ].concat(e),
            colors: {
              "editor.lineHighlightBackground": "#282828",
              "editor.background": A.a.replitDark.editor.background,
            },
          });
      })(), j.languages.register({
        id: "reason",
        extensions: [".re", ".rei"],
        aliases: ["Reason", "reasonml"],
        mimetypes: ["text/x-reason"],
      }), j.languages.register({
        id: "haskell",
        extensions: [".hs", ".lhs"],
        aliases: ["Haskell"],
        mimetypes: ["text/x-haskell"],
      }), j.languages.register({
        id: "elixir",
        extensions: [".exs", ".ex"],
        aliases: ["Elixir"],
        mimetypes: ["text/x-elixir"],
      }), j.languages.register({
        id: "dart",
        extensions: [".dart"],
        aliases: ["Dart"],
        mimetypes: ["text/x-dart"],
      }), j.languages.register({
        id: "perl6",
        extensions: [
          ".p6",
          ".pl6",
          ".pm6",
          ".pod6",
          ".t6",
          ".raku",
          ".rakumod",
          ".rakutest",
        ],
        aliases: ["Perl 6", "perl 6", "Raku", "raku"],
        mimetypes: ["text/x-perl6"],
      }), j.languages.register({
        id: "kotlin",
        extensions: [".kt", ".kts"],
        aliases: ["Kotlin"],
        mimetypes: ["text/x-kotlin"],
      }), j.languages.register({
        id: "ocaml",
        extensions: [".ml", ".mli"],
        aliases: ["OCaml"],
        mimetypes: ["text/x-ocaml"],
      }), j.languages.register({
        id: "erlang",
        extensions: [".erl", ".hrl"],
        aliases: ["Erlang"],
        mimetypes: ["text/x-erlang"],
      }), j.languages.register({
        id: "nim",
        extensions: [".nim"],
        aliases: ["Nim"],
        mimetypes: ["text/x-nim"],
      }), j.languages.register({
        id: "forth",
        extensions: [".fth"],
        aliases: ["Forth"],
        mimetypes: ["text/x-forth"],
      }), j.languages.register({
        id: "d",
        extensions: [".d"],
        aliases: ["D", "d-lang", "dlang"],
        mimetypes: ["text/x-d"],
      }), j.languages.register({
        id: "ejs",
        extensions: [".ejs"],
        aliases: ["EJS", "ejs"],
        mimetypes: ["text/x-ejs"],
      }), j.languages.register({
        id: "elm",
        extensions: [".elm"],
        aliases: ["Elm"],
        mimetypes: ["text/x-elm"],
      }), j.languages.register({
        id: "fortran",
        extensions: [".f", ".for", ".f90"],
        aliases: ["Fortran"],
        mimetypes: ["text/x-fortran"],
      }), j.languages.register({
        id: "glsl",
        extensions: [
          ".vert",
          ".tesc",
          ".tese",
          ".geom",
          ".frag",
          ".comp",
          ".glsl",
          ".glslv",
          ".glslf",
          ".glslg",
        ],
        aliases: ["GLSL"],
        mimetypes: ["text/x-glsl"],
      }), j.languages.register({
        id: "gitignore",
        filenames: [".gitignore"],
        aliases: ["gitignore"],
        mimetypes: ["text/x-gitignore"],
      }), j.languages.register({
        id: "html_ruby",
        extensions: [".erb"],
        aliases: ["erb", "html_ruby"],
        mimetypes: ["text/x-erb"],
      }), j.languages.register({
        id: "lisp",
        extensions: [".lisp", ".lsp", ".l", ".fasl"],
        aliases: ["Lisp", "CLisp", "Common Lisp"],
        mimetypes: ["text/x-lisp"],
      }), j.languages.register({
        id: "prolog",
        extensions: [".pro", ".plg"],
        aliases: ["Prolog"],
        mimetypes: ["text/x-prolog"],
      }), j.languages.register({
        id: "toml",
        extensions: [".toml"],
        filenames: [".replit"],
        aliases: ["TOML"],
        mimetypes: ["text/x-toml"],
      }), j.languages.register({
        id: "elisp",
        extensions: [".el"],
        aliases: ["Elisp", "Emacs Lisp"],
        mimetypes: ["text/x-elisp"],
      }), j.languages.register({
        id: "coffee",
        extensions: [".coffee", ".litcoffee"],
        aliases: ["CoffeeScript", "coffeescript", "coffee"],
        mimetypes: ["text/x-coffeescript", "text/coffeescript"],
      }), j.languages.register({
        id: "makefile",
        filenames: ["Makefile", "makefile", "GNUmakefile"],
        aliases: ["Makefile"],
      }), (() => {
        j.languages.register({
          id: "replit-ts",
          extensions: [".ts", ".tsx"],
          aliases: ["TypeScript", "ts", "typescript"],
          mimetypes: ["text/typescript"],
        }),
          t
            .e(31)
            .then(t.bind(null, "87dK"))
            .then(({language, conf}) => {
              j.languages.setMonarchTokensProvider("replit-ts", language),
                j.languages.setLanguageConfiguration("replit-ts", conf);
            });
        const e = {
          reactNamespace: "React",
          jsx: j.languages.typescript.JsxEmit.React,
          target: j.languages.typescript.ScriptTarget.ES2016,
          allowNonTsExtensions: !0,
          moduleResolution:
            j.languages.typescript.ModuleResolutionKind.NodeJs,
          experimentalDecorators: !0,
          noEmit: !0,
          allowJs: !0,
          typeRoots: ["node_modules/@types"],
        };
        j.languages.typescript.typescriptDefaults.setCompilerOptions(e),
          j.languages.typescript.javascriptDefaults.setCompilerOptions(e),
          j.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: !0,
            noSyntaxValidation: !0,
          });
      })(), j.languages.register({
        id: "replit-python-v".concat(K["replit-python"]),
        extensions: [".py", ".rpy", ".pyw", ".cpy", ".gyp", ".gypi"],
        aliases: ["Python", "py"],
        firstLine: "^#!/.*\\bpython[0-9.-]*\\b",
      }), j.languages.register({
        id: "replit-js-v".concat(K["replit-js"]),
        extensions: [".js", ".es6", ".jsx", ".jsm", ".mjs"],
        firstLine: "^#!.*\\bnode",
        filenames: ["jakefile"],
        aliases: ["JavaScript", "javascript", "js"],
      }), j.languages.register({
        id: "basic-v".concat(K.basic),
        extensions: [".bas"],
        aliases: ["pg-basic", "basic", "pg basic"],
        mimetypes: ["text/x-basic"],
      }), j.languages.setLanguageConfiguration(
        "replit-python-v".concat(K["replit-python"]),
        {
          comments: { lineComment: "#", blockComment: ["'''", "'''"] },
          brackets: [
            ["{", "}"],
            ["[", "]"],
            ["(", ")"],
          ],
          autoClosingPairs: [
            { open: "{", close: "}" },
            { open: "[", close: "]" },
            { open: "(", close: ")" },
            { open: '"', close: '"', notIn: ["string"] },
            { open: "'", close: "'", notIn: ["string", "comment"] },
          ],
          surroundingPairs: [
            { open: "{", close: "}" },
            { open: "[", close: "]" },
            { open: "(", close: ")" },
            { open: '"', close: '"' },
            { open: "'", close: "'" },
          ],
          onEnterRules: [
            {
              beforeText: new RegExp(
                "^\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async).*?:\\s*$"
              ),
              action: { indentAction: j.languages.IndentAction.Indent },
            },
          ],
          folding: { offSide: !0 },
        }
      ), j.languages.setLanguageConfiguration(
        "replit-js-v".concat(K["replit-js"]),
        {
          wordPattern: /(-?\d*\.\d\w*)|([^`~!@#%^&*()\-=+[{\]}\\|;:'",.<>/?\s]+)/g,
          comments: { lineComment: "//", blockComment: ["/*", "*/"] },
          brackets: [
            ["{", "}"],
            ["[", "]"],
            ["(", ")"],
          ],
          onEnterRules: [
            {
              beforeText: /^\s*\/\*\*(?!\/)([^*]|\*(?!\/))*$/,
              afterText: /^\s*\*\/$/,
              action: {
                indentAction: j.languages.IndentAction.IndentOutdent,
                appendText: " * ",
              },
            },
            {
              beforeText: /^\s*\/\*\*(?!\/)([^*]|\*(?!\/))*$/,
              action: {
                indentAction: j.languages.IndentAction.None,
                appendText: " * ",
              },
            },
            {
              beforeText: /^(\t| {2})* \*( ([^*]|\*(?!\/))*)?$/,
              action: {
                indentAction: j.languages.IndentAction.None,
                appendText: "* ",
              },
            },
            {
              beforeText: /^(\t| {2})* \*\/\s*$/,
              action: {
                indentAction: j.languages.IndentAction.None,
                removeText: 1,
              },
            },
          ],
          autoClosingPairs: [
            { open: "{", close: "}" },
            { open: "[", close: "]" },
            { open: "(", close: ")" },
            { open: '"', close: '"', notIn: ["string"] },
            { open: "'", close: "'", notIn: ["string", "comment"] },
            { open: "`", close: "`", notIn: ["string", "comment"] },
            { open: "/**", close: " */", notIn: ["string"] },
          ],
          folding: {
            markers: {
              start: new RegExp("^\\s*//\\s*#?region\\b"),
              end: new RegExp("^\\s*//\\s*#?endregion\\b"),
            },
          },
        }
      );
      var H = (e => {
        function o(...args) {
          let e;
          let t;
          Object(v.a)(this, o);
          for (var r = args.length, a = new Array(r), s = 0; s < r; s++)
            a[s] = args[s];
          return ((t = Object(b.a)(
            this,
            (e = Object(x.a)(o)).call.apply(e, [this].concat(a))
          )).createAnnotation = () => {
            const e = t.editor.getSelection();
            const o = t.editor.getModel();
            const r = { lineNumber: e.startLineNumber, column: e.startColumn };
            const n = { lineNumber: e.endLineNumber, column: e.endColumn };
            const a = o.getOffsetAt(r);
            const i = o.getOffsetAt(n);
            t.props.createAnnotation({ indexStart: a, indexEnd: i });
          }),
          (t.createEditor = e => {
            e &&
              e !== t.containerRef &&
              ((t.containerRef = e),
              (O.a.prototype.openCodeEditor = e => {
                return j.Promise.wrap(t.props.openEditor(e));
              }),
              (t.editor = j.editor.create(
                e,
                (function (e) {
                  for (let o = 1; o < arguments.length; o++) {
                    const t = null != arguments[o] ? arguments[o] : {};
                    o % 2
                      ? W(Object(t), !0).forEach(o => {
                          Object(f.a)(e, o, t[o]);
                        })
                      : d.a
                      ? i()(e, d()(t))
                      : W(Object(t)).forEach(o => {
                          n()(e, o, l()(t, o));
                        });
                  }
                  return e;
                })({}, T),
                {
                  textModelService: {
                    createModelReference(e) {
                      const o = t.props.getModelFromUri(e).then(({model, shouldDispose}) => {
                        const o = model;
                        const t = shouldDispose;
                        return {
                          object: o ? new L.f(o) : null,
                          dispose() {
                            t && !o.isDisposed() && o.dispose();
                          },
                        };
                      });
                      return j.Promise.wrap(o);
                    },
                    registerTextModelContentProvider() {
                      return { dispose() {} };
                    },
                  },
                }
              )),
              t.props.registerEditor(t.editor),
              (t.syntaxHighlighter = new D(t.editor)),
              t.editor.addAction({
                id: "shell",
                label: "Open Shell",
                keybindings: [
                  j.KeyMod.CtrlCmd | j.KeyMod.Shift | j.KeyCode.C,
                ],
                run() {
                  return t.props.openShell();
                },
              }),
              t.editor.addAction({
                id: "copy link",
                label: "Copy Link To Line",
                contextMenuGroupId: "9_cutcopypaste",
                contextMenuOrder: 3,
                run() {
                  return Object(I.a)(t.getLinkToLine());
                },
              }),
              window["enable-annotations"] &&
                t.editor.addAction({
                  id: "create-annotation-group",
                  label: "Annotate",
                  contextMenuGroupId: "2_annotation",
                  contextMenuOrder: 1,
                  run() {
                    return t.createAnnotation();
                  },
                }),
              t.editor.addCommand(
                j.KeyMod.CtrlCmd | j.KeyCode.Enter,
                t.props.onRun
              ),
              t.editor.addCommand(
                j.KeyMod.CtrlCmd | j.KeyCode.KEY_S,
                () => {}
              ),
              t.editor.addCommand(
                j.KeyMod.CtrlCmd | j.KeyMod.Shift | j.KeyCode.KEY_P,
                () => {
                  t.editor.getAction("editor.action.quickCommand").run();
                }
              ),
              window["enable-annotations"] &&
                t.editor.addCommand(
                  j.KeyMod.CtrlCmd | j.KeyMod.Shift | j.KeyCode.US_SLASH,
                  () => {
                    t.editor.getAction("create-annotation-group").run();
                  }
                ));
          }),
          t;
        }
        return Object(y.a)(o, e),
        Object(k.a)(o, [
          {
            key: "componentWillUnmount",
            value() {
              this.syntaxHighlighter && this.syntaxHighlighter.dispose(),
                this.editor.setModel(null),
                this.editor.dispose(),
                this.props.registerEditor(null);
            },
          },
          {
            key: "getLinkToLine",
            value() {
              const e = this.editor
                        .getModel()
                        .uri.path.split("/")
                        .slice(4)
                        .join("/");

              const o = this.editor.getPosition();
              const t = o.lineNumber;
              const r = o.column;
              return window.location.href.replace(
                window.location.hash,
                "#".concat(e, ":").concat(t, ":").concat(r)
              );
            },
          },
          {
            key: "render",
            value() {
              return P(
                "div",
                {
                  ref: this.createEditor,
                  className: "jsx-1382733249 replit-monaco-editor-container",
                },
                P(w.a, { id: "58996423" }, [
                  ".replit-monaco-editor-container.jsx-1382733249{position:absolute;left:0;top:0;width:100%;height:100%;max-height:100% !important;max-width:100% !important;margin:0;padding:0;overflow:hidden;background:var(--color-background-1);border-bottom-right-radius:var(--border-radius-1);border-bottom-left-radius:var(--border-radius-1);box-shadow:0px 4px 16px 0px rgba(0,0,0,0.08);}",
                  ".context-view{border-radius:var(--border-radius-1);}",
                  ".context-view .monaco-menu{background-color:var(--color-background-1);box-shadow:var(--shadow-1);border-radius:var(--border-radius-1);font-family:var(--font-family-sans-serif);}",
                  ".context-view .monaco-menu a{color:var(--color-primary-1);}",
                ]),
                P(w.a, { id: "2603151567" }, [
                  ".sidenav-closed .replit-monaco-editor-container{border-bottom-left-radius:0;}",
                  ".cursor-replit{position:relative;background-color:#cceeff;border-left:2px solid #f0f;pointer-events:none;}",
                  ".selection-replit{position:relative;background-color:#f0f;opacity:0.2;pointer-events:none;}",
                  ".cursor-tag-replit::after{content:'Replit';position:relative;bottom:calc(100% - 4px);left:-2px;background-color:#f0f;color:white;z-index:10;padding:1px;border-radius:3px;pointer-events:none;-webkit-animation:fadeOut 2s ease-in forwards;animation:fadeOut 2s ease-in forwards;}",
                  "@-webkit-keyframes fadeOut{0%{opacity:1;}100%{opacity:0;}}",
                  "@keyframes fadeOut{0%{opacity:1;}100%{opacity:0;}}",
                  ".replit-monaco-editor-debugger{background:#cfedf8;}",
                  ".scroll-decoration{display:none !important;}",
                  ".monaco-editor{border-bottom-right-radius:var(--border-radius-1);border-bottom-left-radius:var(--border-radius-1);background-color:var(--color-background-1);}",
                ]),
                P(J, null)
              );
            },
          },
        ]),
        o;
      })(C.Component);
      function J() {
        return P(w.a, { id: "2404695840" }, [
          ".monaco-editor.vs .attr-name,.monaco-editor.vs .attribute-name{color:#984e9c;}",
          ".monaco-editor.vs .attr-value{color:#ac9037;}",
          ".monaco-editor.vs .start-tag-name,.monaco-editor.vs .end-tag-name,.monaco-editor.vs .tag-name,.monaco-editor.vs .tag{color:#4d7fe2;}",
          ".monaco-editor.vs .tag-start,.monaco-editor.vs .tag-end,.monaco-editor.vs .tag-open,.monaco-editor.vs .tag-close,.monaco-editor.vs .end-tag-start,.monaco-editor.vs .end-tag-end{color:#1f217d;}",
          ".monaco-editor.vs .modifier,.monaco-editor.vs .arrow-operator,.monaco-editor.vs .storage.type.arrow-operator,.monaco-editor.vs .as-keyword,.monaco-editor.vs .await-keyword,.monaco-editor.vs .catch-keyword,.monaco-editor.vs .default-keyword,.monaco-editor.vs .else-keyword,.monaco-editor.vs .export-keyword,.monaco-editor.vs .from-keyword,.monaco-editor.vs .if-keyword,.monaco-editor.vs .import-keyword,.monaco-editor.vs .return-keyword,.monaco-editor.vs .private-keyword,.monaco-editor.vs .static-keyword,.monaco-editor.vs .try-keyword{color:#272a9d;}",
          ".monaco-editor.vs .regex,.monaco-editor.vs .regexp,.monaco-editor.vs .string.regexp{color:#227e80;}",
          ".monaco-editor.vs .jsx-exp-start,.monaco-editor.vs .jsx-exp-end{color:#ac9037;}",
          ".monaco-editor.vs .variable{color:#001188;}",
          ".monaco-editor.vs .constructor,.monaco-editor.vs .class-name,.monaco-editor.vs .function,.monaco-editor.vs .function-variable{color:#7b2cb3;}",
          ".monaco-editor.vs .parameter{font-style:italic;}",
          ".monaco-editor.vs .keyword,.monaco-editor.vs .keyword.operator{color:#0000ff;}",
          ".monaco-editor.vs .primitive,.monaco-editor.vs .primitive.storage,.monaco-editor.vs .builtin{color:#4864aa;}",
          ".monaco-editor.vs .string{color:#a31515;}",
          ".monaco-editor.vs .operator{color:#050301;}",
          ".monaco-editor.vs .comment{color:#aaaaaa;}",
          ".monaco-editor.vs .label{color:#ac9037;}",
          ".monaco-editor.vs .storage.type,.monaco-editor.vs .type{color:#008080;}",
          ".monaco-editor.vs .number,.monaco-editor.vs .numeric{color:#09885a;}",
          ".monaco-editor.vs .constant.language,.monaco-editor.vs .constant.other{color:#1a1aff;}",
          ".monaco-editor.vs .constant.escape{color:#ff69b4;}",
          ".monaco-editor.vs-dark .attr-name,.monaco-editor.vs-dark .attribute-name{color:#9cdcfe;}",
          ".monaco-editor.vs-dark .attr-value{color:#ce9178;}",
          ".monaco-editor.vs-dark .start-tag-name,.monaco-editor.vs-dark .end-tag-name,.monaco-editor.vs-dark .tag-name,.monaco-editor.vs-dark .tag{color:#569cd6;}",
          ".monaco-editor.vs-dark .tag-start,.monaco-editor.vs-dark .tag-end,.monaco-editor.vs-dark .tag-open,.monaco-editor.vs-dark .tag-close,.monaco-editor.vs-dark .end-tag-start,.monaco-editor.vs-dark .end-tag-end{color:#808080;}",
          ".monaco-editor.vs-dark .modifier,.monaco-editor.vs-dark .arrow-operator,.monaco-editor.vs-dark .storage.type.arrow-operator,.monaco-editor.vs-dark .as-keyword,.monaco-editor.vs-dark .await-keyword,.monaco-editor.vs-dark .catch-keyword,.monaco-editor.vs-dark .default-keyword,.monaco-editor.vs-dark .else-keyword,.monaco-editor.vs-dark .export-keyword,.monaco-editor.vs-dark .from-keyword,.monaco-editor.vs-dark .if-keyword,.monaco-editor.vs-dark .import-keyword,.monaco-editor.vs-dark .return-keyword,.monaco-editor.vs-dark .private-keyword,.monaco-editor.vs-dark .static-keyword,.monaco-editor.vs-dark .try-keyword{color:#c586c0;}",
          ".monaco-editor.vs-dark .regex,.monaco-editor.vs-dark .regexp,.monaco-editor.vs-dark .string.regexp{color:#d16969;}",
          ".monaco-editor.vs-dark .jsx-exp-start,.monaco-editor.vs-dark .jsx-exp-end{color:#ce9178;}",
          ".monaco-editor.vs-dark .variable{color:#74b0df;}",
          ".monaco-editor.vs-dark .constructor,.monaco-editor.vs-dark .class-name,.monaco-editor.vs-dark .function,.monaco-editor.vs-dark .function-variable{color:#dcdcaa;}",
          ".monaco-editor.vs-dark .parameter{font-style:italic;}",
          ".monaco-editor.vs-dark .keyword,.monaco-editor.vs-dark .keyword.operator{color:#569cd6;}",
          ".monaco-editor.vs-dark .primitive,.monaco-editor.vs-dark .primitive.storage,.monaco-editor.vs-dark .builtin{color:#4864aa;}",
          ".monaco-editor.vs-dark .string{color:#ce9178;}",
          ".monaco-editor.vs-dark .comment{color:#608b4e;}",
          ".monaco-editor.vs-dark .label{color:#ff0000;}",
          ".monaco-editor.vs-dark .storage.type,.monaco-editor.vs-dark .type{color:#3dc9b0;}",
          ".monaco-editor.vs-dark .operator{color:#d4d4d4;}",
          ".monaco-editor.vs-dark .number,.monaco-editor.vs-dark .numeric{color:#b5cea8;}",
          ".monaco-editor.vs-dark .constant.language,.monaco-editor.vs-dark .constant.other{color:#70b6f0;}",
          ".monaco-editor.vs-dark .constant.escape{color:#ff69b4;}",
        ]);
      }
    },
  },
]);
//# sourceMappingURL=152.8530c93acac8535cf277.js.map
