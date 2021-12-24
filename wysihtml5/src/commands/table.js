(function(wysihtml5) {
  var undef,
      NODE_NAME = "TABLE",
      dom       = wysihtml5.dom;
  
  function _removeFormat(composer, anchors) {
    var length  = anchors.length,
        i       = 0,
        anchor,
        codeElement,
        textContent;
    for (; i<length; i++) {
      anchor      = anchors[i];
      codeElement = dom.getParentElement(anchor, { nodeName: "code" });
      textContent = dom.getTextContent(anchor);

      // if <a> contains url-like text content, rename it to <code> to prevent re-autolinking
      // else replace <a> with its childNodes
      if (textContent.match(dom.autoLink.URL_REG_EXP) && !codeElement) {
        // <code> element is used to prevent later auto-linking of the content
        codeElement = dom.renameElement(anchor, "code");
      } else {
        dom.replaceWithChildNodes(anchor);
      }
    }
  }

  function _format(composer, attributes) {
      var node, table, level = 100;
      node = composer.selection.getSelectedNode();
      while (level-- && node.parentNode && node.parentNode.tagName != 'BODY') {
          node = node.parentNode;
      } 

      table = document.createElement('table');
      table.innerHTML = "<tr><td>&nbsp;</td></tr>";

      node.parentNode.insertBefore(table, node.nextSibling);
  }

  function _insertColumn(composer, position) {
          var node, table, rows, cell, index;
          composer.selection.getSelection().collapseToEnd();
          node = dom.getParentElement( composer.selection.getSelectedNode() , { nodeName: "TD"});
          if (node) {
            index = node.cellIndex;
            table = dom.getParentElement( node, {nodeName: 'TABLE'} );
            rows = table.querySelectorAll('tr');
          
            for (var i=0; i<rows.length; i++) {
                var cell = document.createElement("td");
                cell.innerHTML = "&nbsp;";
                if (position == 'before') {
                    rows[i].insertBefore(cell, rows[i].childNodes[index] );
                } else {
                    rows[i].insertBefore(cell, rows[i].childNodes[index].nextSibling );
                }
            }
          }
  
  }

  wysihtml5.commands.deleteTable = {
      exec: function (composer, command) {
          var node;
          composer.selection.getSelection().collapseToEnd();
          node = dom.getParentElement( composer.selection.getSelectedNode() , { nodeName: "TABLE"});
          node.parentNode.removeChild(node);
      }
  }
  wysihtml5.commands.deleteRow = {
      exec: function (composer, command) {
          var node, table;
          composer.selection.getSelection().collapseToEnd();
          node = dom.getParentElement( composer.selection.getSelectedNode() , { nodeName: "TR"});

          if (node) {
              // if the table only has one row, just delete the table
              table = dom.getParentElement( node , { nodeName: "TABLE"});
              if (table.getElementsByTagName('TR').length == 1) {
                  wysihtml5.commands.deleteTable.exec(composer);
                  return;
              }
              // okay, now just go ahead and delete the row
              node.parentNode.removeChild(node);
          }
      }
  }
  wysihtml5.commands.deleteColumn = {
      exec: function (composer, command) {
          var node, table, rows, cell, index;
          composer.selection.getSelection().collapseToEnd();
          node = dom.getParentElement( composer.selection.getSelectedNode() , { nodeName: "TD"});
          if (node) {
            // if I only have one column, just delete the table
            if (node.parentNode.childNodes.length == 1) {
                wysihtml5.commands.deleteTable.exec(composer);
                return;
            }

            index = node.cellIndex;
            table = dom.getParentElement( node, {nodeName: 'TABLE'} );
            rows = table.querySelectorAll('tr');
          
            for (var i=0; i<rows.length; i++) {
                rows[i].removeChild(rows[i].childNodes[index]);
            }
          }
      }
  }
  wysihtml5.commands.insertColumnLeft = {
      exec: function (composer, command) {
          _insertColumn(composer, 'before');
      }
  }
  wysihtml5.commands.insertColumnRight = {
      exec: function (composer, command) {
          _insertColumn(composer, 'after');
      }
  }
  wysihtml5.commands.insertRowAbove = {
      exec: function (composer, command) {
          var node, cloned;
          composer.selection.getSelection().collapseToEnd();
          node = dom.getParentElement( composer.selection.getSelectedNode() , { nodeName: "TR"});
          cloned = node.cloneNode(true);
          node.parentNode.insertBefore(cloned, node);
      }
  }
  wysihtml5.commands.insertRowBelow = {
      exec: function (composer, command) {
          var node, cloned;
          composer.selection.getSelection().collapseToEnd();
          node = dom.getParentElement( composer.selection.getSelectedNode() , { nodeName: "TR"});
          cloned = node.cloneNode(true);
          node.parentNode.insertBefore(cloned, node.nextSibling);
          
      }
  }
  
  wysihtml5.commands.createTable = {
    /**
     * TODO: Use HTMLApplier or formatInline here
     *
     * Turns selection into a link
     * If selection is already a link, it removes the link and wraps it with a <code> element
     * The <code> element is needed to avoid auto linking
     * 
     * @example
     *    // either ...
     *    wysihtml5.commands.createLink.exec(composer, "createLink", "http://www.google.de");
     *    // ... or ...
     *    wysihtml5.commands.createLink.exec(composer, "createLink", { href: "http://www.google.de", target: "_blank" });
     */
    exec: function(composer, command, value) {
      var table = this.state(composer, command);
      if (table) {
        // I'm in a table! show the menu
          return true;
      } else {
        // Create table 
        _format(composer, value);
      }
    },

    state: function(composer, command) {
      return wysihtml5.commands.formatInline.state(composer, command, "TABLE");
    },

    value: function() {
      return undef;
    }
  };
})(wysihtml5);
