import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'lz-side-draw',
  styleUrl: './side-draw.scss',
  shadow: true
})
export class SideDrawer {
  @Prop() title: string = 'defauly title';
  @Prop({ reflectToAttr: true, mutable: true }) open = false;

  render() {
    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={() => (this.open = false)}>X</button>
        </header>
        <main>
          <slot />
        </main>
      </aside>
    );
  }
}
