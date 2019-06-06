import { Component, h, Host, Prop } from "@stencil/core";

@Component({
  tag: "calcite-action-group",
  styleUrl: "calcite-action-group.scss",
  shadow: true
})
export class CalciteActionGroup {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  alignBottom
  //----------------------------------

  @Prop({ reflect: true }) alignBottom = false;

  //----------------------------------
  //  last
  //----------------------------------

  @Prop({ reflect: true }) last = false;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
