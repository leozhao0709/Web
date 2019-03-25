import { Component, Prop, State, Method } from '@stencil/core';

enum TAB_OPTIONS {
  NAV = 'nav',
  CONTACT = 'contact'
}

@Component({
  tag: 'lz-side-draw',
  styleUrl: './side-draw.scss',
  shadow: true
})
export class SideDrawer {
  @State() currentTab = TAB_OPTIONS.NAV;
  @Prop() title: string = 'defauly title';
  @Prop({ reflectToAttr: true, mutable: true }) opened = false;

  onTabChange(tab: TAB_OPTIONS) {
    this.currentTab = tab; // you don't need to call something like this.setState like react
  }

  @Method()
  open() {
    this.opened = true;
  }

  render() {
    let mainContent = <slot />;
    if (this.currentTab === TAB_OPTIONS.CONTACT) {
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
    }

    return [
      <div id="backdrop" onClick={() => (this.opened = false)} />,
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={() => (this.opened = false)}>X</button>
        </header>
        <section id="tab">
          <button
            class={this.currentTab === TAB_OPTIONS.NAV ? 'active' : ''}
            onClick={() => this.onTabChange(TAB_OPTIONS.NAV)}
          >
            Navigation
          </button>
          <button
            class={this.currentTab === TAB_OPTIONS.CONTACT ? 'active' : ''}
            onClick={() => this.onTabChange(TAB_OPTIONS.CONTACT)}
          >
            Contact
          </button>
        </section>
        <main>{mainContent}</main>
      </aside>
    ];
  }
}
