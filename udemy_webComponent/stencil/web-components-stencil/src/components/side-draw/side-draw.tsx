import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'lz-side-draw',
  styleUrl: './side-draw.scss',
  shadow: true
})
export class SideDrawer {
  @Prop() title: string = 'defauly title';

  render() {
    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
        </header>
        <main>
          <slot></slot>
        </main>
      </aside>
    );
  }
}
