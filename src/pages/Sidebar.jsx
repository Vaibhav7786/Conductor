/* eslint-disable */

import { SideNavigation } from '@cloudscape-design/components';
import { useState } from 'react';

export default function Sidebar() {
  const [activeHref, setActiveHref] = useState('#dashboard');

  return (
    <SideNavigation
      header={{ text: 'Example App' }}
      activeHref={activeHref}
      onFollow={(event) => setActiveHref(event.detail.href)}
      items={[
        {
          type: 'link',
          text: 'Dashboard',
          href: '#dashboard',
        },
        {
          type: 'section',
          text: 'Section 1',
          items: [
            { type: 'link', text: 'Items', href: '#items' },
          ],
        },
        {
          type: 'section',
          text: 'Section 2',
          items: [
            { type: 'link', text: 'Item 1', href: '#item1' },
            { type: 'link', text: 'Item 2', href: '#item2' },
            { type: 'link', text: 'Item 2', href: '#item2-alt' },
          ],
        },
      ]}
    />
  );
}
