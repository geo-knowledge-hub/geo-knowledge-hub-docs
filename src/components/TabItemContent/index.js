import React from 'react';
import TabItem from '@theme/TabItem';
import styles from './styles.module.css';

export default function TabItemContent({ children, value, label, ...props}) {
  return (
    <TabItem value={value} label={label} {...props}>
      <div
        className={styles.tabItemBorder}
      >
        {children}
      </div>
    </TabItem>
  );
}
