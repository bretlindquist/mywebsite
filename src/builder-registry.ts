// builder-registry.ts
import { Builder } from '@builder.io/react';
import dynamic from 'next/dynamic';

Builder.registerComponent(
  dynamic(() => import('./components/LightboxComponent')),
  {
    name: 'Lightbox',
    inputs: [
      { name: 'imageUrl', type: 'url', required: true },
      { name: 'thumbnailUrl', type: 'url', required: true },
      { name: 'alt', type: 'string' }
    ],
    image: 'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5613a1fdf494471bb57b5a9765f96af3'
  }
);
