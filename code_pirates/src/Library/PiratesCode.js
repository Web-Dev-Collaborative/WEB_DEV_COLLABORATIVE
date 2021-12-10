import React, { Component } from "react";
// import boat from "../assets/images/Pirate Ship.png";
import boat from "../assets/images/boat.png";

class Block {
  constructor(children = [], id, description = "") {
    this.children = children;
    this.description = description;
    this.id = id;
  }
  compile() {
    console.log("Implement me!!");
  }

  jsxCompile() {
    return this.compile();
  }
}

class PBlock extends Block {
  constructor(children, id, description = "") {
    super(children, id, description);
    this.name = "p";
    this.description = "";
    this.id = id;
  }

  compile(className = "PiratesCode") {
    return `
      <p className="${className}>"
        ${this.children.map(child => child.compile()).join("")}
      </p>`;
  }

  jsxCompile(className = "PPiratesCode") {
    return (
      <p className={className}>
        {this.children.map(child => child.jsxCompile())}
      </p>
    );
  }
}

class H1Block extends Block {
  constructor(children, id, description = "") {
    super(children, id, description);
    this.name = "h1";
    this.description = "";
    this.id = id;
  }

  compile(className = "HeadPiratesCode") {
    return `
      <h1 className="${className}>"
          ${this.children.map(child => child.compile()).join("")}
      </h1>`;
  }

  jsxCompile() {}
}

class HBlock extends Block {
  constructor(children, id, lvl = 1, description = "") {
    super(children, id, description);
    this.description = "";
    this.id = id;
    this.lvl = lvl;
    this.name = `h${this.lvl}`;
  }

  compile(className = "HeadPiratesCode") {
    return `
      <${this.name} className="${className}>"
        ${this.children.map(child => child.compile()).join("")}
      </${this.name}>`;
  }

  // React.createElement(component, props, ...children)
  jsxCompile(className = "HeadPiratesCode") {
    let heading = React.createElement(
      `${this.name}`,
      { className: `${className}` },
      this.children.map(child => child.jsxCompile())
    );
    return heading;
  }
}

class ImgBlock extends Block {
  // TODO: put boat back
  constructor(
    jsxAttr = { src: `${boat}`, alt: "سفينة" },
    id,
    description = ""
  ) {
    super([], id, description);
    this.description = description;
    this.id = id;
    this.name = "img";
    this.jsxAttr = jsxAttr;
  }

  compile(className = "boat") {
    let attr = Object.entries(this.jsxAttr);

    let imgBlock = `
    <img className="${className}" 
        ${attr.map(([k, v]) => `${k}="${v}"`).join(" ")} 
    />`;

    console.log("====================");
    console.log("TCL: compile -> imgBlock", imgBlock);
    console.log("====================");

    return imgBlock;
  }

  jsxCompile(className = "boat") {
    return <img className={className} {...this.jsxAttr} />;
  }
}

class TextBlock extends Block {
  constructor(text = "Sample", id, description) {
    super([], id, description);
    this.description = description;
    this.id = id;
    this.text = text;
    this.name = "text";
  }

  compile(className = "textPirateBird") {
    return `<span className="${className}>" ${this.text} </span>`;
  }

  jsxCompile(className = "textPirateBird") {
    return <span className={className}>{this.text}</span>;
  }
}

class ListBlock extends Block {
  constructor(children, id, ordered = false, description = "") {
    super(children, id, description);
    this.description = description;
    this.id = id;
    this.name = ordered ? "ol" : "ul";
  }

  compile(className = "ListPiratesCode") {
    return `
      <${this.name} className="${className}>"
          ${this.children.map(child => child.compile()).join("")}
      </${this.name}>`;
  }

  jsxCompile(className = "ListPiratesCode") {
    let list = React.createElement(
      `${this.name}`,
      { className: `${className}` },
      this.children.map(child => child.jsxCompile())
    );
    return list;
  }
}

class ListItemBlock extends Block {
  constructor(children, id, key = "", description = "") {
    super(children, id, description);
    this.description = description;
    this.id = id;
    this.name = "li";
    this.key = key;
  }

  compile(className = "ListItemPiratesCode") {
    return `
      <li className="${className}>"
          ${this.children.map(child => child.compile()).join("")}
      </li>`;
  }

  jsxCompile(className = "ListItemPiratesCode") {
    return (
      <li className={className} key={this.key}>
        {this.children.map(child => child.jsxCompile())}
      </li>
    );
  }
}

class HTMLBlock extends Block {
  constructor(children, id) {
    super(children, id);
    this.id = id;
    this.name = `html`;
  }

  compile(className = "HTMLPiratesCode") {
    return `
      <$div className="${className}>"
        ${this.children.map(child => child.compile()).join("")}
      </$div>`;
  }

  jsxCompile(className = "HTMLPiratesCode") {
    return (
      <div className={className}>
        {this.children.map(child => child.jsxCompile())}
      </div>
    );
  }
}

class BodyBlock extends Block {
  constructor(children, id) {
    super(children, id);
    this.description = "";
    this.id = id;
    this.name = `body`;
  }

  compile(className = "BodyPiratesCode") {
    return `
      <$div className="${className}>"
        ${this.children.map(child => child.compile()).join("")}
      </$div>`;
  }

  jsxCompile(className = "BodyPiratesCode") {
    return (
      <div className={className}>
        {this.children.map(child => child.jsxCompile())}
      </div>
    );
  }
}

class TitleBlock extends Block {
  constructor(children, id) {
    super(children, id);
    this.id = id;
    this.name = `title`;
  }

  compile(className = "BodyPiratesCode") {
    return `
      <$div className="${className}>"
        ${this.children.map(child => child.compile()).join("")}
      </$div>`;
  }

  jsxCompile(className = "BodyPiratesCode") {
    return (
      <div className={className}>
        {this.children.map(child => child.jsxCompile())}
      </div>
    );
  }
}

export {
  TextBlock,
  PBlock,
  H1Block,
  ImgBlock,
  HBlock,
  ListBlock,
  ListItemBlock,
  HTMLBlock,
  BodyBlock,
  TitleBlock
};
