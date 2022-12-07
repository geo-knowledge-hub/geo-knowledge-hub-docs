import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';

const Playgrounds = [
    {
      name: '📦 GEOGLAM Knowledge Package',
      image: require('@site/static/img/playgrounds/codesandbox.png'),
      url: 'https://youtu.be/8Loxa1RFMe0',
      description: (
        <Translate id="playground.geoglam.description">
          Check the Knowledge Package by the GEOGLAM initiative.
        </Translate>
      ),
    },
    {
      name: '⚡ StackBlitz 🆕',
      image: require('@site/static/img/playgrounds/stackblitz.png'),
      url: 'https://docusaurus.new/stackblitz',
      description: (
        <Translate
          id="playground.stackblitz.description"
          values={{
            webContainersLink: (
              <Link href="https://blog.stackblitz.com/posts/introducing-webcontainers/">
                WebContainers
              </Link>
            ),
          }}>
          {
            'StackBlitz uses a novel {webContainersLink} technology to run Docusaurus directly in your browser.'
          }
        </Translate>
      ),
    },
  ];
