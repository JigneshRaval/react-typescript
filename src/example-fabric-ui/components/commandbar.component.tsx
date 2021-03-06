import * as React from 'react';
import { assign } from '../../../node_modules/office-ui-fabric-react/lib/Utilities';
import { CommandBar } from '../../../node_modules/office-ui-fabric-react/lib/CommandBar';
import { Toggle } from '../../../node_modules/office-ui-fabric-react/lib/Toggle';

export class CommandBarBasicExample extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      isSearchBoxVisible: true,
      areNamesVisible: true,
      areIconsVisible: true
    };
  }

  public render() {
      let { items, farItems } = this.props;

      console.log(this.props);
    let { isSearchBoxVisible: searchBoxVisible, areIconsVisible: iconsVisible, areNamesVisible: namesVisible } = this.state;

    let filteredItems = items.map(item => assign({}, item, {
      name: namesVisible ? item.name : '',
      iconProps: iconsVisible ? item.iconProps : ''
    }));

    let filteredFarItems = farItems.map(item => assign({}, item, {
      name: namesVisible ? item.name : '',
      iconProps: iconsVisible ? item.iconProps : ''
    }));

    return (
      <div>
        <Toggle
          label='Show search box'
          checked={ searchBoxVisible }
          onChanged={ isSearchBoxVisible => this.setState({ isSearchBoxVisible }) }
          onText='Visible'
          offText='Hidden'
        />
        <Toggle
          label='Show names'
          checked={ namesVisible }
          onChanged={ areNamesVisible => this.setState({ areNamesVisible }) }
          onText='Visible'
          offText='Hidden' />
        <Toggle
          label='Show icons'
          checked={ iconsVisible }
          onChanged={ areIconsVisible => this.setState({ areIconsVisible }) }
          onText='Visible'
          offText='Hidden' />
        <CommandBar
          isSearchBoxVisible={ searchBoxVisible }
          searchPlaceholderText='Search...'
          elipisisAriaLabel='More options'
          items={ filteredItems }
          farItems={ filteredFarItems }
        />
      </div>
    );
  }
}