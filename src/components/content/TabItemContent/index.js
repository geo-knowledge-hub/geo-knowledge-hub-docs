/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import TabItem from '@theme/TabItem';
import styles from './styles.module.css';
export default function TabItemContent({ children, value, label, ...props }) {
  return (
    <TabItem value={value} label={label} {...props}>
      <div className={styles.tabItemBorder}>{children}</div>
    </TabItem>
  );
}
