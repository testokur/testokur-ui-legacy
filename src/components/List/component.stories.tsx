import * as React from 'react';
import { List, ListItem } from '.';

export default {
  title: 'List',
};

export const Default = (): JSX.Element => {
  return (
    <List dataTestId="default">
      <ListItem>
        <span>Item-1</span>
      </ListItem>
      <ListItem>
        <span>Item-2</span>
      </ListItem>
      <ListItem>
        <span>Item-3</span>
      </ListItem>
      <ListItem>
        <span>Item-4</span>
      </ListItem>
      <ListItem>
        <span>Item-5</span>
      </ListItem>
    </List>
  );
};
