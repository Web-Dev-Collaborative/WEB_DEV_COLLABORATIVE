import React from 'react';
import { Link } from 'react-router-dom';
import { Controlled as CodeMirror } from 'react-codemirror2';
require('codemirror/mode/markdown/markdown');
import { SLIDE_DELIMITER } from '../../util/slides';

class EditView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { syncSlideIndex: true };

    this.handleFilePick = this.handleFilePick.bind(this);
    this.handleFileDrop = this.handleFileDrop.bind(this);
    this.handleSyncSlideIndexChange = this.handleSyncSlideIndexChange.bind(this);
    this.handleCursorActivity = this.handleCursorActivity.bind(this);
  }

  componentDidMount() {
    this.refs.filepicker.addEventListener('change', this.handleFilePick);
    // document.body.addEventListener('drop', this.handleFileDrop);
    this.syncCursorToSlideIndex(this.props);
  }

  componentWillUnmount() {
    this.refs.filepicker.removeEventListener('change', this.handleFilePick);
    // document.body.removeEventListener('drop', this.handleFileDrop);
  }

  componentWillReceiveProps(newProps) {
    this.syncCursorToSlideIndex(newProps);
  }

  handleFilePick(e) {
    const file = e.target.files[0];
    this.loadFile(file);
  }

  handleFileDrop(e) {
    const file = e.dataTransfer.items[0];
    if (file.kind === 'file') {
      e.preventDefault();
      this.loadFile(file.getAsFile());
    }
  }

  handleSyncSlideIndexChange(e) {
    this.setState({syncSlideIndex: !this.state.syncSlideIndex});
  }

  handleCursorActivity() {
    if (!this.state.syncSlideIndex) return;

    const cursorSlideIndex = this.getCursorSlideIndex();
    if (cursorSlideIndex !== this.props.slideIndex) {
      this.props.updateSlideIndex(cursorSlideIndex);
    }
  }

  syncCursorToSlideIndex(newProps) {
    if (!this.state.syncSlideIndex) return;

    const cursor = this.codeMirror.getCursor();
    const { start, end } = this.getSlideBounds(newProps.slideIndex);

    if (cursor.line < start.line) {
      this.codeMirror.setSelection(start, end, {scroll: true});
    } else if (cursor.line > end.line) {
      this.codeMirror.setSelection(end, start, {scroll: true});
    }
  }

  getCursorSlideIndex() {
    const { line, ch } = this.codeMirror.getCursor();
    const text = this.codeMirror.getValue();

    let newlineIdx = 0;
    for (let i = 0; i < line; i++ ) {
      newlineIdx = text.indexOf("\n", newlineIdx) + 1;
    }
    const textUpToCursor = text.slice(0, newlineIdx + ch);
    return (textUpToCursor.match(SLIDE_DELIMITER) || []).length;
  }

  getSlideBounds(slideIndex) {
    const text = this.codeMirror.getValue();
    const slides = text.split(SLIDE_DELIMITER).slice(0, slideIndex + 1);

    let startLine = slides.slice(0, slideIndex).reduce((cum, slideText) => {
      return cum + (slideText.match(/\n/g) || []).length;
    }, 0) + 2 * slideIndex;
    const endLine = startLine + (slides[slideIndex].match(/\n/g) || []).length + 1;

    return {start: {line: startLine, ch: 0}, end: {line: endLine, ch: 0}};
  }

  loadFile(file) {
    const reader = new FileReader();
    reader.onloadend = () => this.props.updateText(reader.result);
    reader.readAsText(file);
  }

  renderCodeMirror() {
    return (
      <CodeMirror
        ref="editor"
        value={this.props.text}
        editorDidMount={editor => { this.codeMirror = editor; }}
        onBeforeChange={
          (_editor, _data, value) => this.props.updateText(value)}
        onCursorActivity={this.handleCursorActivity}
        options={{
          theme: 'base16-dark',
          lineNumbers: true,
          mode: 'markdown',
          tabSize: 2,
          lineWrapping: true }}/>
    );
  }

  render() {
    return (
      <div className="input-container">
        <header>
          <nav>
            <i className="fa fa-trash-o"
                onClick={this.props.resetState}
                aria-hidden="true"></i>
            <a href="https://github.com/appacademy/slides">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <input type="file" ref="filepicker" />
            <input type="checkbox" id="sync-slide-index"
                   checked={this.state.syncSlideIndex}
                   onChange={this.handleSyncSlideIndexChange} />
            <label htmlFor="sync-slide-index">Sync editor position</label>
          </nav>
          <nav>
            <Link className="header" to="/present">
              <i className="fa fa-tv" aria-hidden="true"></i>
            </Link>
          </nav>
        </header>
        <div className="codemirror-container">
          {this.renderCodeMirror()}
        </div>
      </div>
    );
  }
}

export default EditView;
