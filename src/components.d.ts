/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CalciteAction {
    'active': boolean;
    'indicator': boolean;
    'label': string;
    'text': string;
    'textEnabled': boolean;
  }
  interface CalciteActionBar {
    'expanded': boolean;
  }
  interface CalciteActionGroup {
    'justifyBottom': boolean;
  }
  interface CalciteActionPad {}
  interface CalciteFlowControl {}
  interface CalciteFlowPanel {
    'backButton': boolean;
    'heading': string;
    'label': string;
  }
}

declare global {


  interface HTMLCalciteActionElement extends Components.CalciteAction, HTMLStencilElement {}
  var HTMLCalciteActionElement: {
    prototype: HTMLCalciteActionElement;
    new (): HTMLCalciteActionElement;
  };

  interface HTMLCalciteActionBarElement extends Components.CalciteActionBar, HTMLStencilElement {}
  var HTMLCalciteActionBarElement: {
    prototype: HTMLCalciteActionBarElement;
    new (): HTMLCalciteActionBarElement;
  };

  interface HTMLCalciteActionGroupElement extends Components.CalciteActionGroup, HTMLStencilElement {}
  var HTMLCalciteActionGroupElement: {
    prototype: HTMLCalciteActionGroupElement;
    new (): HTMLCalciteActionGroupElement;
  };

  interface HTMLCalciteActionPadElement extends Components.CalciteActionPad, HTMLStencilElement {}
  var HTMLCalciteActionPadElement: {
    prototype: HTMLCalciteActionPadElement;
    new (): HTMLCalciteActionPadElement;
  };

  interface HTMLCalciteFlowControlElement extends Components.CalciteFlowControl, HTMLStencilElement {}
  var HTMLCalciteFlowControlElement: {
    prototype: HTMLCalciteFlowControlElement;
    new (): HTMLCalciteFlowControlElement;
  };

  interface HTMLCalciteFlowPanelElement extends Components.CalciteFlowPanel, HTMLStencilElement {}
  var HTMLCalciteFlowPanelElement: {
    prototype: HTMLCalciteFlowPanelElement;
    new (): HTMLCalciteFlowPanelElement;
  };
  interface HTMLElementTagNameMap {
    'calcite-action': HTMLCalciteActionElement;
    'calcite-action-bar': HTMLCalciteActionBarElement;
    'calcite-action-group': HTMLCalciteActionGroupElement;
    'calcite-action-pad': HTMLCalciteActionPadElement;
    'calcite-flow-control': HTMLCalciteFlowControlElement;
    'calcite-flow-panel': HTMLCalciteFlowPanelElement;
  }
}

declare namespace LocalJSX {
  interface CalciteAction extends JSXBase.HTMLAttributes<HTMLCalciteActionElement> {
    'active'?: boolean;
    'indicator'?: boolean;
    'label'?: string;
    'onCalciteActionClick'?: (event: CustomEvent<any>) => void;
    'text'?: string;
    'textEnabled'?: boolean;
  }
  interface CalciteActionBar extends JSXBase.HTMLAttributes<HTMLCalciteActionBarElement> {
    'expanded'?: boolean;
  }
  interface CalciteActionGroup extends JSXBase.HTMLAttributes<HTMLCalciteActionGroupElement> {
    'justifyBottom'?: boolean;
  }
  interface CalciteActionPad extends JSXBase.HTMLAttributes<HTMLCalciteActionPadElement> {}
  interface CalciteFlowControl extends JSXBase.HTMLAttributes<HTMLCalciteFlowControlElement> {}
  interface CalciteFlowPanel extends JSXBase.HTMLAttributes<HTMLCalciteFlowPanelElement> {
    'backButton'?: boolean;
    'heading'?: string;
    'label'?: string;
  }

  interface IntrinsicElements {
    'calcite-action': CalciteAction;
    'calcite-action-bar': CalciteActionBar;
    'calcite-action-group': CalciteActionGroup;
    'calcite-action-pad': CalciteActionPad;
    'calcite-flow-control': CalciteFlowControl;
    'calcite-flow-panel': CalciteFlowPanel;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


