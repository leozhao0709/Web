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
    let mainContent = <slot />;
    mainContent = (
      <div id="contact-information">
        <h2>Contact Information</h2>
        <p>You can reach us via phone or email.</p>
        <ul>
          <li>Phone: (xxx)-xxx-xxx</li>
          <li>
            E-Mail: <a href="mailto: something@somewhere.com">something@somewhere.com</a>
          </li>
        </ul>
      </div>
    );

    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={() => (this.open = false)}>X</button>
        </header>
        <section id="tab">
          <button class="active">Navigation</button>
          <button>Contact</button>
        </section>
        <main>{mainContent}</main>
      </aside>
    );
  }
}
